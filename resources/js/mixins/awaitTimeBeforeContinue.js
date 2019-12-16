import { mapActions, mapGetters } from 'vuex'

export const awaitTimeBeforeContinue = {
  computed: {
    ...mapGetters(
      [
        'isSlideContentVisible'
      ]
    )
  },

  data () {
    return {
      contentTimer: null
    }
  },

  mounted () {
    this.setTimeToContinue()
  },

  updated () {
    this.setTimeToContinue()
  },

  destroyed () {
    this.clearTimeToContiue()
  },

  methods: {
    ...mapActions(
      [
        'enableContinue'
      ]
    ),

    setTimeToContinue () {
      let awaitTimeFromEnv = document.head.querySelector("meta[name='slide-wait-time']").content
      awaitTimeFromEnv = parseFloat(awaitTimeFromEnv)
      const allottedTime = (parseFloat(awaitTimeFromEnv) * 1000)

      this.contentTimer = setTimeout(() => {
        this.allowContinue()
      }, allottedTime)
    },

    clearTimeToContiue () {
      clearTimeout(this.contentTimer)
    },

    allowContinue () {
      this.enableContinue()
    }
  }
}
