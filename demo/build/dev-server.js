'use strict'
const PagiumCore = require('pagium2-core')
const config = require('../config')

// Get webpack config
let webpackConfig = PagiumCore.getConfig(config)

// init dev server
PagiumCore.initServer(webpackConfig)
