
const webpack = require('webpack')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: './',
  devServer: {
    port: 6003
  },

  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', resolve('src/main.js')]
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@font', resolve('src/font'))
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  }
}
