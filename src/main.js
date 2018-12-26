// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from '@/config/firebase'
import fireStoreConfig from '@/config/firestore'

import i18n from '@/config/i18n'
import store from '@/store'

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
db.settings(fireStoreConfig)

require('@/config/vuetify')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('users').doc(user.uid).onSnapshot(ss => {
          store.commit('setUser', user)
          if (ss.exists) {
            store.commit('setRole', ss.data().role)
          }
        })
      }
      store.commit('setLoaded', true)
    })
  },
  template: '<App/>'
})
