// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import routes from './routes';
import VueRouter from 'vue-router';
// import Vuex from 'vuex'

// import Axios from 'axios';
// import VueAxios from 'vue-axios';
// import AxiosConfig from './axios.config';

Vue.config.productionTip = false;

Vue.use(VueRouter);
// Vue.use(Vuex)
// Vue.use(VueAxios, Axios.create(AxiosConfig));

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  // el: '#my-app',
  // template: '<App/>',
  // components: { App },
  router,
  render: h => h(App),
}).$mount('#my-app');
