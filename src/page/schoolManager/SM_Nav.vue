<template>
  <div class="navAdmin">
    <a @click="go_sm(1,true)" :class="{on:selected == 1}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>监控设备</span></a>
    <a @click="go_sm(2,true)" :class="{on:selected == 2}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>班牌管理</span></a>
    <em><el-button @click="plus_show()" type="primary" icon="el-icon-plus" size="mini" circle></el-button></em>
    <a @click="go_sm(3,true)" :class="{on:selected == 3}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>校园管理</span></a>
    <!--
    <a @click="go_sm(4,true)" :class="{on:selected == 4}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>素材管理</span></a>
    -->
    <a @click="go_sm(4,true)" :class="{on:selected == 4}" href="javascript:void(0)"><i class="el-icon-goods"></i><span>我的</span></a>
    <div class="navtc" v-show="plus.show">
      <div class="bts"><font @click="plus.show = false">关闭</font></div>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
      <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SM_Nav',
    data () {
      return {
        selected:1,
        name:'',
        plus:{
          show:false
        }
      }
    },
    methods:{
      go_sm:function (type,show) {
        this.selected = type;
        if(type == 1){// 监控设备
          this.name = 'SM_Monit';
        }else if(type == 2){// 班牌管理
          this.name = 'SM_DevClass';
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
