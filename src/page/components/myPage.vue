<template>
    <div class="myPage">
        <div class="loginImg">
            <img src="../images/userimg.jpg">
        </div>
        <div class="useTopMessage">
            <p>当前角色：班主任</p>
            <h4>张洋</h4>
        </div>

         <div class="loginBtnsBox">
            <input type="button" value="切换角色">
        </div>

        <bnavs></bnavs>
    </div>
    
</template>

<script>
import bnavs from './nav.vue'

export default {
name:'myPage',
components:{bnavs},
data(){
    return{

    }
}
}
</script>

<style>

</style>
