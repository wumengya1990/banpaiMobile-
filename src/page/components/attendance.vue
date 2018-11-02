<template>
    <div class="attendance bgColor fullScreen">
        <bnavs></bnavs>
        <div class="attendanceTop">
            <span class="on">所有</span>
            <span>未到</span>
            <span>迟到</span>
            <span>请假</span>
        </div>

        <div class="attendanceList">
            <h4><strong>30</strong><em>/</em>36</h4>
            <div class="attendanceListM">
                <dl v-for="peo in attendanceList" :key="peo.Id">
                    <dt><img src="../resource/images/userimg.jpg"></dt>
                    <dd>
                        <span>{{peo.peoName}}</span>
                        <span v-if="peo.peoState == true" class="state have">已签到</span>
                        <span v-else class="state">请假</span>
                    </dd>
                </dl>
            </div>
        </div>

    </div>
</template>

<script>
import bnavs from "./navMaster.vue"
export default {
name:"attendance",
components:{bnavs},
data(){
    return{
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
methods:{
    
}
}
</script>

<style>

</style>
