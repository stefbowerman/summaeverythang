<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="home hide-on-sm">SUMMAEVERYTHANG</nuxt-link>
      <div class="links">
        <nuxt-link to="/" class="show-on-sm">Home</nuxt-link>
        <nuxt-link to="/team">Team</nuxt-link>
        <a href="#" @click.prevent="openAboutModal">About</a>
        <nuxt-link to="/produce-box">Produce Box</nuxt-link>
        <a href="#" @click.prevent="openSignupModal">Sign Up</a>
      </div>
      <span class="btn btn-xxs hide-on-xs" @click="openDonationModal">Donate<span class="hide-on-xs"> Now</span></span>
    </div>
    <div class="bg" />
  </header>
</template>

<script>
export default {
  methods: {
    openDonationModal(e) {
      this.$store.commit("OPEN_DONATION_MODAL")
    },
    openAboutModal() {
      this.$store.commit("OPEN_ABOUT_MODAL")
    },
    openSignupModal() {
      this.$store.commit("OPEN_SIGNUP_MODAL");
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  color: $white;
  padding: 13px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $screen-sm-min - 1px) {
      padding-left: $site-gutter/2;
      padding-right: $site-gutter/2;
    }
  }

  .home {
    font-size: 1.25rem;
  }

  .links {
    flex: 1;
    text-align: center;
    font-family: $font-family-courier;
    font-size: 0.875rem;
    font-weight: bold;

    @media (min-width: $screen-sm-min) {
      font-size: 1rem;
      text-align: left;
      margin-left: -6px;
    }

    @media (min-width: $screen-md-min) {
      margin-left: 0;
      text-align: center;
      font-weight: normal;
    }    

    a {
      margin: 0 1px;
      padding: 3px;

      @media (min-width: $screen-sm-min) {
        margin: 0 6px;
      }

      @media (min-width: $screen-md-min) {
        padding: 6px;
      }

      @media (min-width: $screen-xl-min) {
        margin: 0 15px;
      }      
    }
  }
}

.bg {
  @include fill;
  z-index: -1;
  background-color: $dark-green;
  background-image: linear-gradient(90deg, $dark-green, mix($dark-green, $green) 90%);

  transition: opacity 300ms ease-out;

  .route-index:not(.is-scrolled) & {
    opacity: 0;
  }
}
</style>