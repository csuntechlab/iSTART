<template>
    <div class="final-slide-card">
        <h1 v-if="currentSlideData.header.header != null">{{ currentSlideData.header.header }}</h1>
        <i class="fas fa-user final-slide-card__icon"></i>
        <div class="row">
          <div class="col-12 text-left">
            <p
              v-for="(element, index) in currentSlideData.content[0].paragraph"
              :key="`${index}`"
              class="final-slide-card__paragraph"
              v-html="currentSlideData.content[0].paragraph[`${index}`]"></p>
          </div>
        </div>
    </div>
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
