<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <info-template v-if="slide_type === 'info'"></info-template>
    <quiz-template v-if="slide_type === 'quiz'"></quiz-template>
    <module-footer></module-footer>
  </div>
</template>

<script>
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import infoTemplate from './../components/modules/templates/infoTemplate'
import quizTemplate from './../components/modules/templates/quizTemplate'
export default {
  name: 'Module',
  components: {
    moduleHeader,
    moduleFooter,
    infoTemplate,
    quizTemplate
  },
  data () {
    return {
      slide_type: 'info',
      windowWidth: 0,
      sizeOfContainer: 0
    }
  },
  created () {
    window.addEventListener('resize', this.getWindowWidth)
    this.getWindowWidth()
  },
  destroyed () {
    window.addEventListener('resize', this.getWindowWidth)
  },
  computed: {
    checkWindowWidth () {
      if (this.windowWidth >= 768) {
        return 'container--desktop container module'
      } else {
        return 'module'
      }
    }
  },
  methods: {
    getWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  },
  mounted () {
    if (this.$refs.moduleContainer) {
      this.sizeOfContainer = this.$refs.moduleContainer.clientWidth
    }
    window.onresize = () => {
      if (this.$refs.moduleContainer) {
        this.sizeOfContainer = this.$refs.moduleContainer.clientWidth
      }
    }
  }
}
</script>
