<template>
  <div>
    <Nav></Nav>
    <div class="monitor bgColor fullScreen" ref="companyStyle">
      <bnavs></bnavs>
      <div class="monitorTop">
        <span v-for="v in grade.list" :class="v.css" @click="select_grade(v)">{{v.gradeName}}</span>
      </div>
      <div class="monitorList">
        <ul>
          <li v-for="(dev,index) in monit.list" :class="{shebeiOpen:dev.open}" :key="index">
            <div class="masks"></div>
            <div class="bgColor1">
              <div class="screenBox" :style="ysHeight">
                <div class="screenBoxN"></div>
              </div>
              <h4>{{dev.devName}}</h4>
              <div class="screenBoxControl">
                <span class="close" @click="dev_close(v.devId)" ><i class="icon iconfont icon-guanji"></i></span>
                <span class="restart" @click="dev_restart(v.devId)"><i class="icon iconfont icon-zhongqilanya"></i></span>
                <span class="reset" @click="dev_pass(v.devId)"><i class="icon iconfont icon-zhongzhi"></i></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

  import Nav from './SM_Nav.vue';

  export default {
    name: 'SM_Monit',
    components:{Nav},
    data () {
      return {
        grade:{
          id:'',
          list:''
        },
        monit:{
          ids:[],
          list:[]
        },

        classList:"",
        ysHeight:{},
        shebeiList:[
          { SCstate:true, SCgrade:'一年级', SCclass:'（1）班'},
          { SCstate:true, SCgrade:'一年级', SCclass:'（2）班'},
          { SCstate:false, SCgrade:'一年级', SCclass:'（3）班'},
          { SCstate:true, SCgrade:'一年级', SCclass:'（4）班'},
          { SCstate:false, SCgrade:'一年级', SCclass:'（5）班'},
          { SCstate:true, SCgrade:'一年级', SCclass:'（6）班'},
          { SCstate:true, SCgrade:'二年级', SCclass:'（1）班'},
          { SCstate:true, SCgrade:'二年级', SCclass:'（2）班'},
          { SCstate:false, SCgrade:'二年级', SCclass:'（3）班'},
          { SCstate:true, SCgrade:'二年级', SCclass:'（4）班'},
          { SCstate:false, SCgrade:'二年级', SCclass:'（5）班'},
          { SCstate:true, SCgrade:'二年级', SCclass:'（6）班'}
        ]
      }
    },
    watch:{
      'grade.id':function (n,o) {
        if(n != o){
          this.load_monit();
        }
      }
    },
    methods:{
      dev_close:function(devId){
        let url = 'wechat/school/manager/monit/load/monit/list';
        let param = {params:{
            gradeId:this.grade.id
          }};
        this.$ajax.get(url,param).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.monit.list = data.items;
            this.monit.ids = data.item.ids;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      dev_restart:function(devId){

      },
      dev_pass:function(devId){

      },
      load_state:function(){
        let url = 'wechat/school/manager/monit/load/state/list';
        let param = {params:{
            devIdList:this.monit.ids
          }};
        this.$ajax.get(url,param).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            for(let i in this.monit.list){
              let dev = this.monit.list[i];
              let devId = dev.devId;
              for(let j in data.items){
                let state = data.items[j];
                if(devId == state.devId){
                  if(state.state == 'Y'){
                    dev.open = true;
                  }else if(state.state == 'N'){
                    dev.open = false;
                  }
                }
              }
            }
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      load_monit:function(){
        let url = 'wechat/school/manager/monit/load/monit/list';
        let param = {params:{
          gradeId:this.grade.id
        }};
        this.$ajax.get(url,param).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.monit.list = data.items;
            this.monit.ids = data.item.ids;

            this.load_state();
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      load_grade_list:function(){
        let url = 'wechat/school/manager/monit/load/grade/list';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.grade.list = data.items;
            this.grade.id = data.item.id;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      select_grade:function (grade) {
        for (let i in this.grade.list) {
          let g = this.grade.list[i];
          if(g.gradeId == grade.gradeId){
            g.css = 'on';
            this.grade.id = g.gradeId;
          }else{
            g.css = '';
          }
        }
      }
    },
    mounted:function () {
      this.load_grade_list();
      this.bus.$emit('sm_nav',1);
    }
  }
</script>

<style>

</style>
