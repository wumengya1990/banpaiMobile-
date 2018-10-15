<template>
    <div class="pattern bgColor fullScreen">
        <leftMenu></leftMenu>
        <bnavs></bnavs>

        <div class="patternRightBoxM">
            <div class="patternRightBox">
                <h4>已选素材</h4>
                <div class="patternRightBoxN">
                  <div class="bts"><el-button type="primary" size="small" style="width:100%;" round @click="showLayer('sucai')" >点击选择素材</el-button></div>
                   <ul class="materialList">
                       <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
                       <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
                       <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
                       <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
                   </ul>
                </div>

            </div>

            <div class="patternRightBox">
                <h4>已选班级</h4>
                <div class="patternRightBoxN">
                  <div class="bts"><el-button type="primary" size="small" style="width:100%;" round @click="showLayer('banji')" >选择班级</el-button></div>
                  <el-tag class="mgR5 mgB5" v-for="tag in tags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
                </div>
            </div>
            
        </div>

         <div class="layerBoxShowHide">
            <layerPage v-bind:tcstyle="tcstyle" v-on:classList="classList"></layerPage>
        </div>

    </div>
</template>

<script>
import bnavs from "./navAdmin.vue"
import leftMenu from "./leftMenu.vue"
import layerPage from "./layerPage.vue"
export default {
name:"pattern3",
components:{bnavs,leftMenu,layerPage},
data(){
    return{
        noticeCho:'',
        noticeGroupnrs:['关于“六一”放假提前通知','关于社会实践活动延期举行','恶劣天气停课通知'],
        tags: [ '标签一', '标签二', '标签三', '标签四'],
        tcstyle:'',
        dataFromTC:''
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
    showLayer(yangshi){
        this.tcstyle = yangshi;
        let tcBox = document.getElementsByClassName("layerBoxShowHide")[0];
        tcBox.style.left = 0;
    },
    classList:function(classList){
        this.dataFromTC = classList;
        console.log(this.dataFromTC);
    }
}
}
</script>

<style>
.el-radio+.el-radio{ margin: 0;}
.el-radio{ height: 30px; line-height: 30px;}
</style>
