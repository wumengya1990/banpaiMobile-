<template>
  <div>
    <div class="topMenu">
      <router-link active-class="on" to="/sm/content/video">视频管理</router-link>
      <router-link active-class="on" to="/sm/content/image">图片管理</router-link>
    </div>
  </div>

</template>

<script>


  export default {
    name: 'SM_ContentTop',
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
