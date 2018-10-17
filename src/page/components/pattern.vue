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
                    <el-tree :data="data2" show-checkbox accordion node-key="id" ref="tree" highlight-current :props="props" @check-change="handleNodeClick"></el-tree>
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
          label: '一年级',
          id:'g1',
          children: [
            {label: '（1）班级',id:'g1c1'},
            {label: '（2）班级',id:'g1c2'},
            {label: '（3）班级',id:'g1c3'},
            {label: '（4）班级',id:'g1c4'},
            {label: '（5）班级',id:'g1c5'},
            {label: '（6）班级',id:'g1c6'}
            ]
        },{
          label: '二年级',
          id:'g2',
          children: [
            {label: '（1）班级',id:'g2c1'},
            {label: '（2）班级',id:'g2c2'},
            {label: '（3）班级',id:'g2c3'},
            {label: '（4）班级',id:'g2c4'},
            {label: '（5）班级',id:'g2c5'},
            {label: '（6）班级',id:'g2c6'}
            ]
        },{
          label: '三年级',
          id:'g3',
          children: [
            {label: '（1）班级',id:'g3c1'},
            {label: '（2）班级',id:'g3c2'},
            {label: '（3）班级',id:'g3c3'},
            {label: '（4）班级',id:'g3c4'},
            {label: '（5）班级',id:'g3c5'},
            {label: '（6）班级',id:'g3c6'}
            ]
        },{
          label: '四年级',
          id:'g4',
          children: [
            {label: '（1）班级',id:'g4c1'},
            {label: '（2）班级',id:'g4c2'},
            {label: '（3）班级',id:'g4c3'},
            {label: '（4）班级',id:'g4c4'},
            {label: '（5）班级',id:'g4c5'},
            {label: '（6）班级',id:'g4c6'}
            ]
        },{
          label: '五年级',
          id:'g5',
          children: [
            {label: '（1）班级',id:'g5c1'},
            {label: '（2）班级',id:'g5c2'},
            {label: '（3）班级',id:'g5c3'},
            {label: '（4）班级',id:'g5c4'},
            {label: '（5）班级',id:'g5c5'},
            {label: '（6）班级',id:'g5c6'}
            ]
        },{
          label: '六年级',
          id:'g6',
          children: [
            {label: '（1）班级',id:'g6c1'},
            {label: '（2）班级',id:'g6c2'},
            {label: '（3）班级',id:'g6c3'},
            {label: '（4）班级',id:'g6c4'},
            {label: '（5）班级',id:'g6c5'},
            {label: '（6）班级',id:'g6c6'}
            ]
        }],
        props: {
          children: 'children',
          label: 'label'
        }
    }
},
methods:{
    handleClose(tag){
        this.tags.splice(this.tags.indexOf(tag), 1);
    },
    handleCheckChange(data) {
        console.log(data.label);
        
      },
     handleNodeClick(data,checked) {
        console.log(data.label,checked);
        this.tags.push(data.label);
        
      },
}
}
</script>

<style>

</style>
