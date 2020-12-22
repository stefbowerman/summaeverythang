<template>
  <div class="donate-button">
    <span :class="buttonClass" @click="openDonationModal()">Donate Now</span>
    <div class="donate-button__text">
      <p>All donations will go to support food donation programs in Watts and South Central Los Angeles.</p>
      <p>Summaeverythang Community Center is a 501c3 nonprofit. All donations are tax-deductible.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: ''
    }
  },
  methods: {
    openDonationModal(e) {
      // console.log('opening donation modal')
      this.$store.commit("OPEN_DONATION_MODAL")
    }
  },
  computed: {
    buttonClass() {
      return [
        'btn',
        this.size ? `btn-${this.size}` : null
      ]
    }
  }
}
</script>

<style lang="scss">
.donate-button {

}

.donate-button__text {
  font-family: 'Courier';
  font-size: 12px;
  line-height: 1.3;
  max-width: 45em;
  margin: 2rem auto 0;

  p {
    margin: 0;

    & + & {
      margin-top: 0.5em;
    }
  }
}
</style>