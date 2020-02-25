const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const config = require('../webpack.config')
const compiler = webpack(/** webpack options */ config )
const express = require('express')
const app = express()
 
const port = 3000

app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  })
)

app.get('/api', (req, res) => {
  res.json({ msg: 'hello world!' })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))