<template>
    <div class="row">
        <div class="module-content">
          <intro-slide></intro-slide>
        </div>
    </div>
</template>

<script>
import introSlide from './templates/IntroSlide' 

export default {
  name: 'moduleContent',
  components: {
    introSlide
  }
}
</script>
