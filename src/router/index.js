import Vue from 'vue'
import VueRouter from 'vue-router'
import tobar from '@/components/tobar'
import shouye from '@/components/shouye'
import deng from '@/components/deng'
import buju from '@/components/buju'
import buju2 from '@/components/buju2'
import zhuye from '@/components/zhuye'

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/deng'
    },
    {
      path: '/tobar',
      name: 'tobar',
      component: tobar
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye,
      children:[{
        path:'buju',
        component:buju
      },
      {
        path:'buju2',
        component:buju2
      },
      {
        path:'zhuye',
        component:zhuye
      }
    ]
    },
    {
      path: '/deng',
      name: 'deng',
      component: deng,
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
