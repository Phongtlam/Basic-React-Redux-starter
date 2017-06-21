const express = require('express');
const path = require('path');
const middleware = require('./middleware');

const webpackConfig = require('../webpack.config');

const indexPath = path.join(__dirname, '/../public/index.html');
const publicPath = express.static(path.join(__dirname, '../public'));


const app = express();

app.use(middleware.bodyParser.urlencoded({ extended: false }));
app.use(middleware.bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const compiler = middleware.webpack(webpackConfig);

  app.use(middleware.webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));
  app.use(middleware.webpackHotMiddleware(compiler));
}

// prod environment
app.use('/public', publicPath);
app.get('/', (_, res) => { res.sendFile(indexPath); });

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(allowCrossDomain);

module.exports = app;
