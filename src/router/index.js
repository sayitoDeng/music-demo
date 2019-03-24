import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import index from '@/page/index'

Vue.use(Router)

export default new Router({
  linkActiveClass:'linkActive',
  routes: [
    {
      path: '/',
      name: 'init',
      component:()=>import('@/App.vue'),
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component:index,
          
        }
      ]
    }
  ]
})
