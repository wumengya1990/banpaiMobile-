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
                    <el-tree :data="data2" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps" @check="chothitiao"></el-tree>
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
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
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
    chothitiao(){
      //alert(123);
      console.log(this.$refs.tree.chothitiao());
    }
}
}
</script>

<style>

</style>
