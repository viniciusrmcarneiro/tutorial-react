var path = require('path');
const config = {
	entry: {
		app: ???,
	},
	output: {
		path: ???,
		filename: ???,
		publicPath: ???,
	},
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
		],
	},
};
module.exports = config;

