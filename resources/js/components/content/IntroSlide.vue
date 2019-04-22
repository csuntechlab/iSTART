<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
      <img class="dashboard-module__thumbnail-image" v-bind:src="image">
      </div>
    </div>
    <div class="row">
      <div class="c"
    </div>
    
  </div>
  
</template>
<script>
export default {
  name: 'IntroSlide',
  data() {
    return {
      moduleTitle: 'Alcohol',
      moduleInfo: 'In this module we will discuss what alcohol use among college students looks like, what alcohol dependency is, how it can affect your health and wellness and how you can choose to drink responsibly and make healthier choices.',
      estimatedCompletion: '10',
      image: 'images/thumbnail/alcohol_thumbnail.jpg'
    }
  }
}
</script>
