<template>
    <div class="links">
        <router-link to="/login">登录界面</router-link>
        <router-link to="/identitySwitching">用户切换</router-link>
        <router-link to="/myPage">我的页面</router-link>
        <router-link to="/nav">底部导航</router-link>
        <router-link to="/navAdmin">管理员底部导航</router-link>
        <router-link to="/leaveMessage">留言页面</router-link>
    </div>
</template>

<script>
export default {
 name:'links'
}
</script>

<style>
.links a{ display: block; width: 80%; height: 2.5rem; line-height: 2.5rem; text-align: center; margin:10px auto; background:#0097fe; color: #ffffff; }
</style>
