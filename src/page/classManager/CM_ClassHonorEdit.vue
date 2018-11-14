<template>
  <div class="addClassNotice bgColor fullScreen">
    <div class="formList">
      <ul>
        <li>
          <em>通知标题</em>
          <div class="formRightOver">
            <el-input v-model="detail.title" placeholder="请输入内容"></el-input>
          </div>
        </li>
        <li>
          <em>通知内容</em>
          <div class="formRightOver">
            <el-input type="textarea" :autosize="{ minRows:4, maxRows:8}" placeholder="请输入内容"  v-model="detail.content"></el-input>
          </div>
        </li>
        <li>
          <em>发送班级</em>
          <div class="formRightOver">
            <el-checkbox-group v-model="detail.checkList" class="chickBox">
              <p v-for="c in classList">
                <el-checkbox :label="c.className" :key="c.classId"></el-checkbox>
              </p>
            </el-checkbox-group>
          </div>
        </li>
      </ul>
      <div class="bts">
        <p><el-button @click="save" type="primary" style="width:70%;" round>通知发布</el-button></p>
        <p><el-button @click="go_list" type="danger" style="width:70%;" round>取消发布</el-button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CM_ClassNoticeEdit',
  data () {
    return {
      classId:'',
      classList:[],
      detail:{
        id:'',
        flag:'',
        title:'',
        content:'',
        classId:'',
        classList:[],
        checkList:[]
      }
    }
  },
  methods:{
    save:function () {
      if(this.detail.title == ''){
        this.mobile_warn('请填写标题');
        return;
      }
      if(this.detail.content == ''){
        this.mobile_warn('请填写内容');
        return;
      }
      this.check_class();
      if(this.detail.classList.length == 0){
        this.mobile_warn('请选择发送的班级');
        return;
      }

      let url = 'wechat/class/manager/notice/post/notice/save';
      let param = {
        flag:this.detail.flag,
        id:this.detail.id,
        classId:this.detail.classId,
        noticeType:'CLASS',
        title:this.detail.title,
        content:this.detail.content
      };
      this.$ajax.post(url,this.qs.stringify(param)).then((out)=>{
        let data = out.data;
        if(data.code == 'S0000'){

        }else{
          this.common_data(this,data);
        }
      }).catch((error)=>{

      });
    },
    check_class:function(){
      this.detail.classList = new Array();
      this.detail.classId = '';
      for (let i in this.classList){
        let c = this.classList[i];
        for(let j in this.detail.checkList){
          let ch = this.detail.checkList[j];
          if(ch == c.className){
            this.detail.classId = this.detail.classId + (c.classId) + ",";
            this.detail.classList.push(c.classId);
          }
        }
      }
    },
    go_list:function () {
      this.$router.push({name:'CM_ClassManage',params:{show:'notice'}});
    },
    load_class:function () {
      let url = 'wechat/class/manager/notice/load/notice/detail';
      let param = {params:{
        id:this.detail.id
      }};
      this.$ajax.get(url,param).then((out)=>{
        let data = out.data;
        if(data.code == 'S0000'){
          this.detail.flag = data.item.flag;
          if(this.detail.flag == 'EDIT'){
            this.detail.title = data.item.notice.title;
            this.detail.content = data.item.notice.content;
          }
        }else{
          this.common_data(this,data);
        }
      }).catch((error)=>{

      });
    },
    load_detail:function () {
      let url = 'wechat/class/manager/notice/load/notice/detail';
      let param = {params:{
        id:this.detail.id
      }};
      this.$ajax.get(url,param).then((out)=>{
        let data = out.data;
        if(data.code == 'S0000'){
          this.detail.checkList = data.item.checkList;
          this.classList = data.items;
          this.detail.title = data.item.notice.title;
          this.detail.content = data.item.notice.content;
          this.detail.flag = data.item.flag;
        }else{
          this.common_data(this,data);
        }
      }).catch((error)=>{

      });
    }
  },
  mounted:function () {
    this.detail.id = this.$route.params.id;
    this.load_detail();
  }
}
</script>

<style>

</style>
