window.Vue = require("vue");

Vue.component("index", require("./pages/index.vue"));


//check to see if Vue used on each page before initing
if(document.getElementById("app")){
    const app = new Vue({
      el: "#app",
    });
  }
  console.log("js lives");
