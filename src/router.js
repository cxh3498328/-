import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index/Index'
import Profile from './views/profile/Profile'
import MyLog from './views/profile/myLog/MyLog'
import Login from './views/login/Login'
import zujianku from '@/views/zujianku'
import Rate from '@/views/rate/Rate'
import NotFoundComponent from './views/NotFoundComponent'

Vue.use(Router)

// function isAuthored (to, from, next) {
//   if (to.name !== 'Login') next({ name: 'Login' })
//   else next()
// }

const router = new Router({
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/login', name: 'login', component: Login },
    { path: '/zujianku', name: 'zujianku', component: zujianku },
    { path: '/rate', name: 'rate', component: Rate },
    {
      path: '/profile/:id',
      component: Profile,
      // beforeEnter: isAuthored,
      props: true,
      children: [
        { path: 'mylog', component: MyLog }
      ]
    },
    { path: '*', component: NotFoundComponent }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login') next({ name: 'Login' })
//   else next()
// })

// 原地蹦迪,腿打断
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
