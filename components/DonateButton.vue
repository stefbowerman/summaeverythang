<template>
  <div class="donate-button">
    <span class="btn" @click="openDonationModal()">Donate Now</span>
    <div class="donate-button__text">
      All donations will go to support food donation programs in Watts and South Central Los Angeles
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openDonationModal(e) {
      // console.log('opening donation modal')
      this.$store.commit("OPEN_DONATION_MODAL")
    }
  }
}
</script>

<style>
.donate-button {

}

.donate-button__text {
  font-family: 'Courier';
  font-size: 12px;
  line-height: 1.3;
  max-width: 37em;
  margin: 2rem auto 0;
}
</style>