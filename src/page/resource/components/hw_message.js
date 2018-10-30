/* jshint esversion: 6 */
import Vue from 'vue';

import './components.css';

let huanet = new Vue();
// 询问框
Vue.prototype.hw_confirm = function (msg,callback) {
  huanet.$confirm(msg, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    center: true
  }).then(() => {
    callback();
  }).catch(() => {

  });
};
// 消息提示
Vue.prototype.hw_message = function (msg) {
  var message = '<font color="white"><b>'+msg+'</b></font>'
  huanet.$message({
    message: message,
    center:true,
    customClass:'hw_message',
    dangerouslyUseHTMLString:true
  });
};
// 成功提示
Vue.prototype.hw_success = function (msg) {
  huanet.$message({
    message: msg,
    type: 'success',
    center:true,
    customClass:'hw_message'
  });
};
// 警告提示
Vue.prototype.hw_warn = function (msg) {
  huanet.$message({
    message: msg,
    type: 'warning',
    center:true,
    customClass:'hw_message'
  });
};
// 错误提示
Vue.prototype.hw_error = function (msg) {
  huanet.$message({
    message: msg,
    type: 'error',
    center:true,
    customClass:'hw_message'
  });
};
// 请求结果处理
Vue.prototype.hw_result = function (data,show,vm,callback) {
  if(data.code == 'S0000'){
    callback();
  }else if(show){
    if(data.code == 'E0001'){// 登录失败或未登录
      vm.hw_error("您未登录，请先登录");
      setTimeout(()=>{
        vm.$router.push({name:'Login'});
      },2000);

    }else{
      huanet.$message({
        message: data.msg,
        type: 'error',
        center:true,
        customClass:'hw_message'
      });
    }

  }

};



