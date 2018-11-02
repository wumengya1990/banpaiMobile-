<template>
    <div class="navAdmin">
        <router-link active-class="on" to="">
            <i class="icon iconfont icon-shouye2"></i>
            <span>首页</span>
        </router-link>
        <router-link active-class="on" to="">
            <i class="icon iconfont icon-banjiicon"></i>
            <span>班级管理</span>
        </router-link>
        <em>
            <el-button type="primary" icon="el-icon-plus" size="mini" @click="navtcShow()" circle></el-button>
        </em>
        <router-link active-class="on" to="">
            <i class="icon iconfont icon-huojiangjiangbei"></i>
            <span>荣誉管理</span>
        </router-link>
        <router-link active-class="on" to="/attendance">
            <i class="icon iconfont icon-qiandao"></i>
            <span>考勤查看</span>
        </router-link>

        <div class="navtc" v-show="tcShow">
            <div class="bts"><font @click="navtcShow()">关闭</font></div>
            <dl><dt><img src="../resource/images/APP_03.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/APP_05.jpg"></dt><dd>模式切换</dd></dl>
            <dl><dt><img src="../resource/images/APP_07.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/APP_09.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/APP_15.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/APP_17.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/APP_19.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/APP_20.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/APP_25.png"></dt><dd>设备监控</dd></dl>
        </div>
    </div>
</template>

<script>
export default {
name:'navMaster',
data(){
return{
    tcShow:false
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

<style>

</style>
