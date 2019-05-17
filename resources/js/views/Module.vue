<template>
  <div ref="moduleContainer" :class="checkWindowWidth">
    <Navbar></Navbar>
    <module-header :size_of_container="sizeOfContainer"></module-header>
    <intro-template v-if="contentType==='intro'"></intro-template>
    <info-template v-if="contentType === 'info'"></info-template>
    <quiz-template v-if="content_type === 'quiz'"></quiz-template>
    <video-template v-if="content_type === 'video'"></video-template>
    <module-footer></module-footer>
  </div>
</template>

<script>
import Navbar from './../components/global/Navbar'
import moduleHeader from './../components/modules/moduleHeader'
import moduleFooter from './../components/modules/moduleFooter'
import infoTemplate from './../components/modules/templates/infoTemplate'
import introTemplate from './../components/modules/templates/IntroSlide'
import quizTemplate from './../components/modules/templates/quizTemplate'
import videoTemplate from './../components/modules/templates/videoTemplate'

export default {
  name: 'Module',
  components: {
    Navbar,
    moduleHeader,
    moduleFooter,
    introTemplate,
    infoTemplate,
    quizTemplate,
    videoTemplate
  },
  data () {
    return {
      content_type: 'video',
      windowWidth: 0,
      sizeOfContainer: 0,
      contentType: 'infoTemplate'
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
        return 'container module'
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
