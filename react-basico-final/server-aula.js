var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var dir_aula = path.join(__dirname, process.argv[2]);
var config = require(path.join(dir_aula,'/webpack.config.js'));

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	host: '0.0.0.0',
	stats: {
		colors: true,
		exclude:[/node_modules/],
	},
	contentBase: dir_aula,
});

server.listen(3000, '0.0.0.0', function() {
	console.log('#############################');
	console.log('# Listening at 0.0.0.0:3000 #');
	console.log('#############################');
});