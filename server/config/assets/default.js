'use strict';

module.exports = {
    server: {
        allJS: ['server.js', 'config/**/*.js', 'server/modules/*/server/**/*.js'],
        models: 'server/modules/*/models/**/*.js',
        routes: ['server/modules/!(core)/routes/**/*.js', 'server/modules/core/routes/**/*.js'],
        sockets: 'server/modules/*/sockets/**/*.js',
        config: ['server/modules/*/config/*.js'],
        policies: 'server/modules/*/policies/*.js'
      }
}