<template>
  <div class="introSlide">
    <div class="row introSlide__image-container">
      <div class="col-12 p-0">
        <img class="introSlide__image" v-bind:src="moduleImage">
      </div>
    </div>
    <div class="row introSlide__content-wrapper">
      <div class="introSlide__title-container col-12 col-md-3">
        <h1 class="introSlide__title">{{moduleTitle}}</h1>
        <button class="btn btn-primary introSlide__start-btn">Start</button>
      </div>
      <div class="col-12 col-md-8">
        <p class="introSlide__description mb-2">{{moduleInfo}}</p>
        <p class="introSlide__description">Estimated Completion time: {{estimatedCompletion}}</p>
      </div>
      <div class="row introSlide__button-wrapper">
        <div class="col-12 p-0">
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'IntroSlide',
  data () {
    return {
      moduleTitle: 'Alcohol',
      moduleInfo: 'In this module we will discuss what alcohol use among college students looks like, what alcohol dependency is, how it can affect your health and wellness and how you can choose to drink responsibly and make healthier choices.',
      estimatedCompletion: '10',
      moduleImage: 'images/thumbnail/alcohol_thumbnail.jpg'
    }
  }
}
</script>
