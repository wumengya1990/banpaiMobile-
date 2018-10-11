/* jshint esversion: 6 */
import Vue from 'vue';
import router from './router';
import axios  from 'axios';

// 引入系统相关内容
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 统一引入项目样式
import './page/css/mobilestyle.css';

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
