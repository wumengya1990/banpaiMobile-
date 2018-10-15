<template>
    <div class="leftMenu">
        <h3>模式设置</h3>
        <ul>
            <li><router-link active-class="on" to="/pattern"><span>标准模式</span></router-link></li>
            <li><router-link active-class="on" to="/pattern1"><span>倒计时模式</span></router-link></li>
            <li><router-link active-class="on" to="/pattern2"><span>通知模式</span></router-link></li>
            <li><router-link active-class="on" to="/pattern3"><span>轮播模式</span></router-link></li>
            <li><router-link active-class="on" to="/pattern4"><span>考场模式</span></router-link></li>
            <li><router-link active-class="on" to="/pattern5"><span>视频模式</span></router-link></li>
        </ul>
        <h3>系统设置</h3>
        <ul>
            <li><router-link to="">开关机管理</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
name:'leftMenu'
}
</script>

<style>

</style>
