<template>
    <div class="layerPage">
        <h3><em>挑选班级</em><el-button type="primary" size="mini" @click="classHideLayer()" round>完成</el-button></h3>
        <div class="layerPageN">
            <div v-if="this.tcstyle=='banji'">
              <el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
            </div>
            <div v-else>
              <div class="materialBoxM">
                <div class="materialBoxN">
                <p class="timeLine"><span>2018-10-18</span><span>星期四</span></p>
                <ul>
                  <li><div class="imgBox"><img src="../images/userimg.jpg"></div><label><span><i class="el-icon-check"></i></span><input type="checkbox"></label></li>
                  <li><div class="imgBox"><img src="../images/userimg.jpg"></div><label><span><i class="el-icon-check"></i></span><input type="checkbox"></label></li>
                  <li><div class="imgBox"><img src="../images/userimg.jpg"></div><label><span><i class="el-icon-check"></i></span><input type="checkbox"></label></li>
                  <li><div class="imgBox"><img src="../images/userimg.jpg"></div><label><span><i class="el-icon-check"></i></span><input type="checkbox"></label></li>
                  <li><div class="imgBox"><img src="../images/userimg.jpg"></div><label><span><i class="el-icon-check"></i></span><input type="checkbox"></label></li>
                </ul>
                <div class="clear"></div>
                </div>

                
                
              </div>
            </div>
        </div>

    </div>
</template>

<script>
import $ from "jquery"
export default {
name:'layerPage',
data() {
      return {
        classList:'caocaocaocaocao',
        materialList:'nimeinimeinimeinimei',
        data: [
          {
          label: '一年级',
          children: [{
            label: '（1）班级'
          }]
        },{
          label: '二年级',
          children: [{
            label: '（1）班级'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    props:{
      tcstyle:{
        type:String,
        required:true
      }
    },mounted(){
      this.setMaterialBoxHeight();
    },
    methods:{
      handleClose(tag){
        this.tags.splice(this.tags.indexOf(tag), 1);
      },
      handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
      console.log(data);
      },
      classHideLayer:function(){
        let tcBox = document.getElementsByClassName("layerBoxShowHide")[0];
        tcBox.style.left = "100%";
        this.$emit('classList', this.classList);
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
