import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
var ExtractTextPlugin = require("extract-text-webpack-plugin")

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  mode: 'development',
  entry: src + '/index.js',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        // 対象となるファイルの拡張子(cssのみ)
        test: /\.css$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // スタイルシートをJSからlinkタグに展開する機能
          'style-loader',
          // CSSをバンドルするための機能
          'css-loader',
        ],
      },

        
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    //以下追記
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
}
