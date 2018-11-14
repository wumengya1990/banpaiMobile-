<template>
    <div class="classMasterIndex bgColor fullScreen">
        <bnavs></bnavs>

        <div class="classMasterIndexScroll fullScreen ovHide scrollTB">
        <div class="tubiao">
            <el-carousel :interval="6000" trigger="click" height="200px">
            <el-carousel-item v-for="item in 1" :key="item">
                <div class="tongji">
                    <h4><span>本班班牌使用情况统计</span><span>本月</span></h4>
                    <ul>
                        <li><span><i class="icon iconfont icon-xinxifabu"></i>信息发布</span><span><b>8</b></span></li>
                        <li><span><i class="icon iconfont icon-xinxi"></i>家长留言</span><span><b>6</b></span></li>
                    </ul>
                </div>
            </el-carousel-item>
            </el-carousel>

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
    </div>
</template>

<script>
// import VueTouch from 'vue-touch'
import bnavs from "./navMaster.vue"
export default {
name:"classMasterIndex",
components:{bnavs},
data(){
    return{
       bannerMessageList:[
           {sebtMessage:8,leaveMessage:5},
           {sebtMessage:18,leaveMessage:14},
           {sebtMessage:8,leaveMessage:5}
       ]
    }
},
mounted(){
    this.jinriData();
    this.zhouXinxi();
    this.TouchSlide();
},
methods:{
    jinriData:function(){
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('tongji1'));
       myChart.setOption({
                
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color:['#009afc','#22977c','#5b50ce','#ee4671','#f2b847'],
                legend: {
                    orient: 'horizontal',
                    bottom: '10px',
                    data: ['正常','迟到','请假','早退','旷课']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '40%'],
                        data:[
                            {value:50, name:'正常'},
                            {value:8, name:'迟到'},
                            {value:1, name:'请假'},
                            {value:12, name:'早退'},
                            {value:6, name:'旷课'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });

    },
    zhouXinxi:function(){
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('tongji2'));

       myChart.setOption({
            
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            color:['#0096ff','#009842'],
            legend: {
                orient: 'horizontal',
                bottom: '10px',
                data: ['上周', '本周']
            },
            grid: {
                right: '5%',
                left:'5%',
                top:'10%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            xAxis: {
                type: 'category',
                data: ['周一','周二','周三','周四','周五']
            },
            series: [
                {
                    name: '上周',
                    type: 'bar',
                    data: [50, 60, 73, 52, 57]
                },
                {
                    name: '本周',
                    type: 'bar',
                    data: [42, 54, 68, 46, 51]
                }
            ]
        });

    }
}
}
</script>



<style>
.el-carousel__item h3 {
    color: #333333;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #ffffff;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #ffffff;
  }
</style>
