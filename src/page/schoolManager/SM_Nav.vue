<template>
  <div class="navAdmin">
    <a @click="go_sm(1,true)" :class="{on:selected == 1}" href="javascript:void(0)"><i class="icon iconfont icon-iconfont-zhutizuizhong"></i><span>设备监控</span></a>
    <a @click="go_sm(2,true)" :class="{on:selected == 2}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>开关机管理</span></a>
    <em><el-button @click="plus_show()" type="primary" icon="el-icon-plus" size="mini" circle></el-button></em>
    <a @click="go_sm(3,true)" :class="{on:selected == 3}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>校园管理</span></a>
    <a @click="go_sm(4,true)" :class="{on:selected == 4}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>身份切换</span></a>
    <div class="navtc" v-show="plus.show">
      <div class="bts"><font @click="plus.show = false">关闭</font></div>
      <dl><dt><img @click="go_image(1)" :src="image.image1"></dt><dd>设备监控</dd></dl>
      <dl><dt><img @click="go_image(2)" :src="image.image2"></dt><dd>开关机管理</dd></dl>
      <dl><dt><img @click="go_image(3)" :src="image.image3"></dt><dd>通知列表</dd></dl>
      <dl><dt><img @click="go_image(4)" :src="image.image4"></dt><dd>发布通知</dd></dl>
      <dl><dt><img @click="go_image(5)" :src="image.image5"></dt><dd>动态列表</dd></dl>
      <dl><dt><img @click="go_image(6)" :src="image.image6"></dt><dd>发布动态</dd></dl>
    </div>
  </div>
</template>

<script>

  import monit from '../resource/images/userimg.jpg';

  export default {
    name: 'SM_Nav',
    data () {
      return {
        image:{
          image1:monit,
          image2:monit,
          image3:monit,
          image4:monit,
          image5:monit,
          image6:monit
        },
        selected:1,
        name:'',
        plus:{
          show:false
        }
      }
    },
    methods:{
      go_image:function(type){
        if(type == 1){
          this.$router.push({name:'SM_Monit'});
        }else if(type == 2){
          this.$router.push({name:'SM_DevOpen'});
        }else if(type == 3){
          this.$router.push({name:'SM_SchoolNotice'});
        }else if(type == 4){
          this.$router.push({name:'SM_Monit'});
        }else if(type == 5){
          this.$router.push({name:'SM_SchoolState'});
        }else if(type == 6){
          this.$router.push({name:'SM_Monit'});
        }
      },
      go_sm:function (type,show) {
        this.selected = type;
        if(type == 1){// 监控设备
          this.name = 'SM_Monit';
        }else if(type == 2){// 班牌管理
          // this.name = 'SM_DevClass';
          this.name = 'SM_DevOpen';
        }else if(type == 3){// 校园管理
          this.name = 'SM_SchoolNotice';
        }else if(type == 4){// 素材管理(暂时放我的切换)
          // this.name = 'SM_ContentImage';
          this.name = 'SM_Chose';
        }
        if(this.name != '' && show){
          this.$router.push({name:this.name});
        }
      },
      plus_show:function () {
        if(this.plus.show){
          this.plus.show = false;
        }else{
          this.plus.show = true;
        }

      }
    },
    mounted:function () {
      // 注册事件
      this.bus.$on('sm_nav', (type,show)=>{
        this.go_sm(type,show);
      });
    }
  }
</script>

<style>

</style>
