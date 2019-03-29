import 'jest-extended'
import { beforeEach } from './../../resources/js/__mocks__/main'

describe('beforeEach', () => {
  const next = jest.fn()

  let store = {
    getters: {
      correctLoginInfo: null,
      user: {
        isAdmin: null
      }
    }
  }

  let to = {
    meta: {
      requiresAuth: null,
      userAuth: null,
      adminAuth: null
    }
  }

  let from = {
    path: '/dashboard'
  }

  it('should set requiresAuth to false and checks for next to be called', () => {
    to.meta.requiresAuth = false

    beforeEach(to, undefined, next)
    expect(next).toHaveBeenCalled()
  })

  it('should set requiresAuth to undefined and checks for next to be called', () => {
    to.meta.requiresAuth = undefined

    beforeEach(to, undefined, next)
    expect(next).toHaveBeenCalled()
  })

  it('should set correctLoginInfo to false and checks for next to be called', () => {
    store.getters.correctLoginInfo = false

    beforeEach(to, undefined, next)
    expect(next).toHaveBeenCalled()
  })

  it('should set isAdmin to true & adminAuth to true and checks for next to be called', () => {
    store.getters.user.isAdmin = true
    to.meta.adminAuth = true

    beforeEach(to, undefined, next)
    expect(next).toHaveBeenCalled()
  })

  it('should set isAdmin to false & userAuth to true and checks for next to be called', () => {
    store.getters.user.isAdmin = false
    to.meta.userAuth = true

    beforeEach(to, undefined, next)
    expect(next).toHaveBeenCalled()
  })

  it('should set correctLoginInfo to true & userAuth to false and expect from.path to not be nil', () => {
    store.getters.correctLoginInfo = true
    store.getters.user.isAdmin = false
    to.meta.userAuth = false
    to.meta.adminAuth = false

    beforeEach(to, from, next)
    expect(from.path).not.toBeNil()
    expect(next).toHaveBeenCalled()
  })
})
