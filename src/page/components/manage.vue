<template>
    <div class="manage bgColor fullScreen">
        <leftMenu></leftMenu>
        <bnavs></bnavs>
        <div class="patternRightBoxM">
            <div class="patternRightBox mgT10">
                <div class="patternRightBoxN">
                    <ul class="switchList">
                        <li><em>是否使用</em><p><el-switch v-model="useDom" active-color="#13ce66" inactive-color="#ff4949"></el-switch></p></li>
                    </ul>
                </div>
            </div>

            <div class="patternRightBox">
                 <h4>开关机时间</h4>
                 <div class="patternRightBoxN">
                     <ul class="timeList">
                         <li><p><i class="el-icon-time"></i><em>{{beginTime}}</em><input v-model="beginTime" type="time"></p></li>
                         <li><p><i class="el-icon-time"></i><em>{{endTime}}</em><input v-model="endTime" type="time"></p></li>
                     </ul>
                </div>
            </div>

            <div class="patternRightBox">
                 <h4>设置星期</h4>
                 <div class="patternRightBoxN">
                     <el-radio-group v-model="radio2">
                        <el-radio :label="3">备选项</el-radio>
                        <el-radio :label="6">备选项</el-radio>
                        <el-radio :label="9">备选项</el-radio>
                    </el-radio-group>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import bnavs from "./navAdmin.vue"
import leftMenu from "./leftMenu.vue"
export default {
name:'manage',
components:{bnavs,leftMenu},
data(){
    return{
        value1: true,
        useDom: false,
        radio2: 3,
        beginTime:'00:00:00',
        endTime:'00:00:00'
    }
}
}
</script>

<style>
.el-radio{ display: block;  padding: 5px 0;}
.el-radio+.el-radio{ margin: 0;}
</style>
