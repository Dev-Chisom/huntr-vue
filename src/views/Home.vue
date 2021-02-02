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
    <section class="category">
      <h1 class="heading category__heading--big">Job Category</h1>
      <div class="category__con">
        <div class="category__child">
          <img
            src="../assets/icons/icons/ic_invert_colors_24px.png"
            alt="icon"
            class="category__icon"
          />
          <h4 class="category__heading--small">Design</h4>
          <p class="category__info">150 Job Vacancy</p>
        </div>
        <div class="category__child">
          <img
            src="../assets/icons/icons/ic_phonelink_24px.png"
            alt="icon"
            class="category__icon"
          />
          <h4 class="category__heading--small">Development</h4>
          <p class="category__info">200 Job Vacancy</p>
        </div>
        <div class="category__child">
          <img
            src="../assets/icons/icons/ic_poll_24px.png"
            alt="icon"
            class="category__icon"
          />
          <h4 class="category__heading--small">Project Management</h4>
          <p class="category__info">120 Job Vacancy</p>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="about__img-con">
        <img
          src="../assets/images/images/broke.png"
          alt="broke"
          class="about__img"
        />
      </div>
      <div class="about__con">
        <h1 class="about__heading">We will help you get your dream job easy</h1>
        <p class="about__paragraph">
          We connect tech talents with the right job and have helped a lot of
          people (and counting) gain access to tech jobs across the World. We
          Assess We help techies assess their skill-level or talent based on
          their ability to solve problems, learning speed, and strength of
          character.
        </p>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__child">
        <p class="footer__logo">huntr</p>
        <div class="footer__icons">
          <img
            src="../assets/icons/icons/twitter.png"
            alt="twitter"
            class="footer__icon"
          />
          <img
            src="../assets/icons/icons/medium.svg"
            alt="medium"
            class="footer__icon"
          />
          <img
            src="../assets/icons/icons/facebook.svg"
            alt="facebook"
            class="footer__icon"
          />
          <img
            src="../assets/icons/icons/instagram.svg"
            alt="facebook"
            class="footer__icon"
          />
        </div>
      </div>

      <div class="footer__child">
        <ul class="footer__links">
          <li>Home</li>
          <li>Pricing</li>
          <li>Features</li>
          <li>About Us</li>
        </ul>
      </div>
      <div class="footer__child">
        <ul class="footer__links">
          <li>Career</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div class="footer__child">
        <ul class="footer__links">
          <li>Sign In</li>
          <li>Register</li>
          <li>Know More</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import getJobs from '../composables/getJobs';
import axios from 'axios';

export default {
  name: 'Home',

  setup() {
    const search_query = ref('');
    const { jobs, error, load } = getJobs();

    load();

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

    return {
      HandleSearch,
      search_query,
      jobs,
      error,
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

.category {
  background-color: #fafafa;
  &__heading--big {
    font-size: 2em;
    margin: 5em 0 0 2em;
  }
  &__con {
    max-width: 1000px;
    margin: 2em auto;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
    /* -moz-column-gap: 20px; */
    column-gap: 200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 40px;
  }
  &__child {
    color: #707070;
    text-align: center;
    position: relative;
    padding: 1em;
    width: 100%;
    height: 15em;
    grid-row-end: span 4;
    background-color: #fff;
  }
  &__icon {
    margin: 2em 0;
    height: em;
  }
  &__heading--small {
    margin: 1em 0;
  }
}
.about {
  margin-top: 8em;
  display: flex;
  justify-content: space-evenly;
  &__img-con {
    width: 35%;
    position: relative;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__img-con::after {
    content: '';
    position: absolute;
    right: 1em;
    bottom: 1em;
    width: 100%;
    height: 100%;
    outline: 0.5rem solid #f261b4;
    z-index: -1;
    transition: all 1s linear;
  }
  &__img-con:hover::after {
    right: 0;
    bottom: 0;
  }
  &__con {
    width: 40%;
  }
  &__heading {
    font-size: 2.5em;
    color: #212121;
  }
  &__paragraph {
    color: #707070;
    margin-top: 2em;
    line-height: 1.6em;
  }
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10em;
  padding: 4em;

  &__logo {
    font-size: 1.6em;
    font-weight: 900;
    color: #f261b4;
    text-align: center;
    margin-bottom: 1.5em;
  }
  &__icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__icon {
    width: 2.5em;
    padding-left: 1em;
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
  .about {
    flex-direction: column;

    &__img-con {
      width: 80%;
      display: block;
      margin: auto;
    }

    &__con {
      width: 80%;
      margin: 4em auto;
      text-align: center;
    }
  }
  .footer {
    flex-direction: column;
    &__child {
      margin-top: 0.4em;
    }
    &__icons {
      margin-bottom: 0.5em;
    }
    &__links {
      text-align: center;
    }
    &__links li {
      padding: 0.5em;
    }
  }
}
</style>
