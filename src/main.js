import Vue from 'vue'
import {
  Button,
  Select
} from "element-ui";
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(Button)
Vue.use(Select)
// Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')