# webpack配置

```json
{
  "name": "webpack-study",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dist": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "file-loader": "^4.2.0",
    "lodash": "^4.17.15"
  },
  "devDependencies": {
    "autoprefixer": "^9.6.1",
    "browserslist": "^4.6.6",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.12.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^3.0.0",
    "postcss-nested": "^4.1.2",
    "sass-loader": "^7.1.0",
    "style-loader": "^1.0.0",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "webpack": "^4.39.1",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.7.2"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```

```js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 优化

const indexPage = new HtmlWebpackPlugin({
  title: 'My App',
  filename: 'index.html',
  template: './src/template/index.html',
  favicon: 'favicon.ico'
})


module.exports = {
  mode: 'development', // development production
  // entry: './src/index.js',
  // entry: ['./src/index.js', './src/example.js'],
  entry: {
    index: './src/index.js',
    example: './src/example.js' // 访问 http://localhost:8000/example.html
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8000,
    progress: true,
    contentBase: './dist', // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要
    compress: true // 启用 gzip 压缩
  },
  optimization: {
    minimizer: [ new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    // 这里在编译之前先删除dist文件夹
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"]
    }),
    new HtmlWebpackPlugin({
      title: 'indexPage',
      filename: 'index.html',
      template: './src/template/index.html',
      chunks: ['index'],
      favicon: 'favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'examplePage',
      filename: 'example.html',
      template: './src/template/example.html',
      chunks: ['example'],
      favicon: 'favicon.ico'
    }),
    // 抽离css为单独文件
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              // modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              // modules: true
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i, //  /\.(png|jpg|gif)$/
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // [path][name].[ext]
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  }
}
```