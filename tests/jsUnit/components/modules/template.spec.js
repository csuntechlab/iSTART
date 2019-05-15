import slideStore from './../../../../resources/js/store/modules/slides/'

describe('slideStore/actions/allowUserToContinue', () => {
  it('should commit to ENABLE_OR_DISABLE_CONTINUE mutation when action is called', () => {
    let commit = jest.fn()
    slideStore.actions.allowUserToContinue({ commit }, true)
    expect(commit).toHaveBeenCalledWith('ENABLE_OR_DISABLE_CONTINUE', true)
  })
})
