<template>
    <div class="monitor bgColor fullScreen" ref="companyStyle">
        <bnavs></bnavs>
        <div class="monitorTop">
            <span class="on">一年级</span>
            <span>二年级</span>
            <span>三年级</span>
            <span>四年级</span>
            <span>五年级</span>
            <span>六年级</span>
        </div>

        <div class="monitorList">
            <ul>
                <li v-for="(shebei,index) in shebeiList" :class="{shebeiOpen:shebei.SCstate}" :key="index">
                    <div class="masks"></div>
                    <div class="bgColor1">
                    <div class="screenBox" :style="ysHeight">
                        <div class="screenBoxN"></div>
                    </div>
                    <h4>{{shebei.SCgrade}}{{shebei.SCclass}}</h4>
                    <div class="screenBoxControl">
                        <span class="close" onclick="alert(123)" ><i class="icon iconfont icon-guanji"></i></span>
                        <span class="restart" onclick="alert(213)"><i class="icon iconfont icon-zhongqilanya"></i></span>
                        <span class="reset" onclick="alert(321)"><i class="icon iconfont icon-zhongzhi"></i></span>
                    </div>
                    </div>
                </li>

                

                
            </ul>
        </div>
    </div>
</template>

<script>
import bnavs from "./navAdmin.vue"
export default {
name:'monitor',
components:{bnavs},
data(){
    return{
        classList:"",
        ysHeight:{},
        shebeiList:[
            { SCstate:true, SCgrade:'一年级', SCclass:'（1）班'},
            { SCstate:true, SCgrade:'一年级', SCclass:'（2）班'},
            { SCstate:false, SCgrade:'一年级', SCclass:'（3）班'},
            { SCstate:true, SCgrade:'一年级', SCclass:'（4）班'},
            { SCstate:false, SCgrade:'一年级', SCclass:'（5）班'},
            { SCstate:true, SCgrade:'一年级', SCclass:'（6）班'},
            { SCstate:true, SCgrade:'二年级', SCclass:'（1）班'},
            { SCstate:true, SCgrade:'二年级', SCclass:'（2）班'},
            { SCstate:false, SCgrade:'二年级', SCclass:'（3）班'},
            { SCstate:true, SCgrade:'二年级', SCclass:'（4）班'},
            { SCstate:false, SCgrade:'二年级', SCclass:'（5）班'},
            { SCstate:true, SCgrade:'二年级', SCclass:'（6）班'}
        ]
    }
},
mounted(){
        this.setheight(); 
},
methods:{
      setheight:function(){
        let ysWidth = this.$refs.companyStyle.offsetWidth;
        console.log(ysWidth);
        this.ysHeight = "height:" + [(ysWidth-30)/2*9]/16 +"px"; 
    }
},
computed:{
  
}
}
</script>

<style>

</style>
