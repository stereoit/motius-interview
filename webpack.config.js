const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    entry: './app.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].bundle.[chunkhash].js',
        pathinfo: !env.prod,
    },
    devtool: 'source-map',
    context: resolve(__dirname, 'src'),
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8081',
          secure: false
        }
      }
    }
  }
}
