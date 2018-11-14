<template>
  <div class="identitySwitching">
    <div class="loginMain">
      <div class="loginImg">
        <img :src="user.head">
      </div>
      <div class="useTopMessage">
        <p>当前角色：家长</p>
        <h4>{{user.name}}</h4>
      </div>

      <div class="loginBtnsBox">
        <input type="button" @click="go_school" value="选择学校管理员" v-if="role.schoolManager == 'Y'">
        <input type="button" @click="go_guardian" value="选择家长" v-if="role.guardian == 'Y'" v-show="false">
        <input type="button" @click="go_class" value="选择班主任" v-if="role.classManager == 'Y'">
        <input type="button" @click="go_back" value="返回">
      </div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from './GU_Nav.vue';
  import defaultHead from '../resource/images/userimg.jpg';

  export default {
    name: 'GU_Chose',
    components:{Nav},
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
    }
  }
</script>

<style>

</style>
