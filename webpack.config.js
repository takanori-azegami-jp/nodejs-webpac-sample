const path = require('path');

module.exports = {
  mode: 'development',
  entry: `./src/index.js`,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist'),
    assetModuleFilename: "asset/[name][ext]"
  },
  module: {
    rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(jpg|png|svg|ico)$/,
				type: "asset",
			}
    ]
  }
};