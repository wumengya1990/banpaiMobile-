<template>
  <div class="classMasterIndex bgColor fullScreen">
    <div class="tubiao">

    </div>
    <div class="indexDataBox">
      <h3><span>今日考勤统计</span></h3>
      <div id="tongji1"></div>
    </div>
    <div class="indexDataBox">
      <h3><span>信息发布周统计</span></h3>
      <div id="tongji2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CM_Index',
    data () {
      return {
        classId:''
      }
    },
    watch:{
      classId:function (n,o) {
        if(n != ''){
          this.load_attend();
          this.load_message();
        }
      }
    },
    methods:{
      load_attend:function () {

      },
      load_message:function () {
        
      }
    },
    mounted:function () {
      // 注册事件
      this.bus.$on('index_class',(classId)=>{
        this.classId = classId;
      });
    }
  }
</script>

<style>

</style>
