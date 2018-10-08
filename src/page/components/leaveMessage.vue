<template>
    <div class="leaveMessage bgColor">
        <div class="tabBox">
            <span>张洋<em>99+</em></span>
            <span class="on">王帅</span>
            <span>张洋</span>
            <div class="clear"></div>
        </div>

        <div class="interBox">
           <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
           <div class="interBoxBts"><el-button size="mini" type="primary">发表</el-button></div>
        </div>

        <ul class="leaveMessageList">
            <li>
                <div class="leaveHead">
                    <div class="leaveHeadImg"><img src="../images/userimg.jpg"></div>
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
                            <div class="userImg"><img src="../images/userimg.jpg"></div>
                            <div class="backMessage"><p>好的</p></div>
                            <div class="clear"></div>
                        </div>
                        <div class="leaveBackBox myMess">
                            <div class="userImg"><img src="../images/userimg.jpg"></div>
                            <div class="backMessage"><p>好的好的好的好的好的好的好的好的好的好的好的好的好的</p></div>
                            <div class="clear"></div>
                        </div>
                        <div class="leaveBackBox">
                            <div class="userImg"><img src="../images/userimg.jpg"></div>
                            <div class="backMessage"><p>好的</p></div>
                            <div class="clear"></div>
                        </div>
                </div>
            </li>
            <li>
                <div class="leaveHead">
                    <div class="leaveHeadImg"><img src="../images/userimg.jpg"></div>
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
                            <div class="userImg"><img src="../images/userimg.jpg"></div>
                            <div class="backMessage"><p>好的</p></div>
                            <div class="clear"></div>
                        </div>
                        <div class="leaveBackBox myMess">
                            <div class="userImg"><img src="../images/userimg.jpg"></div>
                            <div class="backMessage"><p>好的好的好的好的好的好的好的好的好的好的好的好的好的</p></div>
                            <div class="clear"></div>
                        </div>
                        <div class="leaveBackBox">
                            <div class="userImg"><img src="../images/userimg.jpg"></div>
                            <div class="backMessage"><p>好的</p></div>
                            <div class="clear"></div>
                        </div>
                </div>
            </li>
        </ul>

        <bnavs></bnavs>
    </div>
</template>

<script>
import bnavs from './nav.vue'
export default {
name:'leaveMessage',
components:{bnavs}
}
</script>

<style>
.item { margin-top: 10px; margin-right: 40px;}
</style>
