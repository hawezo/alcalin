import Vue from 'vue';
import App from './App.vue';
import Alcalin from '../../src';

Vue.config.productionTip = false;
Vue.use(Alcalin);

new Vue({
  render: h => h(App),
}).$mount('#app');
