<template>
  <div>
    <span>{{ playText }}</span>
    <nuxt />
    <DonationModal :show="$store.state.donationModalOpened"/>
    <AboutModal :show="$store.state.aboutModalOpened" />
    <audio autoplay="autoplay" ref="audio" @canplay="onCanPlay()" @play="onPlay()">
      <source src="~/assets/were-a-winner-the-impressions.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import DonationModal from '~/components/DonationModal.vue'
import AboutModal from '~/components/AboutModal.vue'

export default {
  components: {
    DonationModal,
    AboutModal
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          `${this.$store.state.donationModalOpened ? "modal-open" : ""}`,
          `${this.$store.state.aboutModalOpened ? "modal-open" : ""}`
        ]
      }
    }
  },
  data() {
    return {
      playText: ''
    }
  },
  computed: {
    videoPlaying() {
      return this.$store.state.videoPlaying;
    }
  },
  watch: {
    videoPlaying(newValue, oldValue) {
      // If the video is playing, pause the audio
      if(newValue) {
        this.$refs.audio.pause();
      }
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.5;

    document.addEventListener('touchstart', this.onTouchStart);

    // Credits..
    if(console) {
      console.log('%c✨🍏🍎🍐🍊🍇🥝🥦🥑🥕🍅🍓✨', 'font-size: 30px');
      console.log('%c SUMMAEVERYTHANG: design + development 👉 stefanbowerman.com', 'font-family: Courier New; font-size: 20px; color: white; padding: 6px 20px; background-color: #65a16a; font-weight: bold; border-radius: 5px;');
    }
  },
  beforeDestroy() {
    document.removeEventListener('touchstart', this.onTouchStart);
  },
  methods: {
    onTouchStart() {
      this.$refs.audio.play();
    },    
    onCanPlay() {
      this.$refs.audio.play();
    },
    onPlay() {
      document.removeEventListener('touchstart', this.onTouchStart)
    }
  }
}
</script>

<style>
audio {
  display: none !important;
}
</style>
