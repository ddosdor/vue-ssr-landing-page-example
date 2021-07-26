/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const express = require('express');
const fs = require('fs');
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const manifest = require('./dist/server/ssr-manifest.json');

const PORT = process.env.PORT || 8080;
const server = express();

const appPath = path.join(__dirname, './dist', 'server', manifest['main.js']);
const App = require(appPath).default;

server.use('/img', express.static(path.join(__dirname, './dist/client', 'img')));
server.use('/js', express.static(path.join(__dirname, './dist/client', 'js')));
server.use('/css', express.static(path.join(__dirname, './dist/client', 'css')));
server.use(
  '/favicon.ico',
  express.static(path.join(__dirname, './dist/client', 'favicon.ico')),
);

server.get('*', async (req, res) => {
  const app = createSSRApp(App);
  const appContent = await renderToString(app);

  fs.readFile(path.join(__dirname, '/dist/client/index.html'), (err, html) => {
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

console.log(`Server listening on port: ${PORT}`);

server.listen(PORT);
