<template>
  <div class="login">
    <div class="loginMain">
      <div class="loginImg">
        <img src="../resource/images/userimg.jpg">
      </div>
      <div class="useTopMessage">
        <h4>班牌系统</h4>
      </div>
      <div class="loginBtnsBox">
        <input type="button" @click="login" value="登录">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        loginName:'',
        password:''
      }
    },
    watch:{

    },
    methods:{
      login:function () {
        this.$router.push({name:'Chose'});
      }
    },
    mounted:function () {
      // 注册事件
      this.bus.$on('go_school', ()=>{
        this.go_school();
      });
      this.bus.$on('go_guardian', ()=>{
        this.go_guardian();
      });
      this.bus.$on('go_class', ()=>{
        this.go_class();
      });
    }
  }
</script>

<style>

</style>
