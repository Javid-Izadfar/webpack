var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('postcss-import')(),
    require('postcss-each')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-at-rules-variables')(),
    require('postcss-for')(),
    require('postcss-custom-properties')(),
    require('postcss-simple-vars')(),
    require('postcss-short')(),
    require('postcss-calc')(),
    require('postcss-color-function')()
  ]
}
