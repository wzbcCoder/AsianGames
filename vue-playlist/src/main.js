// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import  {routes}  from './routes.js'
import axios from 'axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color='#'+Math.random().toString(16).slice(2,8);
  }
})

Vue.filter("snippet",function(value) {
  return value.slice(0,100)+".....";
})

axios.defaults.baseURL = "http://111.231.255.225:3000/"

//配置Vue原型（在任何组件中都可以正常使用axios）

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(axios)
Vue.prototype.$http = axios

const router = new VueRouter({
  routes,
  mode:"history",
  scrollBehavior (to, from, savedPosition) {
    return{selector:".zhiding"}
    if(savedPosition){
       return savedPosition
     }else{
       return {x:0 ,y:0}
     }
  } 
// hhh
})
  

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
