const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 3000,
    // progress: true,
    compress: true
  },
  plugins: [ new HtmlWebpackPlugin({
      title: 'MyApp',
      filename: 'index.html',
      favicon: 'favicon.ico'
    })
  ]
}