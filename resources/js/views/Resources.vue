<template>
    <div class="resource-page container">
        <navbar :displayCurrentPage="$route.name" />
        <main class="resource-page__content">
            <div class="resource-page__wrapper">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="resource-page__header">Resources</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="resource-page__text">We have collected a variety of prevention, health and wellness resources for you <a href="https://www.csun.edu/istart/resources" target="_blank">here</a>.</p>
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
  name: 'Resources',
  mixins: [
    changeRouteTitle
  ],
  components: {
    Navbar
  }
}
</script>
