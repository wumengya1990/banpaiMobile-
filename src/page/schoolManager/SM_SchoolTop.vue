<template>
  <div>
    <div class="topMenu">
      <router-link active-class="on" to="/sm/school/notice">通知管理</router-link>
      <router-link active-class="on" to="/sm/school/state">校园动态</router-link>
    </div>
  </div>

</template>

<script>


  export default {
    name: 'SM_SchoolTop',
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
