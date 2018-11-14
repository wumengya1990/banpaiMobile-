<template>
  <div class="login">
    <div class="loginMain">
      <div class="loginImg">
        <img :src="user.head">
      </div>
      <div class="useTopMessage">
        <h4>{{user.name}}</h4>
      </div>
      <div class="loginBtnsBox">
        <input type="button" @click="go_school" value="选择学校管理员" v-if="role.schoolManager == 'Y'">
        <input type="button" @click="go_guardian" value="选择家长" v-if="role.guardian == 'Y'">
        <input type="button" @click="go_class" value="选择班主任" v-if="role.classManager == 'Y'">
      </div>
    </div>
  </div>
</template>
<script>

  import defaultHead from '../resource/images/userimg.jpg';

  export default {
    name: 'Chose',
    data () {
      return {
        user:{
          name:'',
          head:defaultHead
        },
        role:{
          isRole:'',
          schoolManager:'',
          classManager:'',
          guardian:''
        },
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
        this.$router.push({name:'CM_Index'});
      },
      get_user:function () {
        let url = 'wechat/login/get/user';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.role.isRole = data.item.isRole;
            if(this.role.isRole == 'N'){
              this.$router.push({name:'Role'});
            }
            this.user.name = data.item.user.realName;
            this.role.schoolManager = data.item.schoolManager;
            this.role.classManager = data.item.classManager;
            this.role.guardian = data.item.guardian;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      }
    },
    mounted:function () {
      this.get_user();
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
