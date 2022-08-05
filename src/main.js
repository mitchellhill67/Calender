import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBszKUm1HncUdb92BLakklbEN21mfFwGVw",

  authDomain: "calender-e19ae.firebaseapp.com",

  projectId: "calender-e19ae",

  storageBucket: "calender-e19ae.appspot.com",

  messagingSenderId: "784005072211",

  appId: "1:784005072211:web:8f6b72289d4eb9c1390da6"

})
export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
