import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from "./store/store"
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Carousel3d from 'vue-carousel-3d';


import routes from './routes'

Vue.use(VueRouter);

Vue.use(Vuesax, {
})
Vue.use(Carousel3d);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

localStorage.setItem('counter',0)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
  
}).$mount('#app')
