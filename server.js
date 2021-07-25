/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const express = require('express');
const fs = require('fs');
const { renderToString } = require('@vue/server-renderer');
// eslint-disable-next-line import/no-unresolved
const manifest = require('./server/ssr-manifest.json');

const server = express();

const appPath = path.join(__dirname, './', 'server', manifest['main.js']);
// eslint-disable-next-line import/no-dynamic-require
const createApp = require(appPath).default;

server.use('/img', express.static(path.join(__dirname, './client', 'img')));
server.use('/js', express.static(path.join(__dirname, './client', 'js')));
server.use('/css', express.static(path.join(__dirname, './client', 'css')));
server.use(
  '/favicon.ico',
  express.static(path.join(__dirname, './client', 'favicon.ico')),
);

server.get('*', async (req, res) => {
  const { app } = await createApp();

  const appContent = await renderToString(app);

  fs.readFile(path.join(__dirname, '/client/index.html'), (err, html) => {
    if (err) {
      throw err;
    }

    const ssrHtml = html
      .toString()
      .replace('<div id="app">', `<div id="app">${appContent}`);
    res.setHeader('Content-Type', 'text/html');
    res.send(ssrHtml);
  });
});

module.exports = server;
