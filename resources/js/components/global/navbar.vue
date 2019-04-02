<template>
<div class="navbar-wrapper">
  <nav class="navbar">
    <button class="navbar__button" type="button" @click="toggleNavigation">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
  <div id="dropdown" class="navbar__dropdown transition-350ms">
    <ul class="navbar-nav navbar__dropdown-list">
      <router-link to="/" class="navbar__dropdown-divider">
        <div @click="closeNavigation" class="navbar__dropdown-item">
          <li class="nav-link">MODULE</li>
        </div>
      </router-link>

      <router-link to="/schedule" class="navbar__dropdown-divider">
        <div class="navbar__dropdown-item" @click="closeNavigation">
          <li class="nav-link">SCHEDULE</li>
        </div>
      </router-link>

      <router-link to="/logout" class="navbar__dropdown-divider">
        <div class="navbar__dropdown-item" @click="closeNavigation">
          <li class="nav-link">LOGOUT</li>
        </div>
      </router-link>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar',

  data () {
    return {
      isNavOpen: false
    }
  },

  methods: {
    toggleNavigation () {
      if (this.isNavOpen === false) {
        document.getElementById('dropdown').classList.add('navbar__dropdown--show')
        this.isNavOpen = true
      } else {
        document.getElementById('dropdown').classList.remove('navbar__dropdown--show')
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
