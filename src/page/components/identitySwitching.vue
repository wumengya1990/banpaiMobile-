<template>
    <div class="identitySwitching">
        <div class="loginMain">
            <div class="loginImg">
                <img src="../resource/images/userimg.jpg">
            </div>
            <div class="useTopMessage">
                <p>当前角色：班主任</p>
                <h4>张洋</h4>
            </div>

            <div class="loginBtnsBox">
                <input type="button" value="切换为家长">
                <input type="button" value="切换为班主任">
                <input type="button" value="切换为学校管理员">
                <input type="button" value="返回">
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'identitySwitching'
}
</script>

<style>

</style>
