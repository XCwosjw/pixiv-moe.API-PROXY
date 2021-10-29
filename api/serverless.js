'use strict'

const build = require('../index')

const server = build()

module.exports = async function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  await server.ready()
  server.server.emit('request', req, res)
}
