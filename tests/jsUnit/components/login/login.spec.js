import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

import Login from './../../../../resources/js/views/Login.vue'
import Vuex from 'vuex'
import 'jest-extended'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Login.vue', () => {
  const store = new Vuex.Store({
    modules: {
      User: {
        getters: {
          correctLoginInfo: () => null,
          loginIsLoading: () => false
        }
      }
    }
  })

  it('should receive user input when user types in form', () => {
    const wrapper = shallowMount(Login, { store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    const userCredentials = 'gj2210'
    const inputArray = wrapper.findAll('.form-control')
    inputArray.at(0).setValue(userCredentials)
    expect(wrapper.vm.checkFormInputs()).toBe(true)
  })
})
