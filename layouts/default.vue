<template>
  <div>
    <nuxt />
    <DonationModal :show="$store.state.donationModalOpened"/>
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
  }
}
</script>
