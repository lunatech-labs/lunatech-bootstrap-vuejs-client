import helloWorld from './components/helloWorld.vue'
import welcome from './components/welcome.vue'

export const routes = [{
    path: '/',
    component: helloWorld,
    children: [],
}, {
    path: '/welcome',
    component: welcome,
    children: [],
}];