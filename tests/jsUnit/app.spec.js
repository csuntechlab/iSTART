import 'jest-extended'
import { shallowMount } from '@vue/test-utils';
import App from './../../resources/js/App.vue';

describe('setup test', () => {
  it('should add to 2', () => {
    expect(1 + 1).toBe(2)
  })
  it('should be even', () => {
    expect(1 + 2).toBeOdd()
  })
})
