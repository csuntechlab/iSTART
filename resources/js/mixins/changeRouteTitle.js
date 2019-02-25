export const changeRouteTitle = {
  beforeMount () {
    document.title = this.$route.meta.title
  }
}
