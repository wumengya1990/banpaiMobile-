<template>
  <div class="login">
    <div class="loginMain">
      <div class="loginImg">
        <img src="../resource/images/userimg.jpg">
      </div>
      <div class="useTopMessage">
        <h4>无权限</h4>
      </div>
      <div class="loginBtnsBox">
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
      login_school:function () {
        let url = 'wechat/login/login';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.$router.push({name:'SM_Monit'});
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      login_guardian:function () {
        this.$router.push({name:'GU_Message'});
      },
      login_class:function () {
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
