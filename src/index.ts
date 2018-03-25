
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import './assets/styles/main.scss';

import Vue    from 'vue';
import app    from './components/app/index';
import router from './router';
import store  from './store';

new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app');
