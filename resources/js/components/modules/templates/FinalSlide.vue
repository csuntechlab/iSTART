<template>
  <h1>{{ currentSlideData.header.header }}</h1>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentSlideData'])
  },

  methods: {
    ...mapActions(['navigateFromSlide'])
  }
}
</script>
