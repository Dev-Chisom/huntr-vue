<template>
  <div class="login">
    <!-- <h1>login</h1>
    <form @submit.prevent="Login">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login" />
      <p>Need an account <router-link to="/register">Register</router-link></p>
    </form> -->
    <div class="login__side">
      <div class="login__side-con">
        <img
          src="../assets/images/images/background.jpg"
          alt="background"
          class="login__side-img"
        />
      </div>
    </div>
    <div class="login__con">
      <div class="login__header">
        <router-link to="/" class="login__logo logo">hunt</router-link>
        <h3 class="login__heading">Need a job? Login</h3>
      </div>
      <form class="login__form" @submit.prevent="Login">
        <input
          type="text"
          required="required"
          placeholder="Email"
          v-model="email"
          class="login__email"
        />
        <input
          type="password"
          required="required"
          placeholder="Password"
          v-model="password"
          class="login__email"
        />
        <input type="submit" value="Sign In" required class="login__submit" />
      </form>
      <p class="login__text">
        Don't have an account? <router-link to="/register">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase';
export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
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
