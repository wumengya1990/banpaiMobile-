<template>
  <div class="nav">
    <a href="javascript:void(0)" :class="{on:selected == 1}" @click="go_gu(1)">留言</a>
    <a href="javascript:void(0)" :class="{on:selected == 2}" @click="go_gu(2)">我的</a>
  </div>
</template>

<script>
export default {
  name: 'GU_Nav',
  data () {
    return {
      selected:1,
      name:''
    }
  },
  methods:{
    go_gu:function (type) {
      this.selected = type;
      if(type == 1){
        this.name = 'GU_Message';
      }else if(type == 2){
        this.name = 'GU_Chose';
      }
      this.$router.push({name:this.name});
    }
  },
  mounted:function () {
    // 注册事件
    this.bus.$on('select_nav', (type)=>{
      this.go_gu(type);
    });
  }
}
</script>

<style>

</style>
