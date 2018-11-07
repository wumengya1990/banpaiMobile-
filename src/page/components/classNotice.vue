<template>
    <div class="classNotice bgColor fullScreen">
        <div class="formList">
            <ul>
                <li>
                    <em>通知标题</em>
                    <div class="formRightOver">
                        <!-- <el-input v-model="input" placeholder="请输入内容" disabled></el-input> -->
                        <div class="messageCon">{{input}}</div>
                    </div>
                </li>
                 <li>
                    <em>通知内容</em>
                    <div class="formRightOver">
                        <!-- <el-input type="textarea" :autosize="{ minRows:4, maxRows:8}" placeholder="请输入内容"  v-model="textarea3" disabled></el-input> -->
                        <div class="messageCon">
                            {{textarea3}}
                        </div>
                    </div>
                </li>
                <li>
                    <em>发送班级</em>
                    <div class="formRightOver">
                        <el-checkbox-group v-model="checkList" class="chickBox">
                            <p><el-checkbox label="六年级（1）班级" disabled></el-checkbox></p>
                            <p><el-checkbox label="六年级（2）班级" disabled></el-checkbox></p>
                            <p><el-checkbox label="六年级（3）班级" disabled></el-checkbox></p>
                        </el-checkbox-group>
                    </div>
                </li>
            </ul>
            <div class="bts">
                <p><el-button type="primary" style="width:70%;" round>修改通知</el-button></p>
                <p><el-button style="width:70%;" @click="pageBack()" round>返回</el-button></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"classNotice",
data(){
    return{
        input:'关于征集各院校的通知',
        textarea3: '江苏省2019年普通高校招生考试报名工作即将开始。网上报名时间为2018年11月1日至4日，报名信息确认的截止时间为11月7日。不符合2019年普通高考报考科类所规定的学业水平测试必修科目要求的考生，在高考报名时还必须参加相关必修科目测试的报名。',
        checkList:["六年级（1）班级"]
        
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
</style>
