<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <DonationModal :show="$store.state.donationModalOpened"/>
    <AboutModal :show="$store.state.aboutModalOpened" />
    <SignupModal :show="$store.state.signupModalOpened" />
    <ContactModal :show="$store.state.contactModalOpened" />

    <audio ref="audio" autoplay @canplay="onCanPlay()" @play="onPlay()">
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
import SignupModal from '~/components/SignupModal.vue'

export default {
  components: {
    Header,
    Footer,
    DonationModal,
    AboutModal,
    ContactModal,
    SignupModal
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          `${this.$store.state.donationModalOpened ? "modal-open" : ""}`,
          `${this.$store.state.aboutModalOpened    ? "modal-open" : ""}`,
          `${this.$store.state.contactModalOpened  ? "modal-open" : ""}`,
          `${this.$store.state.signupModalOpened  ? "modal-open" : ""}`
        ]
      }
    }
  },
  data() {
    return {
      audioStartTimeout: null
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.5;

    this.audioStartTimeout = setTimeout(() => this.startAudio(), 1500);

    // Credits..
    if(console) {
      console.log('%c✨🍏🍎🍐🍊🍇🥝🥦🥑🥕🍅🍓✨', 'font-size: 30px')
      console.log('%c SUMMAEVERYTHANG: design + development 👉 stefanbowerman.com', 'font-family: Courier New; font-size: 20px; color: white; padding: 6px 20px; background-color: #65a16a; font-weight: bold; border-radius: 5px;')
    }
  },
  beforeDestroy() {
    document.removeEventListener('touchstart', this.onInteraction)
    document.removeEventListener('mousemove', this.onInteraction)
  },
  methods: {
    onInteraction() {
      // if (window.location && window.location.hostname == 'localhost') {
      //   this.$refs.audio.pause();
      //   return;
      // }

      this.$refs.audio.play();
    },    
    onCanPlay() {
      document.addEventListener('touchstart', this.onInteraction)
      document.addEventListener('mousemove', this.onInteraction)

      // if (window.location && window.location.hostname == 'localhost') {
      //   this.$refs.audio.pause();
      //   return;
      // }

      this.$refs.audio.play();
    },
    onPlay() {
      clearTimeout(this.audioStartTimeout)

      document.removeEventListener('touchstart', this.onInteraction)
      document.removeEventListener('mousemove', this.onInteraction)

      this.$refs.audio.volume = 0.5;
    },
    startAudio() {
      const p = this.$refs.audio.play();

      if (p) {
        p.catch(e => console.log(e));
      } 
    }
  }
}
</script>

<style>
audio {
  display: none !important;
}
</style>
