var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  /*entry: ["./src/js/index.js", 使用browserHistory时需要修改的地方
        'webpack-dev-server/client?http://localhost:4562',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',],*/
  entry: "./src/js/root.js",
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  module: {
    loaders: [
      {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
      },
      {

            test: /\.css?$/,
            loader:'style-loader!css-loader'
      },
      {
            test: /\.less$/,
            loader:'style-loader!css!postcss-loader!less-loader'

      },

      {
            test: /\.sass$/,
            loader:'style-loader!css!postcss-loader!sass-loader'

      }
    ]
  },

  plugins: debug ? [] : [
    //new webpack.HotModuleReplacementPlugin(),使用browserHistory时需要修改的地方
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
