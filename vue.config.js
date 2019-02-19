const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
      }
    }
  },
  lintOnSave: true

  // chainWebpack: config => {
  //     config
  //         .entry('main')
  //         .add('/resources/js/src/main.js')
  // },
  // outputDir: path.resolve(__dirname, '/public/js/')

}
