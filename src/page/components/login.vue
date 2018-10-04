<template>
    <div class="login">
        <div class="loginMain">
            <div class="loginImg">
                <img src="../images/userimg.jpg">
            </div>
            <div class="useTopMessage">
                <p>当前角色：班主任</p>
                <h4>张洋</h4>
            </div>

            <div class="loginBtnsBox">
                <input type="button" value="选择为家长">
                <input type="button" value="选择为班主任">
                <input type="button" value="选择为学校管理员">
                <input type="button" value="返回">
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"login"

}
</script>

<style>
.loginImg{ width:8em; height:8em; margin:0 auto; border-radius: 50%; overflow: hidden;}
.loginImg img{ width: 100%; height: 100%;}
.useTopMessage{ text-align: center;}
.useTopMessage p{ color: #999999; font-size: 1.2rem; padding: 1rem 0 0;}
.useTopMessage h4{ font-size: 1.8rem; color: #333333; padding: 1rem 0;}
.loginBtnsBox input{ display: block; font-size:1.2rem; height: 3.5rem; line-height:3.5rem; width: 85%; text-align: center; margin:1.5rem auto; border-radius: 50px; overflow:hidden;}
.loginBtnsBox input:nth-child(1){ background: #0096ff; color: #ffffff;}
.loginBtnsBox input:nth-child(2){ background: #0fb185; color: #ffffff;}
.loginBtnsBox input:nth-child(3){ background: #ff6c5e; color: #ffffff;}
.loginBtnsBox input:nth-child(4){ background: #CCCCCC; color: #333333;}
.loginMain{ height: 80%; width: 100%; overflow: hidden; position: fixed; left: 0; top: 0; right: 0; bottom: 0; margin: auto;}
</style>
