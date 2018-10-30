<template>
  <div class="layerPage">
    <h3>
      <em>挑选素材</em>
      <el-button type="primary" size="mini" @click="classHideLayer()" round>完成</el-button>
    </h3>
    <div class="layerPageN">
      <div>
        <div class="materialBoxM">
          <div class="materialBoxN">
            <p class="timeLine"><span>2018-10-18</span><span>星期四</span></p>
            <ul>
              <li>
                <div class="imgBox">
                  <img src="../resource/images/userimg.jpg">
                </div>
                <label>
                  <span>
                    <i class="el-icon-check"></i>
                  </span>
                  <input type="checkbox">
                </label>
              </li>
            </ul>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from "jquery";
  export default {
    name:'LayerImage',
    data() {
      return {
        imageList:[]
      };
    },
    mounted(){
      this.setMaterialBoxHeight();
    },
    methods:{
      classHideLayer:function(){
        let tcBox = document.getElementsByClassName("layerBoxShowHide")[1];
        tcBox.style.left = "100%";
        this.$emit('classList', this.classList);
      },
      setMaterialBoxHeight:function(){
        // var liwidth = $(".materialBoxN ul li").width();
        $(".materialBoxN ul li").height($(".materialBoxN ul li").width())
        $(".materialBoxN ul li label input").click(function(){
          if(!$(this).is(":checked")){
            $(this).prop("checked",false);
            $(this).parent().removeClass("on");
          }else{
            $(this).prop("checked",true);
            $(this).parent().addClass("on");
          }
        })
      }
    }
  }
</script>

<style>
.el-tree-node__content{ height:2.5rem; line-height: 2.5rem;}
</style>
