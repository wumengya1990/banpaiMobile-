<template>
    <div class="pattern bgColor fullScreen">
        <leftMenu></leftMenu>
        <bnavs></bnavs>

        <div class="patternRightBoxM">
            <div class="patternRightBox">
                <h4>已选班级</h4>
                <div class="patternRightBoxN">
                    <el-tag class="mgR5 mgB5" v-for="tag in tags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
                </div>
            </div>

            <div class="patternRightBox">
                <h4>已选班级</h4>
                <div class="patternRightBoxN">
                    <el-tree :data="data" :props="defaultProps" show-checkbox @check-change="handleCheckChange" @node-click="handleNodeClick"></el-tree>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
import bnavs from "./navAdmin.vue"
import leftMenu from "./leftMenu.vue"
export default {
name:"pattern",
components:{bnavs,leftMenu},
data(){
    return{
        tags: [ '标签一', '标签二', '标签三', '标签四'],
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-2'
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
      }
}
}
</script>

<style>

</style>
