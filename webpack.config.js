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
        // 拡張子 css のファイル（正規表現）
        test: /\\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\\.(jpg|png|svg|ico)$/,
        type "asset",
      }
    ]
  }
};