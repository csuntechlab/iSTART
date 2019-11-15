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
      const parsedTime = parseFloat(idleTime)

      this.timeout = setTimeout(() => {
        this.clearUserData()
      }, parsedTime * 60 * 1000)
    },

    resetIdleTimer () {
      clearTimeout(this.timeout)
      this.setIdleTimer()
    }
  }
}
