require('./bootstrap');
window.Vue = require('vue');
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import * as VueGoogleMaps from 'vue2-google-maps';
window.Bus=new Vue;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('shop-layout' , require('./components/ShopLayout.vue'));
Vue.component('shop-map', require('./components/ShopMap.vue'));
Vue.component('place-search', require('./components/PlaceSearch.vue'));
Vue.component('results', require('./components/Results.vue'));

const app = new Vue({
    el: '#app'
});