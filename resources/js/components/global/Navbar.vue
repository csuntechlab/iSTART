<template>
<nav class="navbar">
  <img class="navbar__logo" src="images/logos/logo_white.svg" alt="iStart Logo"/>
  <div class="navbar__mobile-wrapper">
    <button class="navbar__button" type="button" @click="toggleNavigation">
      <i class="fas fa-bars"></i>
    </button>
    <span class="navbar__location"> {{ displayCurrentPage }} </span>
  </div>
  <ul id="dropdown" class="navbar__item-wrapper" :class="isNavOpen ? 'navbar__item-wrapper--active' : ''">
    <li class="navbar__item">
      <router-link v-show="!isAdminUser" to="/" class="navbar__link">
        <div>
          Dashboard
        </div>
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link v-show="!isAdminUser" to="/schedule" class="navbar__link">
        <div>
          About
        </div>
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link v-show="!isAdminUser" to="/schedule" class="navbar__link">
        <div>
          Resources
        </div>
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link v-show="!isAdminUser" to="/schedule" class="navbar__link">
        <div>
          Contact Us
        </div>
      </router-link>
    </li>
    <li class="navbar__item">
      <router-link to="/logout" class="navbar__link">
        <div>
          Logout
        </div>
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
        this.isNavOpen = true
      } else {
        this.isNavOpen = false
      }
    }
  }
}
</script>
