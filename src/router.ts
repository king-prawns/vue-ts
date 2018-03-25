import Vue       from 'vue';
import VueRouter from 'vue-router';

import bar from './components/bar/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/bar', name: 'bar', component: bar },
];

const router = new VueRouter({
  routes,
});

export default router;
