<template>
  <div class="signup-form">
    <p>I'd like to&hellip;</p>
    <p>
      <label class="radio-label" for="signup-volunteer">
        <input type="radio" id="signup-volunteer" value="volunteer" v-model="form.signupType">
        <span class="radio-display">Volunteer with Summaeverythang</span>
      </label>      
      <br />
      <label class="radio-label" for="signup-receive">
        <input type="radio" id="signup-receive" value="produce-box" v-model="form.signupType">
        <span class="radio-display">Receive a Produce Box</span>
      </label>
    </p>

    <form @submit.prevent="onSubmit" ref="form" :action="formAction" method="POST">
      <input type="hidden" name="_subject" :value="formSubject">
      <input type="hidden" name="title" :value="formTitle">
      <p>
        <label class="form-control-label" for="signup-name">Your Name</label>
        <input class="form-control" name="name" type="text" id="signup-name" v-model="form.name" placeholder="Your Name">
      </p>
      <p>
        <label class="form-control-label" for="signup-email">Email</label>
        <input class="form-control" name="email" type="email" id="signup-email" v-model="form.email" placeholder="Your Email">
      </p>
      <p v-if="form.signupType === 'volunteer'">
        <label class="form-control-label" for="signup-message">Message</label>
        <textarea class="form-control" name="message" id="signup-message" rows="3" v-model="form.message" placeholder="Message"></textarea>
      </p>   
      <p v-if="form.signupType === 'produce-box'">
        <label class="form-control-label" for="signup-zip">Zip Code</label>
        <input class="form-control" name="zip code" type="text" id="signup-zip" v-model="form.zip" placeholder="Your Zip Code">
      </p>  
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

// Produce box signups - https://formspree.io/xwkrwyyl
// Volunteer signups - https://formspree.io/xvowvllz

const signupTypes = {
  VOLUNTEER: 'volunteer',
  PRODUCE_BOX: 'produce-box'
};

export default {
  data() {
    return {
      form: this.getInitialFormState(),
      submitting: false,
      success: false,
      error: false,
      messageTimeout: null
    }
  },
  computed: {
    submitText() {
      return this.submitting ? 'Sending...' : 'Send'
    },
    formAction() {
      return `https://formspree.io/${this.form.signupType == signupTypes.VOLUNTEER ? 'xvowvllz' : 'xwkrwyyl' }`;
    },
    formSubject() {
      return `[Summaeverythang.org] ${this.formTitle}`
    },
    formTitle() {
      return this.form.signupType == signupTypes.VOLUNTEER ? 'Volunteer Sign Up' : 'Produce Box Sign up';
    }
  },
  methods: {
    getInitialFormState() {
      return {
        name: '',
        email: '',
        signupType: signupTypes.VOLUNTEER,
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
      if(this.form.email.length === 0) {
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
