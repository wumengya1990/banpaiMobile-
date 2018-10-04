/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
// 布局
import Layout from '../page/Layout.vue';
// 选择角色
import Chose from '../page/Chose.vue';

import links from '../page/components/links.vue';
import login from '../page/components/login.vue';
import identitySwitching from '../page/components/identitySwitching.vue';



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

// const routes = [
//   {                                                                        //当首次进入页面时，页面没有显示任何组件；让页面一加载进来就默认显示first页面
//     path:'/',                                                           //重定向，就是给它重新指定一个方向，加载一个组件；
//     component:resolve => require(['@/page/components/links'],resolve)
//   }
  
  
// //这里require组件路径根据自己的配置引入
// ]
// //最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。

// const router = new Router({
//   routes
// })

// export default router

