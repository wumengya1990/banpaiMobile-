<template>
  <div class="attendance bgColor fullScreen">
    <div class="attendanceTop">
      <span :class="{on:top.select == 1}" @click="select_top(1)">所有</span>
      <span :class="{on:top.select == 2}" @click="select_top(2)">未到</span>
      <span :class="{on:top.select == 3}" @click="select_top(3)">已到</span>
    </div>
    <div class="attendanceList">
      <h4><strong>{{count.yes}}</strong><em>/</em>{{count.all}}</h4>
      <div class="attendanceListM">
        <dl v-for="v in list.show" :key="v.studentId">
          <dt><img :src="v.studentHead"></dt>
          <dd>
            <span>{{v.studentName}}</span>
            <span v-if="v.status == 'Y'" class="state have">已签到</span>
            <span v-else class="state">未签到</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'CM_ClassAttend',
    data () {
      return {
        classId:'',
        top:{
          select:1
        },
        list:{
          show:[],
          all:[],
          no:[],
          yes:[]
        },
        count:{
          yes:0,
          all:0
        },



        attendanceList:[
          {Id:'peo01',peoName:'张洋',peoState:true},
          {Id:'peo02',peoName:'王帅',peoState:false},
          {Id:'peo03',peoName:'欧阳愤青',peoState:true},
          {Id:'peo04',peoName:'王成',peoState:true},
          {Id:'peo05',peoName:'张雪',peoState:false},
          {Id:'peo06',peoName:'李丽',peoState:true},
          {Id:'peo07',peoName:'万成阳',peoState:false},
          {Id:'peo08',peoName:'徐汇',peoState:true},
          {Id:'peo01',peoName:'张洋',peoState:true},
          {Id:'peo02',peoName:'王帅',peoState:false},
          {Id:'peo03',peoName:'欧阳愤青',peoState:true},
          {Id:'peo04',peoName:'王成',peoState:true},
          {Id:'peo05',peoName:'张雪',peoState:false},
          {Id:'peo06',peoName:'李丽',peoState:true},
          {Id:'peo07',peoName:'万成阳',peoState:false},
          {Id:'peo08',peoName:'徐汇',peoState:true},
          {Id:'peo01',peoName:'张洋',peoState:true},
          {Id:'peo02',peoName:'王帅',peoState:false},
          {Id:'peo03',peoName:'欧阳愤青',peoState:true},
          {Id:'peo04',peoName:'王成',peoState:true},
          {Id:'peo05',peoName:'张雪',peoState:false},
          {Id:'peo06',peoName:'李丽',peoState:true},
          {Id:'peo07',peoName:'万成阳',peoState:false},
          {Id:'peo08',peoName:'徐汇',peoState:true},
          {Id:'peo01',peoName:'张洋',peoState:true},
          {Id:'peo02',peoName:'王帅',peoState:false},
          {Id:'peo03',peoName:'欧阳愤青',peoState:true},
          {Id:'peo04',peoName:'王成',peoState:true},
          {Id:'peo05',peoName:'张雪',peoState:false},
          {Id:'peo06',peoName:'李丽',peoState:true},
          {Id:'peo07',peoName:'万成阳',peoState:false},
          {Id:'peo08',peoName:'徐汇',peoState:true}
        ]
      }
    },
    watch:{
      'top.select':function (n,o) {
        if(n == 1){
          this.list.show = this.list.all;
        }else if(n == 2){
          this.list.show = this.list.no;
        }else if(n ==3){
          this.list.show = this.list.yes;
        }
      },
      classId:function (n,o) {
        this.load_list();
      }
    },
    methods:{
      load_list:function () {
        let url = 'wechat/class/manager/attend/load/attend/list';
        let param = {params:{
          classId:this.classId
        }};
        this.$ajax.get(url,param).then((out)=>{
          let data = out.data;
          if(data.code == 'S0000'){
            this.count.yes = data.item.yes;
            this.count.all = data.item.all;
            let list = data.items;
            this.list.all = new Array();
            this.list.yes = new Array();
            this.list.no = new Array();
            if(list != null && list.length > 0){
              for(let i in list){
                let a = list[i];
                if(a.status == 'Y'){
                  this.list.yes.push(a);
                }else if(a.status == 'N'){
                  this.list.no.push(a);
                }
                this.list.all.push(a);
              }
            }
            this.list.show = this.list.all;
          }else{
            this.common_data(this,data);
          }
        }).catch((error)=>{

        });
      },
      select_top:function (type) {
        this.top.select = type;
      }
    },
    mounted:function () {
      this.classId = this.$route.params.classId;
      this.load_list();
      // 注册事件
      this.bus.$on('attend_class',(classId)=>{
        this.classId = classId;
      });
    }
  }
</script>

<style>

</style>
