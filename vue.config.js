const { defineConfig } = require('@vue/cli-service')
const { Linter } = require('eslint')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false
})
