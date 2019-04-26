<template>
    <div class="row">
        <div class="module-content">
          <quiz-template></quiz-template>
        </div>
    </div>
</template>

<script>
import quizTemplate from './quizTemplate'
export default {
  name: 'moduleContent',
  components: {
    quizTemplate
  }
}
</script>
