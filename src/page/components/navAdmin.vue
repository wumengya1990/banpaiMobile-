<template>
    <div class="navAdmin">
        <a href="">
            <i class="el-icon-goods"></i>
            <span>监控设备</span>
        </a>
        <a href="">
            <i class="el-icon-goods"></i>
            <span>班牌管理</span>
        </a>
        <em>
            <el-button type="primary" icon="el-icon-plus" size="mini" @click="navtcShow()" circle></el-button>
        </em>
        <a href="">
            <i class="el-icon-goods"></i>
            <span>校园管理</span>
        </a>
        <a href="">
            <i class="el-icon-goods"></i>
            <span>素材管理</span>
        </a>
        <div class="navtc" v-show="tcShow">
            <div class="bts"><font @click="navtcShow()">关闭</font></div>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../images/userimg.jpg"></dt><dd>设备监控</dd></dl>
        </div>
    </div>
</template>

<script>
export default {
name:'navAdmin',
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
