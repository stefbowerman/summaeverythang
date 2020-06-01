<template>
  <footer>
    <div class="footer-contents">
      <DonateButton />
    </div>
    <div class="video-bg">
      <div class="screen"></div>
      <iframe src="https://player.vimeo.com/video/424652735?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
  </footer>
</template>

<script>
import DonateButton from '~/components/DonateButton.vue'

export default {
  components: {
    DonateButton
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
    max-width: 34em;
    margin: 1em auto 0;
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
      background-color: $dark-green;
      mix-blend-mode: color;
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
