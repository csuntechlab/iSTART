import 'jest-extended'
import slidesStore from './../../../resources/js/store/modules/slides/index'
import slidesAPI from './../../../resources/js/api/slides'

jest.mock('./../../../resources/js/api/slides')

//VUEX action testing
describe('slideStore/actions/allowUserToContinue', () => {
  it('should commit to ENABLE_OR_DISABLE_CONTENT mutation when action is called', () => {
    let commit = jest.fn()
    slidesStore.actions.allowUserToContinue({ commit }, true)
    expect(commit).toHaveBeenCalled()
  })
})

describe('slidesStore/actions/emailUserResults', () => {
  it('should commit to SURVEY_RESULTS_EMAIL_WAS_SUBMITTED and mock a POST when action is called', async ()=> {
    const payload = [
      'https://www.metalab.csun.edu/',
      'https://www.metalab.csun.edu/',
      'https://www.metalab.csun.edu/'
    ]
    var links = '<ul>'
    for (var i = 0; i < payload.length; i++) {
      links +=(`<li><a href=${payload[i]} target=_blank>${payload[i]}</a></li>`)
    }
    links +=('</ul>')

     var response = 200

    slidesAPI.emailSurveyResultsAPI.mockImplementation(calledWith => {
      return calledWith === links ? Promise.resolve(response) : Promise.resolve()
    })
    let commit = jest.fn()
    await slidesStore.actions.emailSurveyResults({commit}, links)
    expect(commit).toHaveBeenCalled()
  })

})


//vuex mutation testing
describe('slidesStore/mutations/SURVEY_RESULTS_EMAIL_WAS_SUBMITTED', () => {
  const state = {
    surveyResultsEmailWasSubmitted: null
  }
  const payload = true
  slidesStore.mutations.SURVEY_RESULTS_EMAIL_WAS_SUBMITTED(state, payload)
  expect(state).toEqual({
    surveyResultsEmailWasSubmitted: true
  })
})