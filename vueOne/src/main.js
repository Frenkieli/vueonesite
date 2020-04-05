// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
axios.defaults.withCredential = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if(to.meta.requiresAuth) {
    console.log('這裡需要驗證');
    const api = process.env.APIPATH + '/api/user/check';
    const vm = this;
    axios.post(api, vm.user).then(function(res){
      console.log(res.data);
      if(res.data.success) {
        // vm.$router.push('/');
        next();
      }else{
        next({
          path: '/login'
        });
      }
    })
  }else{
    next();
  }
})