<template>
    <div class="navAdmin">
        <router-link active-class="on" to="/monitor">
            <i class="icon iconfont icon-iconfont-zhutizuizhong-"></i>
            <span>监控设备</span>
        </router-link>
        <router-link active-class="on" to="/pattern">
             <i class="icon iconfont icon-toupingshezhi"></i>
            <span>班牌管理</span>
        </router-link>
        <em>
            <el-button type="primary" icon="el-icon-plus" size="mini" @click="navtcShow()" circle></el-button>
        </em>
        <router-link active-class="on" to="/messageListNotice">
            <i class="icon iconfont icon-xiaoyuanmenhu"></i>
            <span>校园管理</span>
        </router-link>
        <router-link to="">
            <i class="icon iconfont icon-cailiaobao"></i>
            
            <span>素材管理</span>
        </router-link>

        <div class="navtc" v-show="tcShow">
            <div class="bts"><font @click="navtcShow()">关闭</font></div>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
            <dl><dt><img src="../resource/images/userimg.jpg"></dt><dd>设备监控</dd></dl>
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
