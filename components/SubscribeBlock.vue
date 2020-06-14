<template>
  <div class="subscribe-block">
    <div class="container">
      <h2>Join Our Mailing List</h2>
      <p>Submit your email and we'll send you updates on everything happening with Summaeverythang Community Center.</p>          
      <mailchimp-subscribe
        :url="url"
        :user-id="userId"
        :list-id="listId"
        @error="onError"
        @success="onSuccess"
      >
        <template v-slot="{ subscribe, setEmail, error, success, loading }">      
          <div style="max-width: 500px; margin: 40px auto 0;">            
            <form @submit.prevent="subscribe" :class="subscribeFormClasses">
              <div class="subscribe-form__contents">
                <p style="margin-bottom: 2rem;">
                  <input type="email" class="form-control" placeholder="Your Email Address" @input="setEmail($event.target.value)" />
                </p>
                <button type="submit" class="btn btn-sm btn-block">Subscribe</button>
              </div>
              <div class="subscribe-form__message" v-text="subscribeMessage"></div>
            </form>
          </div>
        </template>
      </mailchimp-subscribe>
    </div>
  </div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  components: {
    MailchimpSubscribe
  },
  data() {
    return {
      url: 'https://summaeverythang.us10.list-manage.com/subscribe/post-json',
      userId: '193f5a5bd06cb4df1d524eda7',
      listId: 'aa089dfbb5',
      subscribeMessage: '',
      subscribeMessageVisible: false,
      subscribeTimeout: null
    }
  },
  computed: {
    subscribeFormClasses() {
      return [
        'subscribe-form',
        { 'show-message': this.subscribeMessageVisible }
      ]
    }
  },
  methods: {
    onError(e) {
      // handle error
      if (e && e.indexOf('is already subscribed') !== -1) {
        this.subscribeMessage = 'This email is already subscribed to our mailing list.'
      }
      else {
        this.subscribeMessage = 'Something went wrong.  Please check your email and try again.'  
      }
      
      this.showMessage(2000);
    },
    onSuccess() {
      this.subscribeMessage = 'Thank you for subscribing!'
      this.showMessage();
    },
    showMessage(d = 4500) {
      this.subscribeMessageVisible = true;
      this.subscribeTimeout = setTimeout(() => {
        this.subscribeMessageVisible = false;
      }, d);
    }
  },
  beforeDestroy() {
    clearTimeout(this.subscribeTimeout)
  }
}
</script>

<style lang="scss">
.subscribe-block {
  text-align: center;

  input {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-family: $font-family-courier;
    max-width: 48em;
    margin-left: auto;
    margin-right: auto;
  }
}

.subscribe-form {
  position: relative;
}

.subscribe-form__contents {
  opacity: 1;
  transition: opacity 0.3s ease-out 0.3s;

  .show-message & {
    opacity: 0;
    transition-delay: 0s;
    pointer-events: none;
  }
}

.subscribe-form__message {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out 0s;
  font-family: 'Courier', monospace;
  font-weight: bold;
  font-size: 18px;

  .show-message & {
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.3s;
  }
}
</style>