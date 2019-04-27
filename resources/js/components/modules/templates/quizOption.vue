<template>
  <div class="col-sm-5 offset-2 offset-sm-0 col-12">
    <p class="module-quiz__option">Option {{ option_number }}</p>
  </div>
</template>
<script>
export default {
  name: 'quizOption',
  props: [
    'option_number'
  ],
  data () {
    return {

    }
  }
}
</script>
