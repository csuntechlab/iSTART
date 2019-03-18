<template>
<div>
  <nav class="navbar navbar-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse navbar__dropdown" id="navbar">
      <ul class="navbar-nav mr-auto mt-lg-0">
        <li class="navbar__dropdown-item active">
          <router-link to="#" class="nav-link active" data-toggle="collapse" data-target="#navbar" href="#">MODULES</router-link>
        </li>
        <li class="navbar__dropdown-item">
          <router-link to="#" class="nav-link active" data-toggle="collapse" data-target="#navbar" href="#">SCHEDULE</router-link>
        </li>
        <li class="navbar__dropdown-item navbar__dropdown-item--bottom">
          <a class="pointer nav-link active" data-toggle="collapse" data-target="#navbar" data-text="logout-button" v-on:click="logout">LOGOUT</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
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
      'logout'
    ]),
    logout () {
      this.logout()
    }
  }
}
</script>
