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
      const allottedTime = 5000

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
