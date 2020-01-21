<template>
<nav class="navbar">
  <img class="navbar__logo" :src="url + '/images/logos/logo_white.svg'" alt="iStart Logo"/>
  <div class="navbar__mobile-wrapper">
    <button class="navbar__button" type="button" @click="toggleNavigation" :aria-expanded="isNavOpen ? 'tree' : 'false'">
      <i class="fas fa-bars"></i>
    </button>
    <span class="navbar__location"> {{ displayCurrentPage }} </span>
  </div>
  <ul id="dropdown" class="navbar__item-wrapper" :class="isNavOpen ? 'navbar__item-wrapper--active' : ''">
    <li class="navbar__item">
      <router-link v-show="!isAdminUser && !isDemoModeEnabled" to="/" class="navbar__link">
        Dashboard
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link v-show="!isAdminUser && isDemoModeEnabled" to="/demo" class="navbar__link">
        Dashboard
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link v-show="!isAdminUser" to="/about" class="navbar__link">
        About
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link v-show="!isAdminUser" to="/resources" class="navbar__link">
        Resources
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link v-show="!isAdminUser" to="/contact" class="navbar__link">
        Contact Us
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link to="/logout" class="navbar__link">
        Logout
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  props: {
    displayCurrentPage: String
  },

  data () {
    return {
      url: window.appURL,
      isNavOpen: false,
      module_title: 'Alcohol'
    }
  },

  computed: {
    ...mapGetters([
      'isAdminUser',
      'isDemoModeEnabled'
    ])
  },

  methods: {
    toggleNavigation () {
      if (this.isNavOpen === false) {
        this.isNavOpen = true
      } else {
        this.isNavOpen = false
      }
    }
  }
}
</script>
