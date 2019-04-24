<template>
<nav class="navbar-wrapper">
  <div class="navbar row">
      <div class="col-1">
        <button class="navbar__button" type="button" @click="toggleNavigation">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="col-4 offset-3 text-center mr-auto navbar__title">
        <p v-show="$route.path === '/module'" class="navbar__text">{{ module_title }}</p>
      </div>
    </div>
  <div id="dropdown" class="navbar-dropdown transition-350ms">
    <div class="navbar-nav navbar-dropdown-list">
      <router-link v-show="!isAdminUser" to="/" class="navbar-dropdown-list__divider">
        <div @click="closeNavigation" class="navbar-dropdown__item">
          <span class="nav-link">MODULE</span>
        </div>
      </router-link>

      <router-link v-show="!isAdminUser" to="/schedule" class="navbar-dropdown__divider">
        <div class="navbar-dropdown__item" @click="closeNavigation">
          <span class="nav-link">SCHEDULE</span>
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
