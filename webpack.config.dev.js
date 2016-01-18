'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	devtool: 'eval-source-map',

	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, 'app/App.js')
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	 plugins: [
		new webpack.HotModuleReplacementPlugin(),	
	  new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['babel', 'react-map-styles']
			}, {
      test: /\.svg$/,
      loader: 'file-loader'
    }, {
    	test: /\.scss$/,
    	loaders: ['style', 'css', 'sass']
    }]
	}
}