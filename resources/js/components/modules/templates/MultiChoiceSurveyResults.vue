<template>
  <div class="multiChoiceSurveyResults">
    <p>
      Based on your 3 answers here is tailored motivational/educational 
      advice to follow.
    </p>
    <p>
      These are also resources to check out based off your 3 answers.
    </p>
    <div class="multiChoiceSurveyResults__link-container">
      <ul>
        <li v-for="(url, index) in links" :key="index" >
          <a :href="url"  > Visit this example link</a>
        </li>
      </ul>
    </div>
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
