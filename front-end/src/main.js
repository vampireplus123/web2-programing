import 'semantic-ui-css/semantic.min.css';  // Import Semantic UI CSS
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
