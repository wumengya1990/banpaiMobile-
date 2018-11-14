<template>
  <div class="leaveMessage bgColor">
    <div class="tabBox">
      <span v-for="v in student.list" :class="v.css" @click="select_student(v.studentId)">
        {{v.studentName}}
        <em v-show="false"></em>
      </span>
      <div class="clear"></div>
    </div>
    <div class="interBox">
      <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="message.remark"></el-input>
      <div class="interBoxBts">
        <el-button size="mini" type="primary" @click="send_message">发表</el-button>
      </div>
    </div>
    <ul class="leaveMessageList">
      <li v-for="v in message.list">
        <div class="leaveHead">
          <div class="leaveHeadImg"><img :src="v.guardianHead"></div>
          <h4>{{v.guardianName}}</h4>
          <time>{{v.time}}</time>
          <span class="state" :class="v.css">{{v.isRead}}</span>
          <div class="clear"></div>
        </div>
        <div class="leaveContent">
          <p>{{v.remark}}</p>
        </div>
        <div class="leaveBack" v-show="v.isReply == 'Y'">
          <div class="leaveBackBox myMess">
            <div class="userImg"><img :src="v.studentHead"></div>
            <div class="backMessage"><p>{{v.remark1}}</p></div>
            <div class="clear"></div>
          </div>
        </div>
      </li>
    </ul>
    <ul class="leaveMessageList" v-show="false">
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
        let url = 'wechat/guardian/message/load/student/list';
        this.$ajax.get(url).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.student.list = data.items;
            this.student.id = data.item.id;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      // 加载留言列表
      load_message_list:function () {
        let url = 'wechat/guardian/message/load/message/list';
        let param = {params:{
          studentId:this.student.id
        }};
        this.$ajax.get(url,param).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.message.list = data.items;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      // 发送留言
      send_message:function () {
        if(this.message.remark == ''){
          this.mobile_error('请填写内容');
          return;
        }
        let url = 'wechat/guardian/message/send/message';
        let param = {
          studentId:this.student.id,
          remark:this.message.remark
        };
        this.$ajax.post(url,this.qs.stringify(param)).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.mobile_success('提交成功');
            this.load_message_list();
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
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
