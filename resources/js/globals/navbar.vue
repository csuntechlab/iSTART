<template>
  <nav class="navbar navbar-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#hamburger-menu" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse navbar__dropdown" id="hamburger-menu">
      <ul class="navbar-nav mr-auto mt-lg-0">
        <li class="navbar__dropdown-item active">
          <router-link to="#" class="nav-link active" data-toggle="collapse" data-target="#hamburger-menu" href="#">MODULES</router-link>
        </li>
        <li class="navbar__dropdown-item">
          <router-link to="#" class="nav-link active" data-toggle="collapse" data-target="#hamburger-menu" href="#">SCHEDULE</router-link>
        </li>
        <li class="navbar__dropdown-item navbar__dropdown-item--bottom">
          <a class="pointer nav-link active" data-toggle="collapse" data-target="#hamburger-menu" v-on:click="logout">LOGOUT</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'navbar',
  computed: {
    ...mapState({
      userID: state => state.User.user.userID
    })
  },
  methods: {
    ...mapActions([
      'clearUserData'
    ]),
    logout () {
      this.clearUserData()
    }
  }
}
</script>
