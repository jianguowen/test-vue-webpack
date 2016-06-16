import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch';

import App from './App';
import Base from './views/Base';
import Middle from './views/Middle';
import High from './views/High';
import Cli from './views/Cli';
import Tools from './views/Tools';

Vue.use(VueRouter);
Vue.use(VueTouch);
Vue.config.debug = true;

const router = new VueRouter({
  linkActiveClass: 'active',
});
const pqc = Vue.extend(App);

router.map({
  '/base': {
    component: Base,
  },
  '/middle': {
    component: Middle,
  },
  '/high': {
    component: High,
  },
  '/cli': {
    component: Cli,
  },
  '/tools': {
    component: Tools,
  },
});

router.redirect({
  '*': '/base',
});

router.start(pqc, '.app');
