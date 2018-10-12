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
export default {
name:"pattern2",
components:{bnavs,leftMenu},
data(){
    return{
        noticeCho:'',
        noticeGroupnrs:['关于“六一”放假提前通知','关于社会实践活动延期举行','恶劣天气停课通知'],
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
