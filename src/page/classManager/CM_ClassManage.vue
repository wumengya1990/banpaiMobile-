<template>
  <div class="classManage bgColor fullScreen">
    <div class="classManageTop">
      <span @click="go_notice" :class="top.notice">班级通知</span>
      <span @click="go_mien" :class="top.mien">班级风采</span>
    </div>
    <div class="messageListM" ref="scrollHeight">
      <ul v-if="notice.show">
        <li v-for="(n, index) in notice.list" v-bind:key="index" @click="go_detail(n.id)">
          <a href="javascript:void(0);" @click="notice_detail(n)">{{n.title}}</a>
          <p>{{n.content}}</p>
          <time>{{n.time}}</time>
        </li>
      </ul>
      <ul v-if="mien.show">
        <li v-for="(m, index) in mien.list" v-bind:key="index" @click="go_detail(m.id)">
          <a href="javascript:void(0);" @click="mien_detail(m)">{{m.mienName}}</a>
          <p>{{m.mienRemark}}</p>
          <time>{{m.pubTime}}</time>
        </li>
      </ul>
    </div>
    <div class="rightSuspension">
      <a @click="go_add" href="javascript:void(0);">
        <i class="icon iconfont icon-xiugaishuxing"></i>
      </a>
      <a class="backTop" @click="go_top" href="javascript:void(0);">
        <i class="icon iconfont icon-huojian"></i>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CM_ClassManage',
    data () {
      return {
        classId:'',
        classShow:false,
        top:{
          notice:'on',
          mien:''
        },
        notice:{
          show:true,
          list:[]
        },
        mien:{
          show:false,
          list:[]
        }
      }
    },
    watch:{
      classId:function (n) {
        this.load_data();
      }
    },
    methods:{
      load_notice:function(){
        console.log("load_notice"+this.classId);
        let url = 'wechat/class/manager/notice/load/notice/list';
        let param = {params:{
          classId:this.classId
        }};
        this.$ajax.get(url,param).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.notice.list = data.item.list;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      load_mien:function(){
        let url = 'wechat/class/manager/mien/load/mien/list';
        let param = {params:{
            classId:this.classId
          }};
        this.$ajax.get(url,param).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.mien.list = data.item.list;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      go_add:function(){
        if(this.notice.show){
          this.$router.push({name:'CM_ClassNoticeEdit'});
        }else if(this.mien.show){
          this.$router.push({name:'CM_ClassMienEdit'});
        }
      },
      go_detail:function(id){
        if(this.notice.show){
          this.$router.push({name:'CM_ClassNoticeEdit',params:{id:id}});
        }else if(this.mien.show){
          this.$router.push({name:'CM_ClassMienEdit',params:{id:id}});
        }
      },
      go_top:function(){
        alert("返回顶部");
        let scrollBox = document.getElementsByClassName("messageListM")[0];
        scrollBox.scrollTop = 0;
      },
      go_notice:function () {
        this.top.notice = 'on';
        this.notice.show = true;

        this.top.mien = '';
        this.mien.show = false;
        this.load_notice();
      },
      go_mien:function () {
        this.top.notice = '';
        this.notice.show = false;

        this.top.mien = 'on';
        this.mien.show = true;

        this.load_mien();
      },
      load_data:function () {
        if(this.$route.params.show == 'notice'){
          this.go_notice();
        }else if(this.$route.params.show == 'mien'){
          this.go_mien();
        }else{
          this.go_notice();
        }
      }
    },
    mounted:function () {
      this.classId = this.$route.params.classId;
      this.load_data();
      // 注册事件
      this.bus.$on('manage_class',(classId)=>{
        this.classId = classId;
      });
    }
  }
</script>

<style>

</style>
