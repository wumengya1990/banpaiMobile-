/* jshint esversion: 6 */
import Vue from 'vue';
import router from './router';
import axios  from 'axios';

// 引入系统相关内容
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 统一引入项目样式
import './page/resource/css/mobilestyle.css';
// 统一引入独立字体样式
import './page/resource/font/iconfont.css';
// 统一的登录验证
import './page/resource/components/common.js';
// 统一的提示框
import './page/resource/components/mobile_message.js';
// 统一的加载框
import './page/resource/components/mobile_loading.js';
// 注册公共，并放置相关属性
var bus = new Vue();
Vue.prototype.bus = bus;
// 处理ajax请求
axios.defaults.baseURL = process.env.NODE_ENV==='production'?'../../':'/request';
Vue.prototype.$ajax = axios;





import Entry from './Entry.vue';
new Vue({
  el:'#index',
  router,
  components: {Entry},
  template: '<Entry/>'
});
