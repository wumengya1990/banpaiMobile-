<template>
    <div class="manage bgColor fullScreen">
        <leftMenu></leftMenu>
        <bnavs></bnavs>
        <div class="patternRightBoxM">
            <div class="patternRightBox">
                <div class="patternRightBoxN">
                <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </div>
            </div>

            <div class="patternRightBox">
                 <h4>开关机时间</h4>
                 <div class="patternRightBoxN">
                     <ul>
                         <li><el-time-picker  v-model="value3" :picker-options="{ selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker></li>
                         <li><el-time-picker  v-model="value4" :picker-options="{ selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker></li>
                     </ul>
                </div>
            </div>

            <div class="patternRightBox">
                 <h4>开关机时间</h4>
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
        value2: true,
        value3: new Date(2016, 9, 10, 18, 40),
        value4: new Date(2016, 9, 10, 18, 40),
        radio2: 3
    }
}
}
</script>

<style>
.el-radio{ display: block;  padding: 5px 0;}
.el-radio+.el-radio{ margin: 0;}
</style>
