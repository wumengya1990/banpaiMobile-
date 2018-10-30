<template>
  <div class="layerPage">
    <h3>
      <em>选择班级</em>
      <el-button type="primary" size="mini" @click="classHideLayer()" round>完成</el-button>
    </h3>
    <div class="layerPageN">
      <div>
        <el-tree
          :data="all.list" show-checkbox ref="tree" highlight-current :props="props"
          node-key="id"
          @check-change="class_change">
        </el-tree>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from "jquery";
  export default {
    name:'LayerClass',
    data() {
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
      };
    },
    mounted(){
      this.load_class();
      this.setMaterialBoxHeight();
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
      class_change:function(data,checked){
        let id = data.id;
        for (let i in this.all.list) {
          let g = this.all.list[i];
          g.checked = checked;
          for (let j in g.children){
            let c = g.children[j];
            if(g.id == id || c.id == id){
              c.checked = checked;
            }
          }
        }
        this.select_change();
      },
      select_change:function () {
        this.select.list = new Array();
        for (let i in this.all.list) {
          let g = this.all.list[i];
          for (let j in g.children){
            let c = g.children[j];
            if(c.checked){
              this.select.list.push(c);
            }
          }
        }
      },
      classHideLayer:function(){
        let tcBox = document.getElementsByClassName("layerBoxShowHide")[0];
        tcBox.style.left = "100%";
        this.bus.$emit('select_class', this.select.list);
      },
      setMaterialBoxHeight:function(){
        // var liwidth = $(".materialBoxN ul li").width();
        $(".materialBoxN ul li").height($(".materialBoxN ul li").width())
        $(".materialBoxN ul li label input").click(function(){
          if(!$(this).is(":checked")){
            $(this).prop("checked",false);
            $(this).parent().removeClass("on");
          }else{
            $(this).prop("checked",true);
            $(this).parent().addClass("on");
          }
        })
        
      }
    }
}
</script>

<style>
.el-tree-node__content{ height:2.5rem; line-height: 2.5rem;}
</style>
