<template>
  <div class="home">
    <header>
      <img
        class="header__image"
        src="../assets/images/images/girl.png"
        alt="mask"
      />
      <div class="header__navbar">
        <div class="header__navbar-left">
          <router-link to="/" class="animation animation__bounce"
            >huntr</router-link
          >
        </div>
        <div class="header__navbar-mobile animation animation__rotate">
          <img
            src="../assets/icons/icons/close.svg"
            alt="close"
            class="header__close close"
          />
        </div>
      </div>
      <div class="header__content"></div>
    </header>
    <!-- <h1>Welcome, {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br />
    <button @click="Logout">Logout</button> -->
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase';

export default {
  name: 'Home',

  setup() {
    const name = ref('');

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });
    const Logout = () => {
      // console.log('clicked');
      firebase
        .auth()
        .signOut()
        .then(() => console.log('signed out'))
        .catch((err) => alert(err.message));
    };
    return {
      name,
      Logout,
    };
  },
};
</script>
