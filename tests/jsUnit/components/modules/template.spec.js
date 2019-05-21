import slideStore from './../../../../resources/js/store/modules/slides/'
import 'jest-extended'
const state = {
  importedJSONSlides: {},
  slide_index: 0,
  isUserAbleToProceed: false
}

describe('slideStore/actions/allowUserToContinue', () => {

  it('should commit to ENABLE_OR_DISABLE_CONTINUE mutation when action is called', () => {
    let commit = jest.fn()
    slideStore.actions.allowUserToContinue({ commit }, true)
    expect(commit).toHaveBeenCalled()
  })
  it('should commit ENABLE_OR_DISABLE_CONTINUE mutation to equal true when action is called', () => {
    slideStore.mutations.ENABLE_OR_DISABLE_CONTENT(state, true)
    expect(state.isUserAbleToProceed).toBeTrue()
  })
  it('should commit ENABLE_OR_DISABLE_CONTINUE mutation to equal false when action is called', () => {
    slideStore.mutations.ENABLE_OR_DISABLE_CONTENT(state, false)
    expect(state.isUserAbleToProceed).toBeFalse()
  })

  it('should commit to ITERATE_THROUGH_CONTENT mutation when action is called', () => {
    slideStore.mutations.ITERATE_THROUGH_CONTENT(state, 1)
    expect(state.slide_index).toEqual(1)
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
  it('should commit to GET_SLIDE_INFO_FROM_JSON mutation when action is called', () => {
    let commit = jest.fn()
    slideStore.actions.getSlideInfo({ commit }, slides)
    expect(commit).toHaveBeenCalledWith('GET_SLIDE_INFO_FROM_JSON', slides)
  })
  it('should fill the state when slides is mudated to GET_SLIDE_INFO_FROM_JSON action is called', () => {

    slideStore.mutations.GET_SLIDE_INFO_FROM_JSON(slideState, slides)
    expect(slideState.importedJSONSlides).toEqual(slides)
  })
})
