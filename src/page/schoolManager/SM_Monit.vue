<template>
  <div>

    <Nav></Nav>
  </div>

</template>

<script>

  import Nav from './SM_Nav.vue';

  export default {
    name: 'SM_Monit',
    components:{Nav},
    data () {
      return {

      }
    },
    methods:{

    },
    mounted:function () {
      this.bus.$emit('sm_nav',1);
    }
  }
</script>

<style>

</style>
