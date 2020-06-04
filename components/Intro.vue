<template>
  <div class="intro">
    <div class="intro-text">
      <div class="container">
        <h2>Summaeverythang</h2>
        <p>is a community center based in South Central Los Angeles dedicated to the empowerment and transcendence of black and brown folks socio-politically and economically, intellectually and artistically.</p>
        <p>Summaeverythang Community Center was founded in 2019 by artist and fantasy architect, Lauren Halsey.</p>
        <DonateButton />
      </div>
    </div>
    <div class="intro-image">
      <img src="~/assets/IMG_6453.jpg" />
    </div>    
  </div>
</template>

<script>
import DonateButton from '~/components/DonateButton.vue'

export default {
  components: {
    DonateButton
  },
  methods: {
    openAboutModal() {
      this.$store.commit("OPEN_ABOUT_MODAL")
    }
  }
}
</script>

<style lang="scss">
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $screen-md-min) {
    flex-direction: row;
    align-items: stretch;
  }
}

.intro-image {
  flex: 1;
  align-self: flex-start;
  height: 60vh;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    filter: saturate(0) brightness(1.6);
  }

  @media (min-width: $screen-md-min) {
    height: 100vh;
    position: sticky;
    top: 0;    
  }
}

.intro-text {
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1.3;
  background-color: $green;
  background-image: $red-green-gradient;
  color: $white;
  text-align: center;
  font-size: 17px;
  line-height: 1.6;
  padding: 100px 0;
  letter-spacing: 0.04em;

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;

    & + p {
      margin-top: 2rem;
    }
  }

  .donate-button {
    margin-top: 4rem;
  }

  @media (min-width: $screen-sm-min) {
    font-size: 21px;

    h2 {
      font-size: 33px;
    }
  }  

  @media (min-width: $screen-md-min) {
    padding: 160px 0;

    h2 {
      font-size: 43px;
      margin-bottom: 13px;
    }

    .container {
      padding: 0 60px;
    }    
  }

  @media (min-width: $screen-lg-min) {
    flex: 1;

    font-size: 26px;
    line-height: 1.4;
    letter-spacing: 0;

    .container {
      max-width: none;
    }

    h2 {
      font-size: 55px;
    }    
  }
}
</style>
