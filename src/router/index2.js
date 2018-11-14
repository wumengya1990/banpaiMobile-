<<<<<<< .mine

/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
// 布局
import Layout from '../page/Layout.vue';
// 选择角色
//import Chose from '../page/Chose.vue';
import Chose from '../page/common/Chose.vue';

import links from '../page/components/links.vue'
import login from '../page/components/login.vue'
import notLogin from '../page/components/notLogin.vue'
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
import pattern2 from '../page/components/pattern2.vue'     //通知模式
import pattern3 from '../page/components/pattern3.vue'     //轮播模式
import pattern4 from '../page/components/pattern4.vue'     //考场模式
import pattern5 from '../page/components/pattern5.vue'     //视频模式
import layerPage from '../page/components/layerPage.vue'   //弹层页面
import manage from '../page/components/manage.vue'         //开关机管理模式
import monitor from '../page/components/monitor.vue'       //设备管理
import face from '../page/components/face.vue'             //扫脸
import navMaster from '../page/components/navMaster.vue'             //班主任底部导航
import attendance from '../page/components/attendance.vue'
import classManage from '../page/components/classManage.vue'
import classMien from '../page/components/classMien.vue'
import addClassNotice from '../page/components/addClassNotice.vue'   //新建班级通知
import classNotice from '../page/components/classNotice.vue'   //班级通知
import addMien from '../page/components/addMien.vue'   //新建风采
import mien from '../page/components/mien.vue'   //新建风采
import classMasterIndex from '../page/components/classMasterIndex.vue'   //班主任首页


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
      path:'/pattern3',
      name:'pattern3',
      component:pattern3
    },{
      path:'/pattern4',
      name:'pattern4',
      component:pattern4
    },{
      path:'/pattern5',
      name:'pattern5',
      component:pattern5
    },{
      path:'/layerPage',
      name:'layerPage',
      component:layerPage
    },{
      path:'/manage',
      name:'manage',
      component:manage
    },{
      path:'/monitor',
      name:'monitor',
      component:monitor
    },{
      path:'/face',
      name:'face',
      component:face
    },{
      path:'/notLogin',
      name:'notLogin',
      component:notLogin
    },{
      path:'/navMaster',
      name:'navMaster',
      component:navMaster
    },{
      path:'/attendance',
      name:'attendance',
      component:attendance
    },{
      path:'/classManage',
      name:'classManage',
      component:classManage
    },{
      path:'/classMien',
      name:'classMien',
      component:classMien
    },{
      path:'/addClassNotice',
      name:'addClassNotice',
      component:addClassNotice
    },{
      path:'/classNotice',
      name:'classNotice',
      component:classNotice
    },{
      path:'/addMien',
      name:'addMien',
      component:addMien
    },{
      path:'/mien',
      name:'mien',
      component:mien
    },{
      path:'/classMasterIndex',
      name:'classMasterIndex',
      component:classMasterIndex
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
||||||| .r74811
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
=======
/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
// 布局
import Layout from '../page/Layout.vue';
// 登录页面
import Login from '../page/common/Login.vue';
// 选择角色
import Chose from '../page/common/Chose.vue';
// 无权限
import Role from '../page/common/Role.vue';

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
// ========================== 身份切换
import SM_Chose from '../page/schoolManager/SM_Chose.vue';
// =========================================================== 班主任
import CM_Layout from '../page/classManager/CM_Layout.vue';
// ========================== 首页
import CM_Index from '../page/classManager/CM_Index.vue';
// ========================== 班级管理
import CM_ClassManage from '../page/classManager/CM_ClassManage.vue';
import CM_ClassNoticeEdit from '../page/classManager/CM_ClassNoticeEdit.vue';
import CM_ClassMienEdit from '../page/classManager/CM_ClassMienEdit.vue';

// ========================== 荣誉管理
import CM_ClassHonor from '../page/classManager/CM_ClassHonor.vue';
import CM_ClassHonorEdit from '../page/classManager/CM_ClassHonorEdit.vue';
// ========================== 考勤查看
import CM_ClassAttend from '../page/classManager/CM_ClassAttend.vue';
// ========================== 身份切换
import CM_Chose from '../page/classManager/CM_Chose.vue';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name:'Layout',
    redirect:{
      name:'Chose'
    },
    component: Layout,
    children:[{// ========================================= 班主任
      path:'/',
      name:'',
      redirect:{
        name:'CM_Index'
      },
      component:CM_Layout,
      children: [
        // ========================== 首页
        {path:'/cm/index',name:'CM_Index',component:CM_Index},
        // ========================== 班级管理
        {path:'/cm/class/manage',name:'CM_ClassManage',component:CM_ClassManage},
        {path:'/cm/class/notice/edit',name:'CM_ClassNoticeEdit',component:CM_ClassNoticeEdit},
        {path:'/cm/class/mien/edit',name:'CM_ClassMienEdit',component:CM_ClassMienEdit},

        // ========================== 荣誉管理
        {path:'/cm/class/honor',name:'CM_ClassHonor',component:CM_ClassHonor},
        {path:'/cm/class/honor/edit',name:'CM_ClassHonorEdit',component:CM_ClassHonorEdit},
        // ========================== 考勤查看
        {path:'/cm/class/attend',name:'CM_ClassAttend',component:CM_ClassAttend},
        // ========================== 身份切换
        {path:'/cm/chose',name:'CM_Chose',component:CM_Chose}
      ]
    },
      // =========================================================== 家长
      // ========================== 留言
      {path:'/gu/message',name:'GU_Message',component:GU_Message},
      // ========================== 身份切换
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
      // ========================== 身份切换
      {path:'/sm/chose',name:'SM_Chose',component:SM_Chose},

      // =========================================================== 通用页面
      // 登录页面
      {path:'/login',name:'Login',component:Login},

      // 选择角色
      {path:'/chose',name:'Chose',component:Chose},
      // 无权限
      {path:'/role',name:'Role',component:Role}
    ]
  }]
})
>>>>>>> .r75336
