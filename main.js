var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.dev.js');

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var app = express();

if (isDeveloping) {
	var compiler = webpack(config);
	var middleware = webpackMiddleWare(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	});

	app.use(middleware);

	app.use(webpackHotMiddleware(compiler));

	app.get('*', function response(req, res) {
		res.sendFile(path.join(__dirname, 'app/index.html'));
	});		
} else {
	app.use(express.static(__dirname + '/dist'));
	app.get('*', function response(req, res) {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}

app.listen('3000', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});