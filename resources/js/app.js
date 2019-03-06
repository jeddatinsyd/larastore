require('./bootstrap');
window.Vue = require('vue');
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import * as VueGoogleMaps from 'vue2-google-maps';
window.Bus=new Vue;

Vue.use(GoogleMaps,{
    load:{
               key: 'AIzaSyCa7qfi1d-fyqLHZNI5EfdCFtxN3T5I_j0';
               libraries:'places',
    }
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('shop-layout' , require('./components/ShopLayout.vue'));
Vue.component('shop-map', require('./components/ShopMap.vue'));
Vue.component('place-search', require('./components/PlaceSearch.vue'));
Vue.component('results', require('./components/Results.vue'));

const app = new Vue({
    el: '#app'
});