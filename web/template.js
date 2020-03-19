const fs = require('fs')
const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')

const publicPath = path.resolve(__dirname, './template')
const htmlFileRe = /\.html$/


function getPageLists(publicPath, htmlFileRe) {

  const list = fs.readdirSync(publicPath)
    .filter((file) => {
      return htmlFileRe.test(file) // ['list.html']
    })
    .map((item) => {
      const { name } = path.parse(item) // 'list'
      return {
        template: path.resolve(publicPath, item),
        title: name,
        filename: item,
        favicon: 'favicon.ico',
        chunks: [name]
      }
    })

  return list

}

function getHtmlWebpackPlugins() {
  const entries = getPageLists(publicPath, htmlFileRe)

  return entries.map((entry) => {
    return new HtmlWebPackPlugin(entry)
  })

}


module.exports = {
  getHtmlWebpackPlugins
}
