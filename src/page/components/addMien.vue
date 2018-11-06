<template>
    <div class="addClassNotice bgColor fullScreen">
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
                        <el-upload
                         
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                </li>
            </ul>
            <div class="bts">
                <p><el-button type="primary" style="width:70%;" round>风采发布</el-button></p>
                <p><el-button type="danger" style="width:70%;" round>取消发布</el-button></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"addClassNotice",
data(){
    return{
        input:'',
        textarea3: '',
        checkList:["六年级（1）班级"],
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
      }
    }
}
</script>

<style>
.el-checkbox+.el-checkbox{ margin: 0;}
</style>
