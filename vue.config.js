const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, 'src'),
            'styles':path.join(__dirname,'src/assets/styles'),
            'common': path.join(__dirname,'src/components'),
          },

        },
      },
}