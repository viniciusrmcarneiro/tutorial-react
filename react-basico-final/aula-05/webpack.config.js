var webpack = require('webpack');
var path = require('path');

var config = {
	target: 'web',
	entry: {
		app: [path.join(__dirname, '/index.js')],
	},

	output: {
		path: path.join(__dirname),
		filename: 'bundle.js',
		publicPath: '/',
	},

	plugins: [
		new require('nyan-progress-webpack-plugin')(),
	],
	devtool: 'source-map',
	debug: true,
	module: {
		loaders: [
				{
					test: /\.js(x)?$/,
					loaders: ['babel-loader?stage=0'],
					exclude: /(node_modules)/,
					include: __dirname
				},
				{ 
					test: /\.json$/,
					loader: 'json-loader',
				},

		],
	},
};

module.exports = config;