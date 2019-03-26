import 'jest-extended'

describe('setup test', () => {
  let user = {
    correctLoginInfo: null,
    isAdmin: null
  }

  const toUserRoute = {
    requiresAuth: true,
    userAuth: true,
    adminAuth: null
  }

  const toAdminRoute = {
    requiresAuth: true,
    userAuth: null,
    adminAuth: true
  }

  it('should check if user has correctLoginInfo', () => {
    expect(user.correctLoginInfo).toBeNil()
  })

  it('should set user.isAdmin to true and compare against toAdminRoute', () => {
    user.isAdmin = true
    expect(user.isAdmin).toBe(toAdminRoute.adminAuth)
  })

  it('should set user.isAdmin to true and compare against toAdminRoute', () => {
    user.isAdmin = false
    expect(!user.isAdmin).toBe(toUserRoute.userAuth)
  })
})
