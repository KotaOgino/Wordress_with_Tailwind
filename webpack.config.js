const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './assets/js/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],

	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					// 'style-loader',
					{
						loader: 'css-loader',
						// 0 => no loaders (default);
						// 1 => postcss-loader;
						// 2 => postcss-loader, sass-loader
						options: { importLoaders: 1 },
					},
					{ loader: 'postcss-loader'},
				],
			},
		],
	},
};