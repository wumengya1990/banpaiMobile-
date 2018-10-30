/* jshint esversion: 6 */
import Vue from 'vue';

import './components.css';
let common = new Vue();

// 获取数据失败处理
Vue.prototype.common_data = function (vm,data) {
  console.log(data);
  if(data.code == 'NO_LOGIN'){
    console.log(common);
    vm.$router.push({name:'Login'});
  }

};
