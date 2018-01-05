'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
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
