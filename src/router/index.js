import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import index from '@/page/index'
import Hot from '../page/musiclist/Hot'
import New from '../page/musiclist/New'
import Classic from '../page/musiclist/Classic'

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
          redirect:'/Hot',
          children:[
            {
              path: '/Hot',
              name: 'Hot',
              component: Hot
            }, {
              path: '/New',
              name: 'New',
              component: New
            }, {
              path: '/Classic',
              name: 'Classic',
              component: Classic
            },
          ]
        },
        {
          path:'/songlists',
          name:'songLists',
          component:()=> import('@/page/songsheet/songlists')
        },
      ]
    }
  ]
})
