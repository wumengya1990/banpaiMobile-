<template>
  <div class="pattern bgColor fullScreen">
    <Left></Left>
    <Nav></Nav>
    <div class="patternRightBoxM">
      <div class="patternRightBox">
        <h4>已选素材</h4>
        <div class="patternRightBoxN">
          <div class="bts"><el-button type="primary" size="small" style="width:100%;" round @click="image_open()" >点击选择素材</el-button></div>
          <ul class="materialList">
            <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
            <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
            <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
            <li><em><i class="el-icon-picture-outline"></i></em><p>哈哈哈哈哈哈哈哈</p><el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button></li>
          </ul>
        </div>
      </div>
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
      <LayerClass v-on:classList="classList"></LayerClass>
    </div>
    <div class="layerBoxShowHide">
      <ImageLayer v-on:imageList="imageList"></ImageLayer>
    </div>
  </div>
</template>

<script>

  import Left from './SM_DevLeft.vue';
  import Nav from './SM_Nav.vue';
  import LayerClass from "../common/Layer_Class.vue";
  import LayerImage from "../common/Layer_Image.vue";

  export default {
    name: 'SM_DevImage',
    components:{Left,Nav,LayerClass,LayerImage},
    data () {
      return {
        selectList:[{
          classId:'1',
          className:'一年级一班'
        }],
        dataFromTC:''
      }
    },
    methods:{

      image_open:function(){
        let tcBox = document.getElementsByClassName("layerBoxShowHide")[1];
        tcBox.style.left = 0;
      },
      class_open:function(){
        let tcBox = document.getElementsByClassName("layerBoxShowHide")[0];
        tcBox.style.left = 0;
      },
      classList:function(classList){
        this.dataFromTC = classList;
        console.log(this.dataFromTC);
      }
    },
    mounted:function () {
      this.bus.$emit('sm_nav',2,false);
    }
  }
</script>

<style>

</style>
