<template>
    <div class="dashboard container">
        <navbar :displayCurrentPage="$route.name" />
        <h1>About</h1>
        <p>iSTART is a grant program funded by <abbr title="Substance Abuse and Mental Health Services Administration">SAMHSA</abbr>. We focus on both substance use prevention, as well as HIV and Hep-C prevention. You can learn more about us <a href="https://www.csun.edu/istart/about" target="_blank">here</a>.</p>
    </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'About',
  mixins: [changeRouteTitle],
  components: {
    Navbar
  }
}
</script>
