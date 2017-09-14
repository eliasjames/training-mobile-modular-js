const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './02-init.js',
	module: {
		rules: [
      {
        test: /\.js$/,
        use: [ "source-map-loader" ],
        enforce: "pre"
      },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						sourceMaps: ['inline']
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
