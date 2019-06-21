import { mapActions } from 'vuex'

let allottedTime = 10000
export const awaitTimeBeforeContinue = {
  mounted () {
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
