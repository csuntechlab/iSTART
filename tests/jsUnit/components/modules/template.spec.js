import slideStore from './../../../../resources/js/store/modules/slides/'

describe('slideStore/actions/toggleContent', () => {
  it('should commit to SHOWS_OR_HIDE_CONTENT mutation when action is called', () => {
    let commit = jest.fn()
    slideStore.actions.toggleContent({ commit }, true)
    expect(commit).toHaveBeenCalledWith('SHOWS_OR_HIDES_CONTENT', true)
  })
})
