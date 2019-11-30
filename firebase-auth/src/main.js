import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyBUMdAsl8MHNkkdGLpVBZmtzTMoiq5rcN0",
  authDomain: "crud-udemy-vue-7fad2.firebaseapp.com",
  databaseURL: "https://crud-udemy-vue-7fad2.firebaseio.com",
  projectId: "crud-udemy-vue-7fad2",
  storageBucket: "crud-udemy-vue-7fad2.appspot.com",
  messagingSenderId: "242746511363",
  appId: "1:242746511363:web:0379b924e16e52650a3e36",
  measurementId: "G-Q8H5HKDCSC"
  };

   // Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({})
// firebase.analytics();

export default firebaseApp.firestore()
  
Vue.config.productionTip = false
firebase.auth().onAuthStateChanged((user)=>{
  console.log(user);
  if (user) {
    store.dispatch('detectarUsuario',{email: user.email, uid:user.uid})
  }else{
    store.dispatch('detectarUsuario',null)
  }
  new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

})

