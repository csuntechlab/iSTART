<template>
  <div class="multiChoiceSurveyResults">
    <h2 class="multiChoiceSurveyResults__heading">
      Based on your 3 answers here is tailored motivational and/or educational 
      advice to follow.
      These are also resources to check out based off your 3 answers.
    </h2>
    <div class="multiChoiceSurveyResults__link-container">
      <ul>
        <li v-for="(url, index) in links" :key="index" class="multiChoiceSurveyResults__link" >
            <a :href="url"> Visit this example link</a>
        </li>
      </ul>
    </div>
    <h2 class="multiChoiceSurveyResults__mail">
      <i class="fas fa-envelope"></i>
      Email these results to yourself
    </h2>
  </div>
  
</template>
<script>
export default {
  name: 'MultiChoiceSurveyResults',
  data() {
    return {
      links: [
        'https://www.metalab.csun.edu/',
        'https://www.metalab.csun.edu/',
        'https://www.metalab.csun.edu/'
      ]
    }
  }
}
</script>
