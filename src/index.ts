
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import './assets/styles/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './components/app/index';
import bar from './components/bar/index.vue';

Vue.use(VueRouter);

// routing
const routes = [
  { path: '/bar', name: 'bar', component: bar },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(app),
}).$mount('#app');
