<template>
  <div class="leftMenu">
    <h3>模式设置</h3>
    <ul>
      <li><router-link active-class="on" to="/sm/dev/class"><span>标准模式</span></router-link></li>
      <li><router-link active-class="on" to="/sm/dev/time"><span>倒计时模式</span></router-link></li>
      <li><router-link active-class="on" to="/sm/dev/notice"><span>通知模式</span></router-link></li>
      <li><router-link active-class="on" to="/sm/dev/image"><span>轮播模式</span></router-link></li>
      <li><router-link active-class="on" to="/sm/dev/exam"><span>考场模式</span></router-link></li>
      <li><router-link active-class="on" to="/sm/dev/video"><span>视频模式</span></router-link></li>
    </ul>
    <h3>系统设置</h3>
    <ul>
      <li><router-link active-class="on" to="/sm/dev/open"><span>开机管理</span></router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SM_DevLeft',
    data () {
      return {

      }
    },
    methods:{

    },
    mounted:function () {

    }
  }
</script>

<style>

</style>
