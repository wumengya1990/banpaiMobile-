<template>
    <div class="mien bgColor fullScreen">
        <div class="formList">
            <ul>
                <li>
                    <em>风采名称</em>
                    <div class="formRightOver">
                        <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
                     <div class="messageCon">{{input}}</div>
                    </div>
                </li>
                 <li>
                    <em>风采描述</em>
                    <div class="formRightOver">
                        <!-- <el-input type="textarea" :autosize="{ minRows:4, maxRows:8}" placeholder="请输入内容"  v-model="textarea3"></el-input> -->
                        <div class="messageCon">
                            {{textarea3}}
                        </div>
                    </div>
                </li>
                <li>
                    <em>风采图片（请上传横版图片）</em>
                    <div class="formRightOver">
                        <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :file-list="fileListSC"
                        :on-remove="handleRemove"
                        disabled
                        >
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible" disabled>
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                </li>
            </ul>
            <div class="bts">
                <p><el-button type="primary" style="width:70%;" round>修改风采</el-button></p>
                <p><el-button style="width:70%;" @click="pageBack()" round>返回</el-button></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"mien",
data(){
    return{
        input:'关于征集各院校的通知',
        textarea3: '江苏省2019年普通高校招生考试报名工作即将开始。网上报名时间为2018年11月1日至4日，报名信息确认的截止时间为11月7日。不符合2019年普通高考报考科类所规定的学业水平测试必修科目要求的考生，在高考报名时还必须参加相关必修科目测试的报名。',
        checkList:["六年级（1）班级"],
        fileListSC:[
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
            {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
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
      }
    },
    computed:{
        pageBack:function(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.el-checkbox+.el-checkbox{ margin: 0;}
.el-upload--picture-card{ width: 80px; height: 80px; line-height: 80px;}
.el-upload-list--picture-card .el-upload-list__item{  width: 80px; height: 80px;}
</style>
