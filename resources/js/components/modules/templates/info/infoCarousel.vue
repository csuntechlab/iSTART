<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div :class="['module-info__carousel-item carousel-item', ( index === '0' ? 'active' : '' )]" v-for="(element, index) in images" :key="index">
        <img class="d-block w-100" :src="element">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: [
    'images'
  ]
}
</script>
