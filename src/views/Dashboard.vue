<template>
  <div>
    <header class="header">
      <div class="header__navbar">
        <router-link to="/" class="header__logo animation animation__bounce"
          >hunt</router-link
        >
        <button class="header__btn white" @click="Logout">Logout</button>
      </div>
      <h3 class="header__note">Welcome, {{ name }}</h3>
    </header>
    <section class="jobs">
      <h1 class="jobs__heading">Latest Jobs</h1>
      <div class="jobs__con">
        <div class="jobs__child" v-for="job in jobs" :key="job.id">
          <p class="jobs__title">{{ job.title }}</p>
          <div class="jobs__details">
            <p class="jobs__location">{{ job.location }}</p>
            <p class="jobs__time">{{ job.published_at.for_humans }}</p>
          </div>

          <div class="jobs__company">
            <img
              :src="job.company.avatar"
              :alt="[job.avatar]"
              class="jobs__icon"
            />
            <p class="jobs__name">{{ job.company.name }}</p>
          </div>
          <router-link to="/login">
            <button class="jobs__apply">Apply Now</button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase';
import getJobs from '../composables/getJobs';

export default {
  name: 'Home',

  setup() {
    const name = ref('');
    const user = firebase.auth().currentUser;
    const search_query = ref('');
    const { jobs, error, load } = getJobs();

    load();

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log('signed out'))
        .catch((err) => alert(err.message));
    };

    return {
      name,
      user,
      Logout,
      search_query,
      jobs,
      error,
    };
  },
};
</script>

<style lang="scss" scoped>
.white {
  background-color: #f261b4;
  color: #fff;
}
.header {
  &__logo {
    font-size: 1.6em;
    font-weight: 900;
    color: #f261b4;
  }
  &__note {
    margin: 3em 2em;
    font-size: 1.3em;
    color: #16c484;
  }
  &__btn {
    border-radius: 0.2em;
    font-size: 0.8em;
    padding: 1em 2em;
    margin: 0.8rem;
    cursor: pointer;
    outline: none;
    border: none;
  }
  &__navbar {
    display: flex;
    padding: 2em;
    justify-content: space-between;
  }
  &__heading-big {
    font-size: 2.8em;
    padding: 0.2em;
  }
}

.jobs {
  &__heading {
    font-size: 2em;
    margin-left: 2em;
  }

  &__con {
    max-width: 1200px;
    margin: 2em auto;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
    -moz-column-gap: 40px;
    column-gap: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 60px;
  }
  &__child {
    position: relative;
    padding: 1em;
    width: 100%;
    height: 20em;
    grid-row-end: span 4;
    background-color: #fff;
    box-shadow: 0px 0px 106px -59px rgba(173, 171, 173, 1);
  }
  &__title {
    font-weight: bold;
    line-height: 1.8;
    margin: 1em 0;
    background-color: transparent;
  }
  &__details {
    position: absolute;
    top: 40%;
    left: 1em;
  }
  &__location {
    color: #707070;
  }
  &__time {
    font-size: 0.8em;
    color: #f261b4;
    font-weight: bold;
  }
  &__company {
    position: absolute;
    top: 60%;
  }

  &__icon {
    width: 2em;
  }
  &__apply {
    position: absolute;
    bottom: 2em;
    margin: 0 auto;
    display: block;
    width: 90%;
    height: 3em;
    border: none;
    color: white;
    background-color: #16c484;
    cursor: pointer;
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
  }

  .jobs {
    font-size: 12px;
    &__heading {
      font-size: 2.8em;
      margin: 2em 0;
      text-align: center;
    }
    &__con {
      grid-row-gap: 20px;
    }
    &__child {
      width: 80%;
      height: 23em;
      margin: 0 auto;
    }
    &__details {
      top: 35%;
    }
  }
  .category {
    &__heading--big {
      font-size: 2.8em;
      margin: 0;
      text-align: center;
    }
    &__con {
      grid-row-gap: 1 0px;
    }
    &__child {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
