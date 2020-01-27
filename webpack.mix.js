const mix = require('laravel-mix')

mix.options({
  processCssUrls: false,
  uglify: {
    parallel: true
  }
})
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// mix.webpackConfig({
//   plugins: [
//     new BrowserSyncPlugin({
//       files: [
//         'app/**/*',
//         'public/**/*',
//         'resources/**/**/*',
//         'routes/**/*'
//       ]
//     })
//   ]
// })

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/main.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

// mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');
if (mix.inProduction()) {
  mix.version()
}
