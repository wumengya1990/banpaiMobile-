<template>
  <div class="pattern bgColor fullScreen">
    <Left></Left>
    <Nav></Nav>
    <div class="patternRightBoxM">
      <div class="patternRightBox">
        <h4>选择班级</h4>
        <div class="patternRightBoxN">
          <el-tree
            :data="all.list" show-checkbox ref="tree" highlight-current :props="props"
            node-key="id"
            @check="class_change" >
          </el-tree>
        </div>
      </div>
      <div class="patternRightBox">
        <h4>已选班级</h4>
        <div class="patternRightBoxN">
          <el-tag class="mgR5 mgB5" v-for="c in select.list" :disable-transitions="false">{{c.text}}</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Left from './SM_DevLeft.vue';
  import Nav from './SM_Nav.vue';
  export default {
    name: 'SM_Dev',
    components:{Left,Nav},
    data () {
      return {
        select:{
          list:[],
          expand:[],
          checked:[]
        },
        all:{
          list:[]
        },
        props: {
          children: 'children',
          label: 'text'
        }
      }
    },
    methods:{
      load_class:function(){
        let url = 'wechat/school/manager/mode/load/grade/class';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.all.list = data.items;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      class_remove:function(c){
        alert(c.className);
      },
      class_change:function(){
        let selects = this.$refs.tree.getCheckedKeys();
        this.select.list = new Array();
        for (let i in this.all.list) {
          let g = this.all.list[i];
          for (let j in g.children){
            let c = g.children[j];
            if(selects.length > 0){
              for (let k in selects){
                if(selects[k] == c.id){
                  let s = {id:c.id,text:g.text+c.text};
                  this.select.list.push(s);
                }
              }
            }
          }
        }
      }
    },
    mounted:function () {
      this.load_class();
      this.bus.$emit('sm_nav',2,false);
    }
  }
</script>

<style>

</style>
