const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
   rules: [
    {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
      include: /\.module\.css$/,
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      exclude: /\.module\.css$/,
    },
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'src/index.html',
      inject:'body',
    }),

  ],
  devServer: {
    static: './dist',
    watchFiles: ["src/*.html"],
    hot: true,
  },
  devtool: 'inline-source-map',
};