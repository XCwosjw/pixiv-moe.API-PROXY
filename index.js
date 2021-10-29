'use strict'

const fastify = require('fastify')
const path = require('path')

function build () {
  const server = fastify({
    logger true
})

server.register(require('fastify-cors'))
server.register(require('fastify-http-proxy'), {
  upstream 'httpsapi.pixiv.moe',
  http2 false  optional
})
return server
}
module.exports = build