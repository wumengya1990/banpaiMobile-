<template>
    <div class="pattern bgColor fullScreen">
        <leftMenu></leftMenu>
        <bnavs></bnavs>

        <div class="patternRightBoxM">
            <div class="patternRightBox">
                <h4>已选班级</h4>
                <div class="patternRightBoxN">
                    <el-radio-group v-model="noticeCho">
                        <el-radio v-for="notice in noticeGroupnrs" :label="notice" :key="notice">{{notice}}</el-radio>
                    </el-radio-group>
                </div>
            </div>

            <div class="patternRightBox">
                <h4>已选班级</h4>
                <div class="patternRightBoxN">
                    <div class="bts"><el-button type="primary" size="small" style="width:100%;" round>选择班级</el-button></div>
                  <el-tag class="mgR5 mgB5" v-for="tag in tags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
import bnavs from "./navAdmin.vue"
import leftMenu from "./leftMenu.vue"
import layerPage from "./layerPage.vue"
export default {
name:"pattern1",
components:{bnavs,leftMenu,layerPage},
data(){
    return{
        noticeCho:'',
        noticeGroupnrs:['距离高考还有100天','距离高考还有10天','距离高考还有0天'],
        tags: [ '标签一', '标签二', '标签三', '标签四']
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
.el-radio+.el-radio{ margin: 0;}
.el-radio{ height: 30px; line-height: 30px;}

</style>
