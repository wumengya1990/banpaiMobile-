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
import messageList from '../page/components/messageList.vue'
import messageListNotice from '../page/components/messageListNotice.vue'
import leftMenu from '../page/components/leftMenu.vue'
import pattern from '../page/components/pattern.vue'       //标准模式
import pattern1 from '../page/components/pattern1.vue'     //倒计时模式
import pattern2 from '../page/components/pattern2.vue'     //通知模板
import layerPage from '../page/components/layerPage.vue'

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
    },{
      path:'/messageList',
      name:'messageList',
      component:messageList
    },{
      path:'/messageListNotice',
      name:'messageListNotice',
      component:messageListNotice
    },{
      path:'/leftMenu',
      name:'leftMenu',
      component:leftMenu
    },{
      path:'/pattern',
      name:'pattern',
      component:pattern
    },{
      path:'/pattern1',
      name:'pattern1',
      component:pattern1
    },{
      path:'/pattern2',
      name:'pattern2',
      component:pattern2
    },{
      path:'/layerPage',
      name:'layerPage',
      component:layerPage
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