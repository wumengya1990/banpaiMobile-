<template>
  <div class="messageList bgColor fullScreen">
    <Nav></Nav>
    <Top></Top>
    <div class="messageListM" v-if="notice.show">
      <ul>
        <li v-for="notice in notice.list" @click="go_detail(notice.id)">
          <a href="javascript:void(0)">{{notice.title}}</a>
          <p>{{notice.content}}</p>
          <time>{{notice.time}}</time>
        </li>
      </ul>
    </div>
    <div class="messageListM" v-else>
      暂无数据
    </div>
  </div>
</template>

<script>

  import Nav from './SM_Nav.vue';
  import Top from './SM_SchoolTop.vue';

  export default {
    name: 'SM_SchoolNotice',
    components:{Nav,Top},
    data () {
      return {
        notice:{
          show:true,
          list:[]
        }
      }
    },
    methods:{
      // 加载列表数据
      load_list:function () {
        let url = 'wechat/school/manager/notice/load/list';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.notice.show = data.item.data;
            this.notice.list = data.items;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      // 跳转到详情页面
      go_detail:function (id) {

      }
    },
    mounted:function () {
      this.load_list();
      this.bus.$emit('sm_nav',3,false);
    }
  }
</script>

<style>

</style>
