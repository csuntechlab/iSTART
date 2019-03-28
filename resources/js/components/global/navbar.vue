<template>
<div class="navbar-wrapper">
  <nav class="navbar">
    <button class="navbar__button" type="button" @click="toggleNavigation">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
  <div id="dropdown" class="navbar__dropdown transition-350ms">
    <ul class="navbar-nav navbar__dropdown-list">
      <li class="navbar__dropdown-item">
        <router-link to="/dashboard" class="nav-link" href="#">MODULES</router-link>
      </li>
      <li class="navbar__dropdown-item">
        <router-link to="/schedule" class="nav-link" href="#">SCHEDULE</router-link>
      </li>
      <li class="navbar__dropdown-item">
        <router-link to="/logout" class="nav-link" href="#">LOGOUT</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar',

  data () {
    return {
      toggleNav: false
    }
  },

  methods: {
    toggleNavigation () {
      if (this.toggleNav === false) {
        document.getElementById('dropdown').classList.add('navbar__dropdown--show')
        this.toggleNav = true
      } else {
        document.getElementById('dropdown').classList.remove('navbar__dropdown--show')
        this.toggleNav = false
      }
    }
  }
}
</script>
