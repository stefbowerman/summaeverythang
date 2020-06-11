<template>
  <div class="contact-form">
    <form @submit.prevent="onSubmit" ref="form" :action="formAction" method="POST">
      <p>
        <label for="contact-name">Your Name</label>
        <input class="form-control" name="name" type="text" id="contact-name" v-model="form.name" placeholder="Your Name">
      </p>
      <p>
        <label for="contact-email">Email</label>
        <input class="form-control" name="email" type="email" id="contact-email" v-model="form.email" placeholder="Your Email">
      </p>
      <p>
        <label for="contact-message">Message</label>
        <textarea class="form-control" name="message" id="comment" rows="3" v-model="form.message" placeholder="Message"></textarea>
      </p>    
      <input type="hidden" name="_subject" id="email-subject" v-model="form._subject">
      <input type="text" name="_gotcha" v-model="form._gotcha" style="display:none" />
      <button type="submit" class="btn btn-sm btn-block" style="margin-top: 3rem;" :disabled="submitting">{{ submitText }}</button>
    </form>
    <transition name="fade">
      <div 
          class="form-message"
          v-html="'Thanks for contacting us.<br />We will reply as soon as we can.'"
          v-if="success"
      />
    </transition>
    <transition name="fade">
      <div
          class="form-message"
          v-text="`Something went wrong, please check the form fields and try submitting again.`"
          v-if="error"
      />
    </transition>    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: this.getInitialFormState(),
      formAction: 'https://formspree.io/maypjnjq',
      submitting: false,
      success: false,
      error: false,
      messageTimeout: null,
      trackingScripts: []
    }
  },
  computed: {
    submitText() {
      return this.submitting ? 'Sending...' : 'Send'
    }
  },
  methods: {
    getInitialFormState() {
      return {
        name: '',
        email: '',
        message: '',
        _subject: '[Summaeverythang.org] Contact Form Message',
        _gotcha: ''
      }
    },
    resetForm() {
      Object.assign(this.$data.form, this.getInitialFormState())
    },
    onSubmitSuccess() {
      this.success = true
      this.resetForm()

      clearTimeout(this.messageTimeout)
      this.messageTimeout = setTimeout(() => {
          this.success = false
      }, 3000)
    },
    onSubmitError() {
      this.error = true

      clearTimeout(this.messageTimeout)
      this.messageTimeout = setTimeout(() => {
          this.error = false
      }, 3000)
    },
    onSubmit() {
      // Make sure they're submitting an actual email
      if(this.form.email.length === 0 || this.form.message.length == 0) {
        return this.onSubmitError()
        return
      }

      if (this.form._gotcha != '') {
        return false
      }

      const form = this.$refs.form
      const data = new FormData(form)

      this.submitting = true

      axios.post(this.formAction, data)
        .then(() => {
          this.onSubmitSuccess()
        })
        .catch((e) => {
          this.onSubmitError();
        })
        .then(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style lang="scss">
.form-message {
  text-align: center;
  font-size: 15px;
  padding-top: 22px;
}
</style>
