<template>
    <div class="navAdmin">
        <router-link active-class="on" to="/classMasterIndex">
            <i class="icon iconfont icon-shouye2"></i>
            <span>首页</span>
        </router-link>
        <router-link active-class="on" to="/classManage">
            <i class="icon iconfont icon-banjiicon"></i>
            <span>班级管理</span>
        </router-link>
        <em>
            <el-button type="primary" icon="el-icon-plus" size="mini" @click="navtcShow()" circle></el-button>
        </em>
        
        <router-link active-class="on" to="/attendance">
            <i class="icon iconfont icon-qiandao"></i>
            <span>考勤查看</span>
        </router-link>
        <router-link active-class="on" to="">
            <i class="icon iconfont icon-shenfen"></i>
            <span>身份切换</span>
        </router-link>

        <div class="navtc" v-show="tcShow">
            <div class="bts">
          <div class="userTop">
            <div class="headImg">
              <i class="icon iconfont icon-yonghu1"></i>
            </div>
            <span>张洋</span>
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

          </div>
          <font @click="navtcShow()">关闭</font>
          <div class="clear"></div>
        </div>
            <dl><dt><img src="../resource/images/masterAPP_03.png"></dt><dd>班级通知</dd></dl>
            <dl><dt><img src="../resource/images/masterAPP_05.png"></dt><dd>班级风采</dd></dl>
            <dl><dt><img src="../resource/images/masterAPP_07.png"></dt><dd>班级荣誉</dd></dl>
            <dl><dt><img src="../resource/images/masterAPP_09.png"></dt><dd>考勤查看</dd></dl>
            <dl><dt><img src="../resource/images/APP_25.png"></dt><dd>身份切换</dd></dl>
            <dl><dt><img src="../resource/images/APP_30.png"></dt><dd>班级切换</dd></dl>
            <dl><dt><img src="../resource/images/APP_31.png"></dt><dd>发布风采</dd></dl>
            <dl><dt><img src="../resource/images/APP_32.png"></dt><dd>发布通知</dd></dl>
            <dl><dt><img src="../resource/images/APP_33.png"></dt><dd>发布荣誉</dd></dl>
        </div>
    </div>
</template>

<script>
export default {
name:'navMaster',
data(){
return{
    tcShow:false,
    options: [{
          value: '选项1',
          label: '三年级（2）班'
        }, {
          value: '选项2',
          label: '三年级（3）班'
        }],
        value: '选项1'
}
},
methods:{
    navtcShow:function(){
        this.tcShow = !this.tcShow
    },
    danyin:function(){
        console.log("正确")
    }
}
}
</script>

<style scoped>
.userTop >>> .el-input__inner{ border: none; font-size:15px; width: 10rem;}
</style>
