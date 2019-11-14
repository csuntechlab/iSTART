import { mapActions } from 'vuex'

export const idleTimeout = {
  data () {
    return {
      timeout: null
    }
  },

  methods: {
    ...mapActions([
      'clearUserData'
    ]),

    setIdleTimer () {
      const idleTime = document.querySelector('meta[name=idle-timeout]').content
      const parseTime = parseFloat(idleTime)
      const roundedTime = Math.round(parseTime)

      this.timeout = setTimeout(() => {
        this.clearUserData()
      }, roundedTime * 60 * 1000)
    },

    resetIdleTimer () {
      clearTimeout(this.timeout)
      this.setIdleTimer()
    }
  }
}
