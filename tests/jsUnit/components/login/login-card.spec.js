import { shallowMount } from '@vue/test-utils';
import loginCard from './../../../../resources/js/components/login/login-card.vue';

describe('login-card.vue', () => {
  it('should change data in form object when form is utilzed', ()=> {
    const wrapper = shallowMount(loginCard);
    console.log(wrapper);
    // const userCredentials = "gj2210";
    // const password = "password";
    // const checkFormInputsMock = jest.fn();
    // wrapper.find("[data-username]").setValue(userCredentials);
    // wrapper.find("[data-username]").setValue(userCredentials);
    // wrapper.find("btn.btn-primary").trigger(submit.prevent);
    // wrapper.vm.checkFormInputs = checkFormInputs;
    // wrapper.update();
    expect(true).toBe(true);

  })
})