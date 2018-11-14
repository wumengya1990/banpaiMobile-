<template>
  <div class="manage bgColor fullScreen">
    <Nav></Nav>
    <div class="patternRightBoxM" style="left: 3rem">
      <div class="patternRightBox">
        <div class="patternRightBoxN">
          <el-switch v-model="loop" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
      </div>

      <div class="patternRightBox">
        <h4>开关机时间</h4>
        <div class="patternRightBoxN">
          <ul>
            <li><el-time-picker v-model="startTime" value-format="HH:mm:ss" placeholder="请选择开机时间"></el-time-picker></li>
            <li><el-time-picker v-model="stopTime" value-format="HH:mm:ss" placeholder="请选择关机时间"></el-time-picker></li>
          </ul>
        </div>
      </div>

      <div class="patternRightBox">
        <h4>开关机范围</h4>
        <div class="patternRightBoxN">
          <el-checkbox v-for="w in weekList" v-model="w.css" :label="w.text" border @change="change_week"></el-checkbox>
        </div>
      </div>
      <div class="bts">
        <el-button type="primary" size="small" style="width:100%;" round @click="save_detail">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>

  import Left from './SM_DevLeft.vue';
  import Nav from './SM_Nav.vue';

  export default {
    name: 'SM_DevOpen',
    components:{Left,Nav},
    data () {
      return {
        id:'',
        weekList:[],
        startTime:'',
        stopTime:'',
        week:'',
        loop:true,
      }
    },
    methods:{
      load_detail:function () {
        var url = 'wechat/school/manager/mode/load/open/close';
        this.$ajax.get(url).then((out)=>{
          var data = out.data;
          var item = data.item;
          var items = data.items;
          if(data.code == 'S0000'){
            if(item.set.isLoop == 'Y'){
              this.loop = true;
            }else{
              this.loop = false;
            }
            this.startTime = item.set.startTime;
            this.stopTime = item.set.stopTime;
            this.weekList = item.weekList;
          }
        }).catch((error)=>{

        });
      },
      change_week:function () {
        this.week = '';
        for (var i in this.weekList){
          var w = this.weekList[i];
          if(w.css){
            this.week = this.week + w.id;
          }
        }
      },
      save_detail:function () {
        if(this.startTime == ''){
          this.mobile_warn('请选择开机时间');
          return;
        }
        if(this.stopTime == ''){
          this.mobile_warn('请选择关机时间');
          return;
        }
        if(this.week == ''){
          this.mobile_warn('请选择开关机范围');
          return;
        }
        var url = 'wechat/school/manager/mode/save/open/close';
        var param = {params:{
          startTime:this.startTime,
          stopTime:this.stopTime,
          week:this.week,
          loop:this.loop
        }};
        this.$ajax.get(url,param).then((out)=>{
          var data = out.data;
          var item = data.item;
          var items = data.items;
          if(data.code == 'S0000'){
            this.mobile_message('保存成功');
          }else{
            this.common_data(data);
          }
        }).catch((error)=>{

        });
      }
    },
    mounted:function () {
      this.load_detail();
      this.bus.$emit('sm_nav',2,false);
    }
  }
</script>

<style>
  .el-checkbox{ display: block;  padding: 5px 0;}
</style>
