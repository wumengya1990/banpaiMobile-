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
// import './page/css/mainNew.css';
// import './page/css/mainNew2.css';
// import './page/css/hwuimobile.css';

// 注册公共，并放置相关属性
var bus = new Vue();
Vue.prototype.bus = bus;
Vue.prototype.devId = process.env.NODE_ENV==='production'?window.jsobj.getDevId():'80f7ad3254f5faaf';

Vue.prototype.cardId = '';
Vue.prototype.userId = '';
Vue.prototype.swipeType = '';
// 处理ajax请求
axios.defaults.baseURL = process.env.NODE_ENV==='production'?'../../':'/request';
Vue.prototype.$ajax = axios;

window.wvFun = function (code,msg) {
  switch(code) {
    case 'FACE':  // 人脸识别
      Vue.prototype.swipeType = 'face';
      var routerName = router.history.current.name;
      if(routerName == 'C1_Sign'){// 签到页面

        bus.$emit('load_sign',msg);
      }else if(routerName == 'C1_Login'){// 登录页面
        Vue.prototype.userId = msg;
        // 进入app选择页面
        bus.$emit('load_user');
        router.push({name:'C1_App',query:{r:new Date()*1}});
      }
      break;
    case 'SWIPEUSER': // 刷卡，传值用户ID
      Vue.prototype.swipeType = 'card';
      var routerName = router.history.current.name;
      if(routerName == 'C1_Sign'){// 签到页面
        bus.$emit('load_sign',msg);
      }else{
        Vue.prototype.userId = msg;
        // 进入app选择页面
        bus.$emit('load_user');
        router.push({name:'C1_App',query:{r:new Date()*1}});
      }

      break;
    case 'SWIPECARD': // 刷卡，传值卡号
      Vue.prototype.cardId = msg;
      break;
    case 'RESET': // 重置后回首页
      bus.$emit('navHome');
      break;
    case 'GOHOME': // 回首页
      bus.$emit('navHome');
      break;
    case 'GOSTAND': // 超时回待机页
      bus.$emit('navStand');
      break;
    case 'REFRESH': // 刷新

      break;
    case 'MESSAGE': // 消息
      bus.$emit('reciveMsg');
      break;
  }

};






import Entry from './Entry.vue';
new Vue({
  el:'#index',
  router,
  components: {Entry},
  template: '<Entry/>'
});
