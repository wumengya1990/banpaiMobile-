<template>
    <div class="classMien bgColor fullScreen">
         <div class="rightSuspension">
             <a @click="addNew()"><i class="icon iconfont icon-xiugaishuxing"></i></a>
             <a class="backTop" @click="topBack()" href="javascript:void(0);"><i class="icon iconfont icon-huojian"></i></a>
         </div>
         <bnavs></bnavs>
         <div class="classManageTop">
             <span @click="goToClass()"><i class="icon iconfont icon-xiaoxitongzhi"></i>班级通知</span><span class="on"><i class="icon iconfont icon-hongqi"></i>班级风采</span>
         </div>
         <div class="messageListM" ref="scrollHeight">
            <ul>
                <li v-for="(notice, index) in classNoticeList" v-bind:key="index">
                    <a v-bind:href="notice.CNLink" target="_block">{{notice.CNTitle}}</a>
                    <p>{{notice.CNContent}}</p>
                    <time>{{notice.CNTime}}</time>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import bnavs from "./navMaster.vue"
export default {
    name:"classMien",
    components:{bnavs},
    data(){
        return{
        classNoticeList:[
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"https://www.baidu.com/",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容，我校决定开放学生个人荣誉档案。凡是在校非上课期间活动其他学习，兴趣爱好等奖项的同学可将荣誉证书等获奖内容提交到学校的教务处，我校将为同学统一办理荣誉档案袋。存进学生的综合素质的发展",CNTime:"2018-09-01"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-01"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-02"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"},
                { CNTitle:"学生上报个人荣誉审核方案（动态）",CNLink:"",CNContent:"为发展学生课外学习兴趣，促进学生综合素质发展内容",CNTime:"2018-09-03"}
            ]
        }
    },
    mounted(){
        let scrollBox = document.getElementsByClassName("messageListM")[0];
        scrollBox.addEventListener("scroll",this.boxScroll);
    },
    methods:{
        boxScroll:function(){
            let scrollBox = document.getElementsByClassName("messageListM")[0];
            var scrollTop = scrollBox.scrollTop;
            console.log(scrollTop)
            if(scrollTop>200){
                document.getElementsByClassName("backTop")[0].style.display = "block";
            }else{
                document.getElementsByClassName("backTop")[0].style.display = "none";
            }     
        },
        topBack:function(){
            let scrollBox = document.getElementsByClassName("messageListM")[0];
            scrollBox.scrollTop = 0;
        },
        goToClass:function(){
            this.$router.push({path:"classManage"});
        },
        addNew:function(){
            this.$router.push({path:"addMien"});
        }
        
    },watch:{

    }
}
</script>

<style>

</style>
