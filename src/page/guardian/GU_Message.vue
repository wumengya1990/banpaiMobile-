<template>
  <div class="leaveMessage bgColor">
    <div class="tabBox">
      <span>张洋<em>99+</em></span>
      <span class="on">王帅</span>
      <span>张洋</span>
      <div class="clear"></div>
    </div>
    <div class="interBox">
      <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="message.remark"></el-input>
      <div class="interBoxBts"><el-button size="mini" type="primary">发表</el-button></div>
    </div>
    <ul class="leaveMessageList">
      <li>
        <div class="leaveHead">
          <div class="leaveHeadImg"><img src="../resource/images/userimg.jpg"></div>
          <h4>林杨</h4>
          <time>2018-09-31&nbsp&nbsp16:35</time>
          <span class="state">未读</span>
          <div class="clear"></div>
        </div>
        <div class="leaveContent">
          <p>晚上放学先在学校写完作业再回家</p>
        </div>
        <div class="leaveBack">
          <div class="leaveBackBox myMess">
            <div class="userImg"><img src="../resource/images/userimg.jpg"></div>
            <div class="backMessage"><p>好的</p></div>
            <div class="clear"></div>
          </div>
          <div class="leaveBackBox myMess">
            <div class="userImg"><img src="../resource/images/userimg.jpg"></div>
            <div class="backMessage"><p>好的好的好的好的好的好的好的好的好的好的好的好的好的</p></div>
            <div class="clear"></div>
          </div>
          <div class="leaveBackBox">
            <div class="userImg"><img src="../resource/images/userimg.jpg"></div>
            <div class="backMessage"><p>好的</p></div>
            <div class="clear"></div>
          </div>
        </div>
      </li>
      <li>
        <div class="leaveHead">
          <div class="leaveHeadImg"><img src="../resource/images/userimg.jpg"></div>
          <h4>林杨</h4>
          <time>2018-09-31&nbsp&nbsp16:35</time>
          <span class="state1">未读</span>
          <div class="clear"></div>
        </div>
        <div class="leaveContent">
          <p>晚上放学先在学校写完作业再回家晚上放学先在学校写完作业再回家晚上放学先在学校写完作业再回家晚上放学先在学校写完作业再回家晚上放学先在学校写完作业再回家</p>
        </div>
        <div class="leaveBack">
          <div class="leaveBackBox myMess">
            <div class="userImg"><img src="../resource/images/userimg.jpg"></div>
            <div class="backMessage"><p>好的</p></div>
            <div class="clear"></div>
          </div>
          <div class="leaveBackBox myMess">
            <div class="userImg"><img src="../resource/images/userimg.jpg"></div>
            <div class="backMessage"><p>好的好的好的好的好的好的好的好的好的好的好的好的好的</p></div>
            <div class="clear"></div>
          </div>
          <div class="leaveBackBox">
            <div class="userImg"><img src="../resource/images/userimg.jpg"></div>
            <div class="backMessage"><p>好的</p></div>
            <div class="clear"></div>
          </div>
        </div>
      </li>
    </ul>

    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from './GU_Nav.vue';
  export default {
    name: 'GU_Message',
    components:{Nav},
    data () {
      return {
        student:{
          id:'',
          list:[]
        },
        message:{
          remark:'',
          list:[]
        }
      }
    },
    watch:{
      'student.id':function (n,o) {
        if(n != o){
          this.load_message_list();
        }
      }
    },
    methods:{
      // 加载学生列表
      load_student_list:function () {

      },
      // 加载留言列表
      load_message_list:function () {

      },
      // 发送留言
      send_message:function () {

      },
      // 选择学生
      select_student:function (studentId) {

      }
    },
    mounted:function () {
      this.load_student_list();
    }
  }
</script>

<style>

</style>
