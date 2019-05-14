<template>
  <div class="multiChoiceSurvey">
    <h1 class="multiChoiceSurvey__Question m-2">{{question}}</h1>
    <div class="row multiChoiceSurvey__option-container m-2" >
      <div class="multiChoiceSurvey__option col-12 col-sm-3"  v-for="(choice, index) in choices" :key="index">
        <h2 class="multiChoiceSurvey__text">{{choice}}, {{index}}  = {{index % 2}}</h2>
      </div>
      <div v-if="index%2 ===0" class="d-none d-sm-block col col-md-2"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MultipleChoiceSurvey',
  data() {
    return {
      question: '1. How often did you have a drink containing alcohol in the past year?',
      choices: 
        ['Never', 
        'Rarely',
        'Frequently',
        'Every Day'
        ]
    } 
  }
}
</script>
