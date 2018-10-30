<template>
  <div class="pattern bgColor fullScreen">
    <Left></Left>
    <Nav></Nav>
    <div class="patternRightBoxM">
      <div class="patternRightBox">
        <h4>已选班级</h4>
        <div class="patternRightBoxN">
          <div class="bts">
            <el-button type="primary" size="small" style="width:100%;" round @click="class_open()" >选择班级</el-button>
          </div>
          <el-tag class="mgR5 mgB5" v-for="c in selectList" :key="c.id" closable :disable-transitions="false" @close="class_remove(c)">{{c.className}}</el-tag>
        </div>
      </div>

    </div>

    <div class="layerBoxShowHide">
      <LayerClass v-bind:tcstyle="tcstyle" v-on:classList="classList"></LayerClass>
    </div>

  </div>
</template>

<script>

  import Left from './SM_DevLeft.vue';
  import Nav from './SM_Nav.vue';
  import LayerClass from "../common/Layer_Class.vue";

  export default {
    name: 'SM_DevExam',
    components:{Left,Nav,LayerClass},
    data () {
      return {
        selectList:[{
          classId:'1',
          className:'一年级一班'
        }],
        classList:[{
          label: '一年级',
          id:'g1',
          children: [
            {label: '（1）班级',id:'g1c1'},
            {label: '（2）班级',id:'g1c2'},
            {label: '（3）班级',id:'g1c3'},
            {label: '（4）班级',id:'g1c4'},
            {label: '（5）班级',id:'g1c5'},
            {label: '（6）班级',id:'g1c6'}
          ]
        }]
      }
    },
    methods:{

    },
    mounted:function () {
      this.bus.$emit('sm_nav',2,false);
    }
  }
</script>

<style>

</style>
