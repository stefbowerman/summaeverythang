<template>
  <div :class="classes">
    <div class="dialog" role="dialog">
      <div class="modal-title">
        <h3>Sign Up</h3>
      </div>
      <div class="modal-body">
        <SignupForm />
      </div>
    </div>
    <span class="close" @click="closeModal()">CLOSE</span>    
  </div>
</template>

<script>
import SignupForm from '~/components/SignupForm'

export default {
  components: {
    SignupForm
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
      this.$store.commit("CLOSE_SIGNUP_MODAL")
    }
  }
}
</script>

<style lang="scss">
.modal-body {
  .signup-form {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;

    .form-control-label {
      @include sr-only;
    }
  }
}
</style>