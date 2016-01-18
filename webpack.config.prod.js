var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [
		path.join(__dirname, 'app/App.js')
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name]-[hash].min.js',
	},
	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    // new StatsPlugin('webpack.stats.json', {
    //   source: false,
    //   modules: false
    // }),
    new webpack.DefinePlugin({
      'process.env': {
      	'NODE_ENV': JSON.stringify('production')
      }
    })
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