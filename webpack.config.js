var debug = process.env.NODE_ENV !== "production";
const BabiliPlugin = require("babili-webpack-plugin");//打包插件工具
var webpack = require('webpack');
var path = require('path');

module.exports = {

  performance:{
      hints:'warning',
      maxEntrypointSize:10000,
      maxAssetSize:450000
  },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  /*entry: ["./src/js/index.js", 使用browserHistory时需要修改的地方
        'webpack-dev-server/client?http://localhost:4562',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',],*/
  //entry: "./src/js/root.js",
// entry 为多入口
  entry:{
      root:"./src/js/root.js",
      vendor:['react']

  },
  output: {
    path: __dirname,
    /*filename: "./src/bundle.js"*/
    filename: "[name].js"
  },
  devtool:'source-map', //查看源代码方便在浏览器中打断点
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
            //下面是使用ant-design的配置文件
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
    new BabiliPlugin(), //打包工具
    new webpack.optimize.CommonsChunkPlugn({

        name : 'vendor' // 指定公共 bundle 的名字。
    })

  ],
};
