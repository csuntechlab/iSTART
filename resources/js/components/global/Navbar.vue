<template>
<nav class="navbar-wrapper">
  <div class="navbar row">
      <div class="navbar__menu-toggles">
        <button class="navbar__button" type="button" @click="toggleNavigation">
          <i class="fas fa-bars"></i>
        </button>
        <h1 class="navbar__title">iSTART</h1>
        <div></div>
      </div>
    </div>
  <div id="dropdown" class="navbar-dropdown transition-350ms">
    <div class="navbar-nav navbar-dropdown-list">
      <router-link v-show="!isAdminUser" to="/" class="navbar-dropdown__divider">
        <div @click="closeNavigation" class="navbar-dropdown__item">
          <span class="nav-link">DASHBOARD</span>
        </div>
      </router-link>
      <router-link v-show="!isAdminUser" to="/schedule" class="navbar-dropdown__divider">
        <div class="navbar-dropdown__item" @click="closeNavigation">
          <span class="nav-link">ABOUT</span>
        </div>
      </router-link>
      <router-link v-show="!isAdminUser" to="/schedule" class="navbar-dropdown__divider">
        <div class="navbar-dropdown__item" @click="closeNavigation">
          <span class="nav-link">RESOURCES</span>
        </div>
      </router-link>
      <router-link v-show="!isAdminUser" to="/schedule" class="navbar-dropdown__divider">
        <div class="navbar-dropdown__item" @click="closeNavigation">
          <span class="nav-link">CONTACT US</span>
        </div>
      </router-link>
      <router-link to="/logout" class="navbar-dropdown__divider">
        <div class="navbar-dropdown__item" @click="closeNavigation">
          <span class="nav-link">LOGOUT</span>
        </div>
      </router-link>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',

  data () {
    return {
      isNavOpen: false,
      module_title: 'Alcohol'
    }
  },
  computed: {
    ...mapGetters([
      'isAdminUser'
    ])
  },
  methods: {
    toggleNavigation () {
      if (this.isNavOpen === false) {
        document.querySelector('body').classList.add('body--overflow-hidden')
        document.getElementById('dropdown').classList.add('navbar-dropdown--show')
        this.isNavOpen = true
      } else {
        document.querySelector('body').classList.remove('body--overflow-hidden')
        document.getElementById('dropdown').classList.remove('navbar-dropdown--show')
        this.isNavOpen = false
      }
    },

    closeNavigation () {
      this.isNavOpen = true
      this.toggleNavigation()
    }
  }
}
</script>
