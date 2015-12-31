const webpack = require('webpack');
const webpackDevServer = require("webpack-dev-server");
const config = require('./webpack.config');

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
	hot: true,
	host: '0.0.0.0',
	stats: {
		colors: true,
		exclude:[/node_modules/],
	},
})

server.listen(8081, '0.0.0.0', function(){
	console.log('Listening at 0.0.0.0:8081');
})
