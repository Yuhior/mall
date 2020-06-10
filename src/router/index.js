import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/Index.vue'
import Classify from '../views/classify/Classify.vue'
import Topic from '../views/topic/Topic.vue'
import User from '../views/user/User.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'home/index/index',
    children:[
      {
        path: '/home/index/index',
        name: 'index',
        component: Index,

        meta: {
          title: '首页'
        }
      },{
        path: '/home/classify/index',
        name: 'classify',
        component: Classify,
        meta: {
          title: '分类'
        }
      },{
        path: '/home/topic/index',
        name: 'Topic',
        component: Topic,
        meta: {
          title: '专题'
        }
      },{
        path: '/home/user/index',
        name: 'index',
        component: User,
        meta: {
          title: '我的'
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
