<template>
  <footer>
    <div class="footer-contents">
      <div class="container">
        <DonateButton size="lg" />
      </div>
    </div>
    <div class="contact" @click="openContactModal()">
      contact us
    </div>
    <div class="video-bg">
      <div class="screen"></div>
      <no-ssr>
        <vimeo-player ref="player" :video-id="424652735" :options="videoOptions" />
      </no-ssr>
    </div>
  </footer>
</template>

<script>
import DonateButton from '~/components/DonateButton.vue'

export default {
  components: {
    DonateButton
  },
  data() {
    return {
      videoOptions: {
        background: true,
        loop: true,
        autopause: false
      }
    }
  },
  methods: {
    openContactModal() {
      this.$store.commit("OPEN_CONTACT_MODAL")
    }
  }
}
</script>

<style lang="scss">
footer {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  .footer-contents {
    position: relative;
    z-index: 1;
    color: $white;
  }  

  .donate-button__text {
    font-size: 13px;
    line-height: 1.5;
    max-width: 60em;
    margin: 2em auto 0;

    p {
      margin: 0;
    }
  }

  .contact {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 13px;
    font-family: 'Courier';
    color: $white;
    cursor: pointer;
    text-transform: uppercase;
  }  

  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;

    .screen {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: mix($green, #2d4821);
      // mix-blend-mode: color;
      mix-blend-mode: hard-light;
    }

    iframe {
      width: 100vw;
      height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
      min-height: 100vh;
      min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);      
    }
  }
}
</style>
