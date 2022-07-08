const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    open: true,
    https: false,
    host: 'localhost',
    proxy: {
      [process.env.VUE_APP_SERVICE_NAME]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_SERVICE_NAME]: ''
        }
      }
    }
  }
})
