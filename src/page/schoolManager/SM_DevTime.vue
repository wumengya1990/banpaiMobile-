<template>
  <div class="pattern bgColor fullScreen">
    <Left></Left>
    <Nav></Nav>
    <div class="patternRightBoxM">
      <div class="patternRightBox">
        <h4>选择倒计时</h4>
        <div class="patternRightBoxN">
          <el-radio-group v-model="time.selected">
            <el-radio v-for="t in time.list" :label="t.content" :key="t.id">{{t.content}}</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="patternRightBox">
        <h4>已选班级</h4>
        <div class="patternRightBoxN">
          <div class="bts">
            <el-button type="primary" size="small" style="width:100%;" round @click="class_open()" >选择班级</el-button>
          </div>
          <el-tag class="mgR5 mgB5" v-for="c in select.list" :disable-transitions="false">{{c.text}}</el-tag>
        </div>
      </div>
    </div>
    <div class="layerBoxShowHide">
      <LayerClass></LayerClass>
    </div>
  </div>
</template>

<script>

  import Left from './SM_DevLeft.vue';
  import Nav from './SM_Nav.vue';
  import LayerClass from "../common/Layer_Class.vue";

  export default {
    name: 'SM_DevTime',
    components:{Left,Nav,LayerClass},
    data () {
      return {
        time:{
          selected:'',
          list:[]
        },
        select:{
          list:[],
          expand:[],
          checked:[]
        },
      }
    },
    methods:{
      load_time:function(){
        let url = 'wechat/school/manager/mode/load/time/data';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.time.list = data.items;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      class_open:function () {
        this.tcstyle = "banji";
        let tcBox = document.getElementsByClassName("layerBoxShowHide")[0];
        tcBox.style.left = 0;
      }
    },
    mounted:function () {
      this.load_time();
      this.bus.$on('select_class',(classList)=>{
        this.select.list = classList;
      });
      this.bus.$emit('sm_nav',2,false);

    }
  }
</script>

<style>
  .el-radio+.el-radio{ margin: 0;}
  .el-radio{ height: 30px; line-height: 30px;}
</style>
