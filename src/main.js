import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDYE1Zd22s8PaJzYOr8176fxumFhpKtKV0",
  authDomain: "suspension-application.firebaseapp.com",
  projectId: "suspension-application",
  storageBucket: "suspension-application.appspot.com",
  messagingSenderId: "633314525409",
  appId: "1:633314525409:web:0954498809473ef77a77a0",
  measurementId: "G-T2872PG5T9",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
