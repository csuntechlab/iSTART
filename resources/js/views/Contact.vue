<template>
    <div class="dashboard container">
        <navbar :displayCurrentPage="$route.name" />
        <h1>Contact Us</h1>
        <p>
            Do you have urgent substance-use related questions? You can call theSAMHSA 24/7 hotline:xxx.
        </p>
        <p>
            If you have <strong>non-urgent</strong> substance-related questions, you can email our Tarzana Treatment Centers counselor confidentially (Use iSTART as subject line): xxxxxxxx
        </p>
        <p>
            For non-urgent participation questions: <a href="mailto: iSTART@csun.edu">iSTART@csun.edu</a> or
        </p>
        <p>
            For Technical Assistance if you experience problems with the web-app: xxxx
        </p>
    </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

export default {
  name: 'Contact',
  mixins: [changeRouteTitle],
  components: {
    Navbar
  }
}
</script>
