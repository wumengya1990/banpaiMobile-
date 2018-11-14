<template>
  <div>
    班级荣誉
  </div>
</template>

<script>

  export default {
    name: 'CM_ClassHonor',
    data () {
      return {
        classId:''

      }
    },
    methods:{

    },
    mounted:function () {
      // 注册事件
      this.bus.$on('honor_class',(classId)=>{
        this.classId = classId;
      });
    }
  }
</script>

<style>

</style>
