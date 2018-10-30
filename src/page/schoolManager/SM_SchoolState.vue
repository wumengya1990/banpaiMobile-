<template>
  <div class="messageList bgColor fullScreen">
    <Nav></Nav>
    <Top></Top>
    <div class="messageListM" v-if="state.show">
      <ul>
        <li v-for="state in state.list" @click="go_detail(state.id)">
          <a href="javascript:void(0)">{{state.title}}</a>
          <p>{{state.content}}</p>
          <time>{{state.time}}</time>
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
    name: 'SM_SchoolState',
    components:{Nav,Top},
    data () {
      return {
        state:{
          show:true,
          list:[]
        }
      }
    },
    methods:{
      // 加载列表数据
      load_list:function () {
        let url = 'wechat/school/manager/school/state/load/list';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.state.show = data.item.data;
            this.state.list = data.items;
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
