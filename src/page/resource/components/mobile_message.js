/* jshint esversion: 6 */
import Vue from 'vue';

import './components.css';

let mobile = new Vue();
// 询问框
Vue.prototype.mobile_confirm = function (msg,callback) {
  mobile.$confirm(msg, '提示', {
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
Vue.prototype.mobile_message = function (msg) {
  var message = '<font color="white"><b>'+msg+'</b></font>'
  mobile.$message({
    message: message,
    center:true,
    customClass:'mobile_message',
    dangerouslyUseHTMLString:true
  });
};
// 成功提示
Vue.prototype.mobile_success = function (msg) {
  mobile.$message({
    message: msg,
    type: 'success',
    center:true,
    customClass:'mobile_message'
  });
};
// 警告提示
Vue.prototype.mobile_warn = function (msg) {
  mobile.$message({
    message: msg,
    type: 'warning',
    center:true,
    customClass:'mobile_message'
  });
};
// 错误提示
Vue.prototype.mobile_error = function (msg) {
  mobile.$message({
    message: msg,
    type: 'error',
    center:true,
    customClass:'mobile_message'
  });
};



