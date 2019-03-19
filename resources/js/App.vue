<template>
<div>
    <navbar v-show="$route.path != '/login'" ></navbar>
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from './components/global/navbar.vue'
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
      'clearUserData'
    ]),
    checkForCookies () {
      if (document.cookie.includes('userKey')) {
        if (this.$route.fullPath === '/login') {
          this.$router.push({ name: 'dashboard' })
        }
      } else {
        this.$router.push({ name: 'Login' })
      }
    },
    checkUserInactivity() {
      var idleTimeout= parseFloat(document.querySelector('meta[name=idle-timeout]').content)  
      this.timeout = setTimeout(()=>{
        this.clearUserData();
      }, idleTimeout * 60 * 1000)
      window.addEventListener("mousemove", this.resetTimer);
      window.addEventListener("mousedown", this.resetTimer);
      window.addEventListener("keypress", this.resetTimer);
      window.addEventListener("DOMMouseScroll", this.resetTimer);
      window.addEventListener("mousewheel", this.resetTimer);
      window.addEventListener("touchmove", this.resetTimer);
      window.addEventListener("MSPointerMove", this.resetTimer);   
    },
    resetTimer() {
      clearTimeout(this.timeout)
        this.checkUserInactivity() 
    }
  },
  mounted () {
    this.checkForCookies()
    this.checkUserInactivity()
  },
}
</script>
