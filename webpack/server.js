const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV != 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');

  // this code is only used for non-production environment
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // make dist folder available
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'dist/index.html'));
  });
}
app.listen(3050, () => console.log('Listening'));
