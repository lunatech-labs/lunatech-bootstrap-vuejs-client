import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import { routes } from './routeur-config.js';
import VueResource from 'vue-resource';

Vue.use(Router);
Vue.use(VueResource);
const router = new Router({
    routes,
    mode: 'history',
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')