import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css'
import './assets/common.css'
import './assets/icon/iconfont.css'

import VCharts from 'v-charts'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'v-charts/lib/style.css';

import VueBus from 'vue-bus';
import my from './components/common/index';
import ViewImg from './components/viewImg/viewImg'

import common from './mixin/common'

import http from './config/http'
import reg from './config/reg'

import store from  './vuex/store'
Vue.use(common);
Vue.use(ElementUI);
Vue.use(VueBus);
Vue.use(my);
Vue.use(ViewImg);
Vue.use(VCharts)
require('./config/enum');


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
