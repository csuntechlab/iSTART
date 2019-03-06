import navbar from '../../../resources/js/globals/navbar'
import Vuex from 'vuex'
import User from '../../../resources/js/store/modules/user/index'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Navbar.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        User: {
          state: User.state,
          actions: User.actions,
          mutations: User.mutations
        }
      }
    })
  })
  it('should have CLEAR_USER_DATA be called on logout as long as ', () => {
    const navbarWrapper = shallowMount(navbar, { store, localVue })
    navbarWrapper.find('[data-text=logout-button]').trigger('click')
    const commit = jest.fn()
    User.actions.clearUserData({ commit })
    expect(commit).toHaveBeenCalledWith('CLEAR_USER_DATA')
  })
})
