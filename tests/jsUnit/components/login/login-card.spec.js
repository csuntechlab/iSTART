import { shallowMount } from '@vue/test-utils';
import loginCard from './../../../../resources/js/components/login/login-card.vue';

describe('login-card.vue', () => {
  it('should receive user input when user types in form', ()=> {
    const wrapper = shallowMount(loginCard);
    const userCredentials = "gj2210";
    const userPassword = "password";
    const inputArray = wrapper.findAll(".form-control");
    inputArray.at(0).setValue(userCredentials);
    inputArray.at(1).setValue(userPassword);
    expect(wrapper.vm.checkFormInputs()).toBe(true);

  })
})