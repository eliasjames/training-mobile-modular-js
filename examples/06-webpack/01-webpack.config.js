const path = require('path');

module.exports = {
	entry: './01-init.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	output: {
    filename: "bundle.js", 
		path: path.resolve(__dirname, "dist"),
		publicPath: 'dist/'
	}
}
