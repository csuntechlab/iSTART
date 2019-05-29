<template>
  <div class="module-quizInput">
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-12">
          <p class="module-quizInput__validate--green module-quizInput__validate">Please enter your respsones using numerical values and press ENTER to successfully enter your response</p>
        </div>
        <quiz-input v-for="(element, index) in slides.questions"
          :key="index"
          :questionIndex="parseInt(index)+1"
          :question="element.question"
          :user_response="element.response"
          :questionLength="Object.keys(slides.questions).length"
          :needInputLabel="true"
          ></quiz-input>
      </div>
    </div>
  </div>
</template>
<script>
import quizInput from './../templates/quiz/quizInput'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'quizInputTemplate',
  components: {
    quizInput
  },
  watch:{
    responseFromState:{
      handler(newValue, oldValue){
        console.log('in the water')
        console.log('here: ', newValue)
      },
      deep: true
    }
  },
  updated(){
    console.log('updated')
  },
  computed: {
    ...mapState(
      {
        responseFromState: state => state.Slides.responses
      }
    ),
    ...mapGetters(
      [
        'displayContent',
        'userResponses',
        'userValidity'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'allowUserToContinue',
        'getUserResponses'
      ]
    ),
    enableContinueButton(){
      console.log('in enable')
      if(Object.keys(this.responseFromState).length === Object.keys(this.slides.questions).length){
        for(var i = 0; i< Object.keys(this.slides.questions).length; i++){
          if(typeof(this.userValidity(i)) !== 'undefined' ){
            console.log('index: ', i, 'userValidity(i).valid: ', this.userValidity(i))
            if(this.userValidity(i) === false){
              console.log('index: ', i, 'userValidity(i) is false: ', this.userValidity(i))
              let payload = {
                isAbleToProceed: false,
                slide_index: this.slideNumber
              }
              this.allowUserToContinue(payload)
            } else {
              let payload = {
                isAbleToProceed: true,
                slide_index: this.slideNumber
              }
              this.allowUserToContinue(payload)
            }
          } else {
            return null
          }
        }//end for
      }
    }//end enableContinueButtion()
  },
  data () {
    return {
      slides: {
        questions: {
          0: {
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          1: {
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          2: {
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          },
          3: {
            question: 'What percent of female US College Students drink MORE than you in a typical week?',
            response: null
          }
        }
      }
    }
  },
}
</script>
