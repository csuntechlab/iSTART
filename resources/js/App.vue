<template>
<div>
    <navbar v-show="$route.path != '/login'" ></navbar>
    <div class="main-wrapper" @keyup.enter="checkUserInactivity">
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
      var idleTimeout= parseInt(document.querySelector('meta[name=idle-timeout]').content)  
      this.timeout = setTimeout(()=>{
        this.clearUserData();
      }, idleTimeout * 60 * 1000)
      window.addEventListener("mousemove", this.resetTimer, {passive:true});
      window.addEventListener("mousedown", this.resetTimer, {passive:true});
      window.addEventListener("keypress", this.resetTimer, {passive:true});
      window.addEventListener("DOMMouseScroll", this.resetTimer, {passive:true});
      window.addEventListener("mousewheel", this.resetTimer, {passive:true});
      window.addEventListener("touchmove", this.resetTimer, {passive:true});
      window.addEventListener("MSPointerMove", this.resetTimer, {passive:true});      
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
