import { shallowMount } from '@vue/test-utils';
import App from '../../resources/js/App.vue';
// import HelloWorld from '../../resources/js/components/HelloWorld.vue';

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('sample test', ()=>{
  it('should add to 2', ()=> {
    expect(1+1).toBe(2);
  })
})