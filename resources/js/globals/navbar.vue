<template>
  <nav class="navbar navbar-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse navbar__dropdown" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-lg-0">
        <li class="navbar__dropdown-item active">
          <router-link to="#" class="nav-link active" href="#">MODULES</router-link>
        </li>
        <li class="navbar__dropdown-item">
          <router-link to="#" class="nav-link active" href="#">SCHEDULE</router-link>
        </li>
        <li class="navbar__dropdown-item navbar__dropdown-item--bottom">
          <router-link to="#" class="nav-link active" href="#">LOGOUT</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'navbar',
  computed: {
    ...mapState({
      userID: state => state.User.user.userID
    })
  }
}
</script>
