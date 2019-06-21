import { mapActions } from 'vuex'

export const awaitTimeBeforeContinue = {
  mounted () {
    let allottedTime = 8000
    setTimeout(() => {
      this.allowContinue()
    }, allottedTime)
  },

  updated () {
    let allottedTime = 8000
    setTimeout(() => {
      this.allowContinue()
    }, allottedTime)
  },

  methods: {
    ...mapActions(
      [
        'enableContinue'
      ]
    ),

    allowContinue () {
      this.enableContinue()
    }
  }
}
