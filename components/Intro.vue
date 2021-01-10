<template>
  <div class="intro">
    <div class="intro-text">
      <div class="container" style="max-width: 900px;">
        <TitleLockup
          :subtitle-style="true"
        />
      </div>
      <div class="container">
        <p>is a community center based in South Central Los Angeles dedicated to the empowerment and transcendence of black and brown folks socio-politically, economically, intellectually and artistically and is a charitable organization exempt from taxation under Internal Revenue Code Section 501(c)(3).</p> 
        <p>A copy of Summaeverythang Community Center’s most recent financial information is available by contacting the organization at <a href="mailto:summaeverythang@gmail.com" target="_blank">summaeverythang@gmail.com</a></p>
        <DonateButton />
        <div class="bubble">The Summaeverythang Community Center is not currently seeking volunteers as we are keeping the team small due to concerns regarding COVID-19. However, please stay in touch!!</div>
      </div>
    </div>
    <div class="intro-image">
      <img src="~/assets/IMG_6453.jpg" />
    </div>    
  </div>
</template>

<script>
import TitleLockup from '~/components/TitleLockup.vue'
import DonateButton from '~/components/DonateButton.vue'

export default {
  components: {
    TitleLockup,
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

  .title-lockup {
    margin-bottom: 1.5rem;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1.3;
  background-color: $green;
  background-image: $red-green-gradient;
  color: $white;
  text-align: center;
  font-size: 17px;
  line-height: 1.4;
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

    p + p {
      margin-top: 1em;
    }
  }

  .donate-button__text {
    margin-bottom: 4rem;
  }  

  .bubble {
    font-family: 'Courier', monospace;
    font-size: 13px;
    line-height: 1.3;
    border: 1px solid $white;
    padding: 21px 30px 19px;
    border-radius: 20px;
    margin-top: 5rem;
    max-width: 50em;
    margin-left: auto;
    margin-right: auto;
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
      font-size: 35px;
      margin-bottom: 13px;
    }

    .container {
      padding: 0 60px;
    }    
  }

  @media (min-width: $screen-lg-min) {
    flex: 1;

    font-size: 24px;
    letter-spacing: 0.01em;

    .container {
      max-width: none;
    }

    h2 {
      font-size: 39px;
    }    
  }
}
</style>
