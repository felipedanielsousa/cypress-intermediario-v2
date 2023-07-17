const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, //para o token não vazar no headers
      requestMode: true, //Para não precisar mudar os comandos já criados como cy.request para cy.api
      snapshotOnly: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})