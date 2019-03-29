import router from './../router'
import store from './../store/index.js'

// Before each route change check if route needs & has proper authentication
export function beforeEach (to, from, next) {
  if (to.meta.requiresAuth) {
    if (!store.getters.correctLoginInfo) {
      next({ path: '/login' })
    } else if (store.getters.user.isAdmin && to.meta.adminAuth) {
      next()
    } else if (!(store.getters.user.isAdmin) && to.meta.userAuth) {
      next()
    } else {
      next(from.path)
    }
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => beforeEach(to, from, next))

export default router
