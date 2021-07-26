/* eslint-disable @typescript-eslint/no-var-requires */
// requiring path and fs modules
const path = require('path');
const fs = require('fs');

module.exports = () => {
  // joining path of directory
  const directoryPath = path.join(__dirname);
  // passsing directoryPath and callback function
  fs.readdir(directoryPath, (err, files) => {
    // handling error
    if (err) {
      return console.log(`Unable to scan directory: ${err}`);
    }
    // listing all files using forEach
    files.forEach((file) => {
      // Do whatever you want to do with the file
      console.log(file);
    });
  });
};

// /* eslint-disable linebreak-style */
// /* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path');
// const express = require('express');
// const fs = require('fs');
// const { renderToString } = require('@vue/server-renderer');
// // eslint-disable-next-line import/no-unresolved
// // eslint-disable-next-line import/no-dynamic-require
// const manifest = require(path.join(__dirname, 'dist/server/ssr-manifest.json'));

// const server = express();

// const appPath = path.join(__dirname, '', 'server', manifest['main.js']);
// // eslint-disable-next-line import/no-dynamic-require
// const createApp = require(appPath).default;

// server.use('/img', express.static(path.join(__dirname, 'client', 'img')));
// server.use('/js', express.static(path.join(__dirname, 'client', 'js')));
// server.use('/css', express.static(path.join(__dirname, 'client', 'css')));
// server.use(
//   '/favicon.ico',
//   express.static(path.join(__dirname, 'client', 'favicon.ico')),
// );

// server.get('*', async (req, res) => {
//   const { app } = await createApp();

//   const appContent = await renderToString(app);

//   fs.readFile(path.join(__dirname, 'client/index.html'), (err, html) => {
//     if (err) {
//       throw err;
//     }

//     const ssrHtml = html
//       .toString()
//       .replace('<div id="app">', `<div id="app">${appContent}`);
//     res.setHeader('Content-Type', 'text/html');
//     res.send(ssrHtml);
//   });
// });

// module.exports = server;
