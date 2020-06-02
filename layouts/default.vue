<template>
  <div>
    <nuxt />
    <DonationModal :show="$store.state.donationModalOpened"/>
    <audio controls loop="loop" autoplay="true" ref="audio">
      <source src="~/assets/were-a-winner-the-impressions.mp3" type="audio/mpeg" hidden>
    </audio>
  </div>
</template>

<script>
import DonationModal from '~/components/DonationModal.vue'

export default {
  components: {
    DonationModal
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          `${this.$store.state.donationModalOpened ? "modal-open" : ""}`
        ]
      }
    }
  },
  mounted() {
    const audio = this.$refs.audio;

    audio.volume = 0.5;

    audio.addEventListener('canplay', () => {
      audio.play();
      
      document.addEventListener('touchstart', () => {
        audio.play();
      });
    });
  }
}
</script>

<style>
audio {
  display: none !important;
}
</style>
