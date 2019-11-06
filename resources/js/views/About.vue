<template>
    <div class="about-page container">
        <navbar :displayCurrentPage="$route.name" />
        <main class="about-page__content">
            <div class="about-page__wrapper">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="about-page__header">About</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="about-page__text">iSTART is a grant program funded by <abbr title="Substance Abuse and Mental Health Services Administration">SAMHSA</abbr>. We focus on both substance use prevention, as well as HIV and Hep-C prevention. You can learn more about us <a href="https://www.csun.edu/istart/about" target="_blank">here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
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
