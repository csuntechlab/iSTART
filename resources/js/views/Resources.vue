<template>
    <div class="dashboard container">
        <navbar :displayCurrentPage="$route.name" />
        <h1>Resources</h1>
        <p>We have collected a variety of prevention, health and wellness resources for you <a href="https://www.csun.edu/istart/resources" target="_blank">here</a>. </p>
    </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'Resources',
  mixins: [changeRouteTitle],
  components: {
    Navbar
  }
}
</script>
