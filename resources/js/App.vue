<template>
<div>
    <navbar v-show="$route.path != '/login'" ></navbar>
    <div class="main-wrapper" @keyup.enter="checkUserInactivity">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from './globals/navbar.vue'
import { clearTimeout, setTimeout } from 'timers';
import {mapActions} from 'vuex'
export default {
  components: {
    navbar
  },
  data() {
    return {
      timeout: null
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    checkForCookies () {
      if (document.cookie.includes('userKey')) {
        if (this.$route.fullPath === '/login') {
          this.$router.push({ name: 'welcome' })
        }
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    checkUserInactivity() {
      var idleTimeout= parseInt(document.querySelector('meta[name=idle-timeout]').content)  
      this.timeout = setTimeout(()=>{
        this.logout();
      }, idleTimeout * 60 * 1000)
      window.addEventListener("mousemove", this.resetTimer, false);
      window.addEventListener("mousedown", this.resetTimer, false);
      window.addEventListener("keypress", this.resetTimer, false);
      window.addEventListener("DOMMouseScroll", this.resetTimer, false);
      window.addEventListener("mousewheel", this.resetTimer, false);
      window.addEventListener("touchmove", this.resetTimer, false);
      window.addEventListener("MSPointerMove", this.resetTimer, false);      
    },
    resetTimer() {
      clearTimeout(this.timeout)
      this.checkUserInactivity() 
    }
  },
  mounted () {
    this.checkForCookies()
    this.checkUserInactivity()
  }
}
</script>
