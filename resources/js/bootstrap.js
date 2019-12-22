/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.appToken = token.content;
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


/**
 * Add the app url to the javascript side of things
 */

const url = document.head.querySelector('meta[name="app-url"]');

if (url) {
  window.axios.defaults.baseURL = url.content;
  window.appURL = url.content;
} else {
  console.error("Please set the app url 'meta' tag.");
}

const idle-timeout = document.head.querySelector('meta[name="idle-timeout"]');

if (idle-timeout) {
  window.idleTimeout = idle-timeout;
} else {
  console.error("Please set the idle time out 'meta' tag.");
}

const days-to-release = document.head.querySelector('meta[name="days-to-release"]');

if (days-to-release) {
  window.daysToRelease = days-to-release;
} else {
  console.error("Please se the days-to-release 'meta' tag.");
}

const slide-wait-time = document.head.querySelector('meta[name="slide-wait-time"]');

if (slide-wait-time) {
  window.slideWaitTime = slide-wait-time;
} else {
  console.error("Please set the slide-wait-time 'meta' tag.");
}
