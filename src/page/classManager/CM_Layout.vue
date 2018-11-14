<template>
  <div class="leaveMessage bgColor">
    <router-view></router-view>
    <div class="navAdmin">
      <a @click="select_nav(1)" :class="{on:selected == 1}" href="javascript:void(0)"><i class="icon iconfont icon-shouye2"></i><span>首页</span></a>
      <a @click="select_nav(2)" :class="{on:selected == 2}" href="javascript:void(0)"><i class="icon iconfont icon-banjiicon"></i><span>班级管理</span></a>
      <em><el-button @click="plus_show()" type="primary" icon="el-icon-plus" size="mini" circle></el-button></em>
      <a @click="select_nav(3)" :class="{on:selected == 3}" href="javascript:void(0)"><i class="icon iconfont icon-huojiangjiangbei"></i><span>荣誉管理</span></a>
      <a @click="select_nav(4)" :class="{on:selected == 4}" href="javascript:void(0)"><i class="icon iconfont icon-qiandao"></i><span>考勤查看</span></a>
      <div class="navtc" v-show="plus.show">
        <div class="bts">
          <div class="userTop">
            <div class="headImg">
              <i class="icon iconfont icon-yonghu1"></i>
            </div>
            <span>{{userName}}</span>
            <el-select v-model="classId" placeholder="请选择" size="mini" @change="change_class">
              <el-option v-for="c in classList"
                         :key="c.classId"
                         :label="c.className"
                         :value="c.classId">
              </el-option>
            </el-select>

          </div>
          <font @click="plus.show = false">关闭</font>
          <div class="clear"></div>
        </div>
        <dl><dt><img @click="go_image(2)" :src="image.image2"></dt><dd>班级通知</dd></dl>
        <dl><dt><img @click="go_image(3)" :src="image.image3"></dt><dd>发布通知</dd></dl>
        <dl><dt><img @click="go_image(4)" :src="image.image4"></dt><dd>班级风采</dd></dl>
        <dl><dt><img @click="go_image(5)" :src="image.image5"></dt><dd>发布风采</dd></dl>
        <dl><dt><img @click="go_image(6)" :src="image.image6"></dt><dd>班级荣誉</dd></dl>
        <dl><dt><img @click="go_image(7)" :src="image.image7"></dt><dd>发布荣誉</dd></dl>
        <dl><dt><img @click="go_image(8)" :src="image.image8"></dt><dd>考勤查看</dd></dl>
        <dl><dt><img @click="go_image(9)" :src="image.image9"></dt><dd>身份切换</dd></dl>
      </div>
      <!-- 切换班级 -->
      <el-dialog title="收货地址" :visible.sync="show" :modal="false">

      </el-dialog>
    </div>
  </div>
</template>

<script>

  import classNotice from '../resource/images/masterAPP_03.png';
  import addNotice from '../resource/images/APP_32.png';
  import classMien from '../resource/images/masterAPP_05.png';
  import addMien from '../resource/images/APP_31.png';
  import classHonor from '../resource/images/masterAPP_07.png';
  import addHonor from '../resource/images/APP_33.png';
  import classAttend from '../resource/images/masterAPP_09.png';
  import userChose from '../resource/images/APP_25.png';

  export default {
    name: 'CM_Layout',
    data () {
      return {
        show:false,
        classId:'',
        classList:[],
        userName:'',
        image:{
          image2:classNotice,
          image3:addNotice,
          image4:classMien,
          image5:addMien,
          image6:classHonor,
          image7:addHonor,
          image8:classAttend,
          image9:userChose
        },
        selected:1,
        name:'',
        plus:{
          show:false
        }
      }
    },
    watch:{
      classId:function (n,o) {

      }
    },
    methods:{
      change_class:function(){
        if(this.selected == 1) {// 首页
          this.bus.$emit('index_class',this.classId);
        }else if(this.selected == 2){// 班级管理
          this.bus.$emit('manage_class',this.classId);
        }else if(this.selected == 3){// 荣誉管理
          this.bus.$emit('honor_class',this.classId);
        }else if(this.selected == 4){// 考勤查看
          this.bus.$emit('attend_class',this.classId);
        }
        this.plus_show();
      },
      go_image:function(type){
        if(type == 1){// 首页
          this.selected = 1;
          this.$router.push({name:'CM_Index',params:{classId:this.classId}});
        }else if(type == 2){// 班级通知
          this.selected = 2;
          this.$router.push({name:'CM_ClassManage',params:{classId:this.classId,show:'notice'}});
        }else if(type == 3){// 发布通知
          this.selected = 2;
          this.$router.push({name:'CM_ClassNoticeEdit',params:{classId:this.classId}});
        }else if(type == 4){// 班级风采
          this.selected = 2;
          this.$router.push({name:'CM_ClassManage',params:{classId:this.classId,show:'mien'}});
        }else if(type == 5){// 发布风采
          this.selected = 2;
          this.$router.push({name:'CM_ClassMienEdit'});
        }else if(type == 6){// 班级荣誉
          this.selected = 3;
          this.$router.push({name:'CM_ClassHonor',params:{classId:this.classId}});
        }else if(type == 7){// 发布荣誉
          this.selected = 3;
          this.$router.push({name:'CM_ClassHonorEdit'});
        }else if(type == 8){// 考勤查看
          this.selected = 4;
          this.$router.push({name:'CM_ClassAttend',params:{classId:this.classId}});
        }else if(type == 9){// 身份切换
          this.selected = 0;
          this.$router.push({name:'CM_Chose'});
        }
        this.plus.show = false;
      },
      load_class:function(){
        let url = 'wechat/class/manager/index/load/class';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.classList = data.items;
            this.userName = data.item.userName;
            if(this.classId == '' && this.classList.length > 0){
              this.classId = this.classList[0].classId;
            }
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      go_cm:function () {
        if(this.selected == 1){// 首页
          this.name = 'CM_Index';
        }else if(this.selected == 2){// 班级管理
          this.name = 'CM_ClassManage';
        }else if(this.selected == 3){// 荣誉管理
          this.name = 'CM_ClassHonor';
        }else if(this.selected == 4){// 考勤查看
          this.name = 'CM_ClassAttend';
        }
        if(this.name != ''){
          this.$router.push({name:this.name,params:{classId:this.classId}});
        }
      },
      select_nav:function(type){
        this.selected = type;
        this.go_cm();
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
      this.load_class();
      this.go_cm();
    }
  }
</script>

<style>

</style>
