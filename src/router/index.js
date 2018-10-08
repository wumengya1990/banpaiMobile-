/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
// 布局
import Layout from '../page/Layout.vue';
// 选择角色
import Chose from '../page/Chose.vue';

import links from '../page/components/links.vue'
import login from '../page/components/login.vue'
import identitySwitching from '../page/components/identitySwitching.vue'
import myPage from '../page/components/myPage.vue'
import nav from '../page/components/nav.vue'
import leaveMessage from '../page/components/leaveMessage.vue'
import navAdmin from '../page/components/navAdmin.vue'
import topMenu from '../page/components/topMenu.vue'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'links',
    },{
      path:'/links',
      name:'links',
      component:links
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/identitySwitching',
      name:'identitySwitching',
      component:identitySwitching
    },{
      path:'/myPage',
      name:'myPage',
      component:myPage
    },{
      path:'/nav',
      name:'nav',
      component:nav
    },{
      path:'/leaveMessage',
      name:'leaveMessage',
      component:leaveMessage
    },{
      path:'/navAdmin',
      name:'navAdmin',
      component:navAdmin
    },{
      path:'/topMenu',
      name:'topMenu',
      component:topMenu
    }
  //   {
  //   path: '/',
  //   name:'Layout',
  //   redirect:{
  //     name:'Chose'
  //   },
  //   component: Layout,
  //   children:[
  //     // 选择角色
  //     {path:'/chose',name:'Chose',component:Chose}
  //   ]
  // }
]
})
