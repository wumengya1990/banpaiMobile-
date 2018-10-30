<template>
  <div class="login">
    <div class="loginMain">
      <div class="loginImg">
        <img src="../resource/images/userimg.jpg">
      </div>
      <div class="useTopMessage">
        <h4>超级管理员</h4>
      </div>
      <div class="loginBtnsBox">
        <input type="button" @click="go_school" value="选择学校管理员">
        <input type="button" @click="go_guardian" value="选择家长">
        <input type="button" @click="go_class" value="选择班主任">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Chose',
    data () {
      return {
        type:''
      }
    },
    watch:{
      'type':function (n,o) {
        if(n == 'login'){

        }
      }
    },
    methods:{
      go_school:function () {
        this.$router.push({name:'SM_Monit'});
      },
      go_guardian:function () {
        this.$router.push({name:'GU_Message'});
      },
      go_class:function () {
        this.$router.push({name:''});
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
