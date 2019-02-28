<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="navbar__body">
      <p class="navbar__body-text">Research ID</p>
      <p class="navbar__body-text"> {{ userID }}</p>
    </div>
    <div class="collapse navbar-collapse navbar__dropdown" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-lg-0">
        <li class="navbar__dropdown-item active">
          <a class="nav-link active" href="#">MODULES</a>
        </li>
        <li class="navbar__dropdown-item">
          <a class="nav-link active" href="#">SCHEDULE</a>
        </li>
        <li class="navbar__dropdown-item navbar__dropdown-item--bottom">
          <a class="nav-link active" href="#">LOGOUT</a>
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
