<template>
    <div class="links">
        <router-link to="/login">登录界面</router-link>
        <router-link to="/notLogin">未登录提示</router-link>
        <router-link to="/face">扫脸界面</router-link>
        <router-link to="/identitySwitching">用户切换</router-link>
        <router-link to="/myPage">我的页面</router-link>
        <router-link to="/nav">底部导航</router-link>
        <router-link to="/navAdmin">管理员底部导航</router-link>
        <router-link to="/navMaster">班主任底部导航</router-link>
        <router-link to="/leaveMessage">留言页面</router-link>
        <router-link to="/topMenu">顶部菜单</router-link>
        <router-link to="/messageList">消息列表</router-link>
        <router-link to="/leftMenu">左侧菜单</router-link>
        <router-link to="/pattern">标准模式</router-link>
        <router-link to="/pattern1">倒计时模式</router-link>
        <router-link to="/pattern2">通知模式</router-link>
        <router-link to="/pattern3">轮播模式</router-link>
        <router-link to="/pattern4">考场模式</router-link>
        <router-link to="/pattern5">视频模式</router-link>
        <router-link to="/layerPage">弹层</router-link>
        <router-link to="/manage">开关机管理</router-link>
        <router-link to="/monitor">设备管理</router-link>
        <router-link to="/attendance">考勤查看</router-link>
        <router-link to="/classManage">班级管理</router-link>
        <router-link to="/classMien">班级风采</router-link>
        <router-link to="/addClassNotice">新增班级通知内容</router-link>
        <router-link to="/addMien">新增风采</router-link>
        <router-link to="/classNotice">班级通知内容</router-link>
        <router-link to="/mien">风采内容</router-link>
        <router-link to="/classMasterIndex">班主任首页</router-link>
    </div>
</template>

<script>
export default {
 name:'links'
}
</script>

<style>
.links a{ display: block; width: 80%; height: 2.8rem; line-height: 2.8rem; text-align: center; margin:10px auto; background:#0097fe; color: #ffffff;  border-radius: 50px;}
</style>
