import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Palestrantes from '@/components/Palestrantes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/palestrantes',
      name: 'Palestrantes',
      component: Palestrantes
    }
  ]
})
