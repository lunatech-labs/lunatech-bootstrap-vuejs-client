import home from './components/home.vue'
import status from './components/status.vue'

export const routes = [{
    path: '/',
    component: home,
    children: [],
}, {
    path: '/status',
    component: status,
    children: [],
}];