<template>
  <div class="identitySwitching">
    <div class="loginMain">
      <div class="loginImg">
        <img src="./images/userimg.jpg">
      </div>
      <div class="useTopMessage">
        <p>当前角色：家长</p>
        <h4>张洋</h4>
      </div>

      <div class="loginBtnsBox">
        <input type="button" @click="go_school" value="切换为学校管理员">
        <input type="button" @click="go_class" value="切换为班主任">
        <input type="button" @click="go_class" value="切换为家长" v-show="false">
        <input type="button" @click="go_back" value="返回">
      </div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from './GU_Nav.vue';
  export default {
    name: 'GU_Chose',
    components:{Nav},
    data () {
      return {

      }
    },
    methods:{
      // 切换为学校管理员
      go_school:function () {
        this.bus.$emit('go_school');
      },
      // 切换为班主任
      go_class:function () {
        this.bus.$emit('go_class');
      },
      // 返回
      go_back:function () {
        this.bus.$emit('gu_nav',1);
        this.$router.push({name:'GU_Message'});
      }
    },
    mounted:function () {

    }
  }
</script>

<style>

</style>
