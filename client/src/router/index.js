import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Quiz from '@/components/Quiz'
import Overview from '@/components/Overview'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "HelloWorld"
      }
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: Overview
    },
  ]
})
