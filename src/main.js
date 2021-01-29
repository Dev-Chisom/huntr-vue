import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDcY7vQBp2CLJIGzUtC5bQCODRfaNGCEaM",
  authDomain: "login-auth-1275a.firebaseapp.com",
  projectId: "login-auth-1275a",
  storageBucket: "login-auth-1275a.appspot.com",
  messagingSenderId: "549060567312",
  appId: "1:549060567312:web:cf45a116b9f91340540595"
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
