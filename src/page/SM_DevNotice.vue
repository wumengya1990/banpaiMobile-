<template>
  <div>
    <Left></Left>

    <Nav></Nav>
  </div>

</template>

<script>

  import Left from './SM_DevLeft.vue';
  import Nav from './SM_Nav.vue';

  export default {
    name: 'SM_DevNotice',
    components:{Left,Nav},
    data () {
      return {

      }
    },
    methods:{

    },
    mounted:function () {
      this.bus.$emit('sm_nav',2);
    }
  }
</script>

<style>

</style>
