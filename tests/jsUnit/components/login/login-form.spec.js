import { shallowMount, createLocalVue } from '@vue/test-utils';
import login from './../../../../resources/js/views/login.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('login.vue', () => {
  const store = new Vuex.Store({
    modules: {
      User: {
        getters: {
          correctLoginInfo: () => null
        }
      }
    }
  });
  it('should receive user input when user types in form', ()=> {
    const wrapper = shallowMount(login, {store,localVue});
    const userCredentials = "gj2210";
    const inputArray = wrapper.findAll(".form-control");
    inputArray.at(0).setValue(userCredentials);
    expect(wrapper.vm.checkFormInputs()).toBe(true);
  })
})