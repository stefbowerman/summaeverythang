<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <DonationModal :show="$store.state.donationModalOpened"/>
    <AboutModal :show="$store.state.aboutModalOpened" />
    <ContactModal :show="$store.state.contactModalOpened" />
    <audio ref="audio" @canplay="onCanPlay()" @play="onPlay()">
      <source src="~/assets/were-a-winner-the-impressions.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import DonationModal from '~/components/DonationModal.vue'
import AboutModal from '~/components/AboutModal.vue'
import ContactModal from '~/components/ContactModal.vue'

export default {
  components: {
    Header,
    Footer,
    DonationModal,
    AboutModal,
    ContactModal
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          `${this.$store.state.donationModalOpened ? "modal-open" : ""}`,
          `${this.$store.state.aboutModalOpened    ? "modal-open" : ""}`,
          `${this.$store.state.contactModalOpened  ? "modal-open" : ""}`
        ]
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
      if (window.location && window.location.hostname == 'localhost') {
        this.$refs.audio.pause();
        return;
      }

      this.$refs.audio.play();
    },    
    onCanPlay() {
      if (window.location && window.location.hostname == 'localhost') {
        this.$refs.audio.pause();
        return;
      }

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
