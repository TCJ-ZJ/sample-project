/**
 * @file entry file
 * @author zhangjie
 */
 
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
    render: h => h(App)
});
