import navbar from './../../../resources/js/globals/navbar'
import Vuex from 'vuex'
import User from './../../../resources/js/store/modules/user'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Navbar.vue', () => {

  let state
  let store

  beforeEach(() => {
    state = {
      userID: () => 'JJM939'
    }

    store = new Vuex.Store({
      modules: {
        User: {
          state: User.state  
        }
      }
    })
  })

  it('should have data match ID name from store', () => {
    const navbarWrapper = shallowMount(navbar, { store, localVue })
    expect(navbarWrapper.find('[data-test="navbar-user-id"]').text()).toEqual(state.userID())
  })
})
