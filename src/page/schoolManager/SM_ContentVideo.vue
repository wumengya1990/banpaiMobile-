<template>
  <div>
    <Nav></Nav>
    <Top></Top>
  </div>

</template>

<script>

  import Nav from './SM_Nav.vue';
  import Top from './SM_ContentTop.vue';

  export default {
    name: 'SM_ContentVideo',
    components:{Nav,Top},
    data () {
      return {

      }
    },
    methods:{

    },
    mounted:function () {
      this.bus.$emit('sm_nav',4,false);
    }
  }
</script>

<style>

</style>
