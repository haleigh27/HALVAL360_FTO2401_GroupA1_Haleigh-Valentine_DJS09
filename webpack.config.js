const path = require('path');

module.exports = {
	mode: 'development', // or 'production'
	entry: {
		index: './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // Ensure output path is defined
		filename: '[name].pack.js',
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};
