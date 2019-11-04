import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Dashboard from './views/Dashboard.vue'
import Module from './views/Module.vue'
// import Error from './views/Error.vue'
import Schedule from './views/Schedule.vue'
import About from './views/About.vue'
import Resources from './views/Resources.vue'
import Contact from './views/Contact.vue'
import Admin from './views/Admin.vue'
export default [
  {
    path: '*'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'iSTART', requiresAuth: false }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: { title: 'iSTART | Logout', requiresAuth: true, userAuth: true, adminAuth: true }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    // meta: { title: 'iSTART | Dashboard', requiresAuth: true, userAuth: true }
    meta: { title: 'iSTART | Dashboard' }
  },
  {
    path: '/module',
    name: 'Module',
    component: Module,
    // meta: { title: 'iSTART | Modules', requiresAuth: true, userAuth: true }
    meta: { title: 'iSTART | Modules' }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
    // meta: { title: 'iSTART | Schedule', requiresAuth: true, userAuth: true }
    meta: { title: 'iSTART | Schedule' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // meta: { title: 'iSTART | About', requiresAuth: true, userAuth: true }
    meta: { title: 'iSTART | About' }
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
    // meta: { title: 'iSTART | Resources', requiresAuth: true, userAuth: true }
    meta: { title: 'iSTART | Resources' }
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: Contact,
    // meta: { title: 'iSTART | Contact Us', requiresAuth: true, userAuth: true }
    meta: { title: 'iSTART | Contact Us' }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    // meta: { title: 'iSTART | Admin', requiresAuth: true, adminAuth: true }
    meta: { title: 'iSTART | Admin' }
  }
]
