import navbar from '../../../resources/js/globals/navbar'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe('navbar.vue', () => {
  describe('navbar.vue', () => {
    it('should have logout method be called on click in [data-text=logout-button]', () => {
      const logoutMock = jest.fn()
      navbar.methods.logout = logoutMock
      const navbarWrapper = shallowMount(navbar, {stubs: {RouterLink: RouterLinkStub }})
      navbarWrapper.find('[data-text=logout-button]').trigger('click')
      expect(logoutMock).toHaveBeenCalled()
    })
  })
})
