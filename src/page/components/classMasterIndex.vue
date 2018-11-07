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
},
methods:{
    jinriData:function(){
        
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('tongji1'));

       myChart.setOption({
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center',
                    show:false
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
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

    }
}
}
</script>

<style>

</style>
