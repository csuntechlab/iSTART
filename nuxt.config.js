const pkg = require('./package')
const path = require('path');
const scss = require('node-sass');


module.exports = {
  mode: 'spa',
  /*
  ** srcDir points to where nuxt will be compiled by yarn nuxt-dev
  */
  srcDir: 'resources/',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        {
          loader: 'postcss-loader',
          options: {
            parser: 'postcss-scss',
            plugins: {
              'postcss-import': {},
              'postcss-simple-vars': {},
              'postcss-strip-inline-comments': {},
              'postcss-remify': {},
              'precss': {},
              'postcss-cssnext': {},
              'cssnano': false
            }
          }
        },
      ]
    }
  ],
    extend(config, ctx) {
    }
  }
}
