<template>
    <div class="addMien bgColor fullScreen">
        <bnavs></bnavs>
        <div class="formList">
            <ul>
                <li>
                    <em>风采名称</em>
                    <div class="formRightOver">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </li>
                 <li>
                    <em>风采描述</em>
                    <div class="formRightOver">
                        <el-input type="textarea" :autosize="{ minRows:4, maxRows:8}" placeholder="请输入内容"  v-model="textarea3"></el-input>
                    </div>
                </li>
                <li>
                    <em>风采图片（请上传横版图片）</em>
                    <div class="formRightOver">
                        <div class="uploadBox">
                            <ul>
                                <li v-for="(imgs,index) in fileListSC" @click=" imgs.cazuo = !imgs.cazuo">
                                    <img :src="imgs.url">
                                    <div class="upState"><i class="el-icon-check"></i></div>
                                    <div class="operateBox" v-show="imgs.cazuo">
                                        <a @click="drop(index)" href="javascript:void(0)"><i class=" el-icon-delete"></i></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="addBox"> 
                                <input type="file">
                            </div>
                            <div class="clear"></div>
                        </div>
                        
                    </div>
                </li>
            </ul>
            <div class="bts">
                <p><el-button type="primary" style="width:70%;" round>风采发布</el-button></p>
                <p><el-button type="danger" style="width:70%;" @click="pageBack()" round>取消发布</el-button></p>
            </div>
        </div>
    </div>
</template>

<script>
import bnavs from "./navMaster.vue"
export default {
name:"addMien",
components:{bnavs},
data(){
    return{
        input:'',
        textarea3: '',
        checkList:["六年级（1）班级"],
        fileListSC:[
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',cazuo:false},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',cazuo:false},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',cazuo:false},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',cazuo:false},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',cazuo:false}
        ],
        dialogImageUrl: '',
        dialogVisible: false
        
    }
},
methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      pageBack:function(){
            this.$router.go(-1);
      },
      drop:function(c){
          this.fileListSC.splice(c,1);
      }
        
    }
}
</script>

<style>
.el-checkbox+.el-checkbox{ margin: 0;}
.el-upload--picture-card{ width: 80px; height: 80px; line-height: 80px;}
.el-upload-list--picture-card .el-upload-list__item{  width: 80px; height: 80px;}
</style>
