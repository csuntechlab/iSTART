<template>
  <div :class="windowWidth >= 768 ? 'container--desktop container module' : 'module' ">
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <module-footer></module-footer>
  </div>
</template>

<script>
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      sizeOfContainer: 0
    }
  },
  mounted () {
    if (document.getElementsByClassName('.container')) {
      this.sizeOfContainer = document.querySelector('.container').offsetWidth
    }
    window.onresize = () => {
      this.sizeOfContainer = this.sizeOfContainer
    }
  },
  computed: {

  }
}
</script>
