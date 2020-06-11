<template>
  <div :class="classes">
    <div class="dialog" role="dialog">
      <div class="modal-title">
        <h3>Contact Us</h3>
      </div>
      <div class="modal-body">
        <ContactForm />
      </div>
    </div>
    <span class="close" @click="closeModal()">CLOSE</span>    
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    ContactForm
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        'modal',
        { 'is-open': this.show }
      ]
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("CLOSE_CONTACT_MODAL")
    }
  }
}
</script>

<style lang="scss">
.modal-body {
  .contact-form {
    width: 100%;
    max-width: 450px;

    label {
      @include sr-only;
    }
  }
}
</style>