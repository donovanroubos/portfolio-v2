import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Work from './views/Work.vue'
import Case from './views/Case.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Donovan Roubos | Portfolio'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'Donovan Roubos | About'
      }
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
      props: true,
      meta: {
        title: 'Donovan Roubos | Work'
      }
    },
    {
      path: '/work/:caseName',
      name: 'work',
      component: Case,
      props: true,
      meta: {
        title: 'Donovan Roubos | Work'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
