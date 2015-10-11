import path from 'path';

var config = {
	target: 'web',
	entry:{
		app03:[ path.join(__dirname, '/index.js') ],
	},
	output:{
		path: __dirname,
		filename: 'bundle.app03.js',
		publicPath: '/',
	},rr 
	devtool: 'source-map',
	debug: true,
	module: {
		loaders: [
			{
				test: /\.js(x)?$/,
				loaders: ['babel-loader?stage=0'],
				exclude: /(node_modules)/,
				include: __dirname,
			},
			{ 
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
	},
}