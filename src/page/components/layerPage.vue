<template>
    <div class="layerPage">
        <h3><em>挑选班级</em><el-button type="primary" size="mini" @click="classHideLayer()" round>完成</el-button></h3>
        <div class="layerPageN">
            <div v-if="this.tcstyle=='banji'">
              <el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
            </div>
            <div v-else>
              素材选择页面
            </div>
        </div>

    </div>
</template>

<script>
export default {
name:'layerPage',
data() {
      return {
        classList:'caocaocaocaocao',
        materialList:'nimeinimeinimeinimei',
        data: [
          {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
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
      }
    }
}
</script>

<style>
.el-tree-node__content{ height:2.5rem; line-height: 2.5rem;}
</style>
