<template>
  <div class="identitySwitching">
    <div class="loginMain">
      <div class="loginImg">
        <img src="../resource/images/userimg.jpg">
      </div>
      <div class="useTopMessage">
        <p>当前角色：学校管理员</p>
        <h4>张洋</h4>
      </div>

      <div class="loginBtnsBox">
        <input type="button" @click="go_school" value="切换为学校管理员" v-show="false">
        <input type="button" @click="go_class" value="切换为班主任">
        <input type="button" @click="go_class" value="切换为家长" >
        <input type="button" @click="go_back" value="返回">
      </div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from './SM_Nav.vue';
  export default {
    name: 'SM_Chose',
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
        this.bus.$emit('sm_nav',1);
        this.$router.push({name:'SM_Monit'});
      }
    },
    mounted:function () {
      this.bus.$emit('sm_nav',4,false);
    }
  }
</script>

<style>

</style>
