<template>
  <div class="addMien bgColor fullScreen">
    <div class="formList">
      <ul>
        <li>
          <em>风采名称</em>
          <div class="formRightOver">
            <el-input v-model="detail.mienName" placeholder="请输入内容"></el-input>
          </div>
        </li>
        <li>
          <em>风采描述</em>
          <div class="formRightOver">
            <el-input v-model="detail.mienRemark" type="textarea" :autosize="{ minRows:4, maxRows:8}" placeholder="请输入内容"></el-input>
          </div>
        </li>
        <li>
          <em>发送班级</em>
          <div class="formRightOver">
            <el-radio-group v-model="detail.classId">
              <p v-for="c in detail.classList"><el-radio :label="c.classId">{{c.className}}</el-radio></p>
            </el-radio-group>
          </div>
        </li>
        <li>
          <em>风采图片（请上传横版图片）</em>
          <div class="formRightOver">
            <el-upload list-type="picture-card"
              :action="image.action"
              :on-preview="image_preview"
              :file-list="image.list"
              :on-remove="image_remove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </div>
        </li>
      </ul>
      <div class="bts">
        <p><el-button @click="save" type="primary" style="width:70%;" round>风采发布</el-button></p>
        <p><el-button @click="go_list" type="danger" style="width:70%;" round>取消发布</el-button></p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CM_ClassMienEdit',
  data () {
    return {
      detail:{
        id:'',
        flag:'',
        mienName:'',
        mienRemark:'',
        classId:'',
        classList:[]
      },
      image:{
        action:'',
        list:[]
      },
      input:'',
      textarea3: '',
      checkList:["六年级（1）班级"],
      fileListSC:[
        {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food.jpeg',url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods:{
    image_preview:function(){

    },
    image_remove:function(){

    },
    save:function () {

    },
    go_list:function () {
      this.$router.push({name:'CM_ClassManage',params:{show:'mien'}});
    },
    load_detail:function () {
      let url = 'wechat/class/manager/mien/load/mien/detail';
      let param = {params:{
        id:this.detail.id
      }};
      this.$ajax.get(url,param).then((out)=>{
        let data = out.data;
        if(data.code == 'S0000'){
          this.detail.checkList = data.item.checkList;
          this.detail.classList = data.items;
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
