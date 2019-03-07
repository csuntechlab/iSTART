import navbar from '../../../resources/js/globals/navbar'
import Vuex from 'vuex'
import User from '../../../resources/js/store/modules/user/index'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('navbar.vue', () => {
  let store
  let state

  state = {
    user: {
      token: '123rke4',
      username: 'csunStudent123'
    },
    correctLoginInfo: true
  }

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
  describe('user/actions/clearUserData', () => {
    it('should have CLEAR_USER_DATA be called on logout as long as ', () => {
      const navbarWrapper = shallowMount(navbar, { store, localVue })
      navbarWrapper.find('[data-text=logout-button]').trigger('click')
      const commit = jest.fn()
      User.actions.clearUserData({ commit })
      expect(commit).toHaveBeenCalledWith('CLEAR_USER_DATA')
    })
  })

  describe('userStore/mutations/CLEAR_USER_DATA', () => {
    it('should clear the user object and nullify correctLoginInfo when mutation is called', () => {
      User.mutations.CLEAR_USER_DATA(state)
      expect(state).toEqual({
        user: {},
        correctLoginInfo: null
      })
    })
  })
})
