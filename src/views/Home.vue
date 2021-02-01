<template>
  <div class="home">
    <header class="header">
      <img
        class="header__image"
        src="../assets/images/images/girl.png"
        alt="mask"
      />
      <div class="header__navbar">
        <div class="header__navbar-left">
          <router-link to="/" class="header__logo animation animation__bounce"
            >hunt</router-link
          >
        </div>
        <div class="header__navbar-mobile animation animation__rotate">
          <img
            src="../assets/icons/icons/close.svg"
            alt="close"
            class="header__close close"
          />
        </div>
        <div class="header__navbar-middle">
          <router-link to="/" class="header__link">Get Jobs</router-link>
          <router-link to="/" class="header__link">Post Jobs</router-link>
        </div>
        <div class="header__navbar-right">
          <router-link to="/login" class="header__btn white"
            >Log In</router-link
          >
          <router-link to="/register" class="header__btn active"
            >Sign Up</router-link
          >
        </div>
        <img
          src="../assets/icons/icons/menu.svg"
          class="header__menu menu"
          alt="menu"
        />
      </div>
      <div class="header__content">
        <img
          class="header__image--small"
          src="../assets/images/images/bg.png"
          alt="bg"
        />
        <div class="header__info">
          <h3 class="header__heading-small">
            Get Started
          </h3>
          <h3 class="header__heading-big">
            Find Your Dream Job
          </h3>
          <p class="header__heading-paragraph">
            We will boost your skills and profile, provide you with personalised
            career guidance and match you with the right opportunities, so that
            you can be the Best and the Brightest
          </p>
        </div>
      </div>
    </header>
    <section class="filter">
      <form class="filter__form" @submit.prevent="HandleSearch()">
        <input
          type="search"
          class="filter__search"
          placeholder="Job Title or Keyword"
          v-model="search_query"
        />
        <span
          ><button class="filter__button">
            Search
          </button></span
        >
      </form>
    </section>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase';
import axios from 'axios';

export default {
  name: 'Home',

  setup() {
    const name = ref('');
    const search_query = ref('');
    const joblists = ref([]);

    const HandleSearch = () => {
      if (search_query.value != '') {
        axios
          .get(`https://vuejobs.com/api/jobs?country=${search_query.value}`)
          .then((response) => {
            console.log(response.data);
            search_query.value = '';
          });
      } else {
        alert('enter an input');
      }
    };

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
      HandleSearch,
      search_query,
      joblists,
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  width: 3em;
  display: none;
}
.close {
  display: none;
}
.active {
  background-color: #f261b4;
  color: #fff;
}
.white {
  color: #f261b4;
  background-color: #fff;
}
.header {
  &__image {
    position: absolute;
    right: 0;
    z-index: -1;
    top: -2em;
    width: 50%;
  }
  &__image--small {
    width: 8em;
  }
  &__logo {
    font-size: 1.6em;
    font-weight: 900;
    color: #f261b4;
  }
  &__link {
    padding-left: 2em;
    color: #212121;
  }
  &__btn {
    border-radius: 0.2em;
    font-size: 0.8em;
    padding: 1em 2em;
    margin: 0.8rem;
    cursor: pointer;
  }
  &__navbar {
    padding: 2em 4em;
    display: flex;
    justify-content: space-between;

    &-mobile {
      justify-content: space-between;
      width: 60%;
      z-index: 1;
      display: flex;
      display: none;
    }
  }
  &__info {
    width: 40%;
    margin-left: 4em;
  }
  &__heading-small {
    color: #f261b4;
    text-transform: uppercase;
    padding: 0.2em;
  }
  &__heading-big {
    font-size: 2.8em;
    padding: 0.2em;
  }
  &__heading-paragraph {
    width: 70%;
    line-height: 1.8;
    padding: 0.2em;
  }
}
.filter {
  margin: 10em 2em;

  &__search {
    height: 3em;
    width: 30em;
    color: #707070;
    border: none;
    outline: none;
  }
  &__button {
    height: 3em;
    border: none;
    outline: none;
    width: 5em;
    background-color: #f261b4;
    color: #fff;
  }
}

@media (max-width: 990px) {
  .logo {
    font-size: 2em;
    padding: 0;
  }

  .header {
    &__illust {
      width: 80%;
      z-index: -1;
    }

    &__info {
      text-align: center;
      margin: 10em 0 0 0;
      width: 100%;
    }
    &__heading-paragraph {
      text-align: center;
      margin: 0 auto;
    }
    &__navbar-middle {
      display: none;
    }
    &__navbar-right {
      display: none;
    }

    &__navbar {
      padding: 2em 2em;

      &-mobile {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        position: absolute;
        position: fixed;
        background-color: #fafafa;

        a {
          padding: 0;
          padding: 2em;
          margin: 5em auto 5em auto;
          display: block;
          width: 10em;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .menu {
      display: block;
      padding: 0;
    }
    .close {
      display: block;
      position: absolute;
      top: 2em;
      right: 3em;
      width: 3em;
    }
  }
  .filter {
    &__form {
      width: 80%;
      margin: auto;
    }
    &__search {
      width: 60%;
    }
    &__button {
      width: 38%;
    }
  }
}
</style>
