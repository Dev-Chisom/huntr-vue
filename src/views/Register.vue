<template>
  <div class="register">
    <div class="register__side">
      <div class="register__side-con">
        <img
          src="../assets/images/images/background.jpg"
          alt="background"
          class="register__side-img"
        />
      </div>
    </div>
    <div class="register__con">
      <div class="register__header">
        <router-link to="/" class="register__logo logo">hunt</router-link>
        <h3 class="register__heading">Need a job? register</h3>
      </div>
      <form class="register__form" @submit.prevent="Register">
        <!-- <input
          type="text"
          required="required"
          placeholder="Your Name"
          v-model="name"
          class="register__name"
        /> -->
        <input
          type="text"
          required="required"
          placeholder="Email"
          v-model="email"
          class="register__email"
        />
        <input
          type="password"
          required="required"
          placeholder="Password"
          v-model="password"
          class="register__email"
        />
        <input
          type="submit"
          value="Register"
          required
          class="register__submit"
        />
      </form>
      <p class="register__text">
        Have an account? <router-link to="/login">Log In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => console.log(user))
        .catch((err) => console.log(err.message));
    };
    return {
      Register,
      email,
      name,
      password,
    };
  },
};
</script>
<style lang="scss" scoped>
.register {
  display: flex;
  align-items: center;

  &__side {
    width: 50%;
    &-con {
      position: relative;
    }
    &-con::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.94)
      );
      top: 0;
      left: 0;
    }
    &-img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
  &__con {
    position: relative;
    margin: 2em 0;
    width: 50%;
  }
  &__header {
    text-align: center;
  }
  &__logo {
    font-size: 1.6em;
    font-weight: 900;
    color: #f261b4;
  }
  &__heading {
    color: #707070;
    margin: 1em 0;
  }
  &__form input {
    border-radius: 0.5em;
    display: block;
    width: 60%;
    padding-left: 1em;
    height: 4em;
    border: none;
    margin: 2em auto;
    background-color: #f8f8f8;
    outline: none;
    color: #707070;
  }
  &__submit {
    background-color: #212121 !important;
    color: #fafafa !important;
    cursor: pointer;
  }
  &__text {
    text-align: center;
    color: #888;
  }
}

@media (max-width: 990px) {
  .login {
    margin: 5em 0;

    &__side {
      display: none;
    }
    &__con {
      width: 100%;
    }
    &__header {
      font-size: 1em;
    }
    &__logo {
      font-size: 2em;
      padding: 0;
    }
    &__form input {
      width: 80%;
    }
    /* &__text {
      font-size: 1.4em;
    } */
  }
}
</style>
