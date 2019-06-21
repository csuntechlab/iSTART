import slideStore from './../../../../resources/js/store/modules/slides/'
import 'jest-extended'

const state = {
  JSONSlideDatas: {},
  currentSlideNumber: 0
}

describe('should check for module functionality', () => {
  it('should call ENABLE_CONTINUE mutation and check state to be true', () => {
    slideStore.mutations.ENABLE_CONTINUE(state)
    expect(state.enableContinue).toBeTrue()
  })

  it('should commit SET_SLIDE_CONTENT_VISIBILITY mutation to equal true when action is called', () => {
    slideStore.mutations.SET_SLIDE_CONTENT_VISIBILITY(state, true)
    expect(state.slideContentVisibility).toBeTrue()
  })
})

describe('slideStore/actions/getSlideInfo', () => {
  let slideState = {
    slides: {}
  }
  let slides = {
    0: {
      slide_type: 'informational',
      header: {
        title: 'Health benefits of drinking responsibly',
        text: null
      },
      content: {
        images: {
          0: 'images/alcoholModule/alcohol_s19_01.jpg',
          1: 'images/alcoholModule/alcohol_s19_02.jpg',
          2: 'images/alcoholModule/alcohol_s19_03.jpg',
          3: 'images/alcoholModule/alcohol_s19_04.jpg'
        },
        paragraph: {
          0: 'Drinking in moderation is important for a healthy mind and body. Cutting back how much or how often we drink can make a big difference!',
          1: 'If you drink several days a week, know that alcohol-free days can be beneficial!'
        }
      },
      format: {
        images: 'bottom'
      }
    }
  }
  it('should commit to STORE_JSON_IN_STATE mutation when action is called', () => {
    let commit = jest.fn()
    slideStore.actions.storeJSONInState({ commit }, slides)
    expect(commit).toHaveBeenCalledWith('STORE_JSON_IN_STATE', slides)
  })
  it('should fill the state when slides is mudated to GET_SLIDE_INFO_FROM_JSON action is called', () => {
    slideStore.mutations.STORE_JSON_IN_STATE(slideState, slides)
    expect(slideState.JSONSlideData).toEqual(slides)
  })
})
