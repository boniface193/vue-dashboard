import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Applicants from '../views/Applicants.vue'
import Jobs from '../views/Jobs.vue'
import Calendar from '../views/Calendar.vue'
import Reports from '../views/Reports.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/',
    name: 'Applicants',
    component: Applicants
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    component: Jobs
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Jobs.vue')
    
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/Reports',
    name: 'Reports',
    component: Reports
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
