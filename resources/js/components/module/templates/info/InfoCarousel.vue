<template>
  <div id="carousel" class="module-info__carousel col-12 carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel" :data-slide-to="index" v-for="(element, index) in images" :key="index" :class="( index === '0' ? 'active' : '' )"></li>
    </ol>
    <div class="carousel-inner">
      <div :class="['module-info__carousel-item carousel-item', ( index === '0' ? 'active' : '' )]" v-for="(element, index) in images" :key="index">
        <img class="d-block w-100" :src="element.src" :alt="element.alt">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <i class="module-info__carousel-button fas fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <i class="module-info__carousel-button fas fa-chevron-right"></i>
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
