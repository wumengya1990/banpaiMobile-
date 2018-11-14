/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
// 布局
import Layout from '../page/Layout.vue';
// 登录页面
import Login from '../page/common/Login.vue';
// 选择角色
import Chose from '../page/common/Chose.vue';


// =========================================================== 家长
import GU_Message from '../page/guardian/GU_Message.vue';
import GU_Chose from '../page/guardian/GU_Chose.vue';
// =========================================================== 学校管理员
// ========================== 监控设备
import SM_Monit from '../page/schoolManager/SM_Monit.vue';
// ========================== 班牌管理
import SM_DevClass from '../page/schoolManager/SM_DevClass.vue';
import SM_DevTime from '../page/schoolManager/SM_DevTime.vue';
import SM_DevNotice from '../page/schoolManager/SM_DevNotice.vue';
import SM_DevImage from '../page/schoolManager/SM_DevImage.vue';
import SM_DevExam from '../page/schoolManager/SM_DevExam.vue';
import SM_DevVideo from '../page/schoolManager/SM_DevVideo.vue';
import SM_DevOpen from '../page/schoolManager/SM_DevOpen.vue';
// ========================== 校园管理
import SM_SchoolNotice from '../page/schoolManager/SM_SchoolNotice.vue';
import SM_SchoolState from '../page/schoolManager/SM_SchoolState.vue';
// ========================== 素材管理
import SM_ContentVideo from '../page/schoolManager/SM_ContentVideo.vue';
import SM_ContentImage from '../page/schoolManager/SM_ContentImage.vue';
// ========================== 我的
import SM_Chose from '../page/schoolManager/SM_Chose.vue';
// =========================================================== 班主任

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name:'Layout',
    redirect:{
      name:'Chose'
    },
    component: Layout,
    children:[
      // =========================================================== 家长
      // ========================== 留言
      {path:'/gu/message',name:'GU_Message',component:GU_Message},
      // ========================== 我的
      {path:'/gu/chose',name:'GU_Chose',component:GU_Chose},
      // =========================================================== 学校管理员
      // ========================== 监控设备
      {path:'/sm/monit',name:'SM_Monit',component:SM_Monit},
      // ========================== 班牌管理
      {path:'/sm/dev/class',name:'SM_DevClass',component:SM_DevClass},
      {path:'/sm/dev/time',name:'SM_DevTime',component:SM_DevTime},
      {path:'/sm/dev/notice',name:'SM_DevNotice',component:SM_DevNotice},
      {path:'/sm/dev/image',name:'SM_DevImage',component:SM_DevImage},
      {path:'/sm/dev/exam',name:'SM_DevExam',component:SM_DevExam},
      {path:'/sm/dev/video',name:'SM_DevVideo',component:SM_DevVideo},
      {path:'/sm/dev/open',name:'SM_DevOpen',component:SM_DevOpen},
      // ========================== 校园管理
      {path:'/sm/school/notice',name:'SM_SchoolNotice',component:SM_SchoolNotice},
      {path:'/sm/school/state',name:'SM_SchoolState',component:SM_SchoolState},
      // ========================== 素材管理
      {path:'/sm/content/video',name:'SM_ContentVideo',component:SM_ContentVideo},
      {path:'/sm/content/image',name:'SM_ContentImage',component:SM_ContentImage},
      // ========================== 我的
      {path:'/sm/chose',name:'SM_Chose',component:SM_Chose},
      // =========================================================== 班主任

      // =========================================================== 通用页面
      // 登录页面
      {path:'/login',name:'Login',component:Login},

      // 选择角色
      {path:'/chose',name:'Chose',component:Chose}


    ]
  }]
})
