// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueClipboards from 'vue-clipboards';
import { InfiniteScroll } from 'mint-ui';

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueClipboards);
Vue.use(InfiniteScroll);

Vue.prototype.baseUrl = "https://gxke88.com/uploads/"
Vue.prototype.judgmentShopNum = /^[0-9]{17,19}$/;		//订单号正则
Vue.prototype.judgmentCode = /^G[0-9]{1,10}$/;			//师父代号正则
Vue.prototype.judgmentPhone = /^1[3456789]\d{9}$/;		//手机号正则
Vue.prototype.judgmentName = /^[A-Za-z0-9_]{4,16}$/;	//用户名正则。  
Vue.prototype.judgmentqq = /^\d{5,10}$/;				//qq号正则
Vue.prototype.judgmentWeixin = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;		//微信号正则
Vue.prototype.judgmentPassword = /^(?![\d]+$)(?![a-zA-Z]+$)(?![_]+$)[\da-zA-Z_]{6,16}$/;  //密码正则
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
