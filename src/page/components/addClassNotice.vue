<template>
    <div class="addClassNotice bgColor fullScreen">
        <div class="formList">
            <ul>
                <li>
                    <em>通知标题</em>
                    <div class="formRightOver">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </li>
                 <li>
                    <em>通知内容</em>
                    <div class="formRightOver">
                        <el-input type="textarea" :autosize="{ minRows:4, maxRows:8}" placeholder="请输入内容"  v-model="textarea3"></el-input>
                    </div>
                </li>
                <li>
                    <em>发送班级</em>
                    <div class="formRightOver">
                        <el-checkbox-group v-model="checkList" class="chickBox">
                            <p><el-checkbox label="六年级（1）班级"></el-checkbox></p>
                            <p><el-checkbox label="六年级（2）班级"></el-checkbox></p>
                            <p><el-checkbox label="六年级（3）班级"></el-checkbox></p>
                        </el-checkbox-group>
                    </div>
                </li>
            </ul>
            <div class="bts">
                <p><el-button type="primary" style="width:70%;" round>通知发布</el-button></p>
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
        checkList:["六年级（1）班级"]
        
    }
}
}
</script>

<style>
.el-checkbox+.el-checkbox{ margin: 0;}
</style>
