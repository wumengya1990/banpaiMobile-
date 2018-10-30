/* jshint esversion: 6 */
import Vue from 'vue';

import './components.css';

let mobile = new Vue();

// 加载框
Vue.prototype.mobile_loading = function (type,msg,target) {
  if(type == 1){// 全局
    const loading = mobile.$loading({
      lock: true,
      text: msg,
      spinner: 'el-icon-loading',
      customClass:'mobile_loading'
    });
    return loading;
  }else if(type == 2){// 执行元素中加载
    if(target == ''){
      return;
    }
    const loading = mobile.$loading({
      target:target,
      lock: true,
      text: msg,
      spinner: 'el-icon-loading',
      customClass:'mobile_loading'
    });
    return loading;
  }

};
