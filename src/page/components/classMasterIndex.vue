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
name:"classMasterIndex",
data(){
    return{
       
    }
},
mounted(){
    this.jinriData();
    this.zhouXinxi();
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

</style>
