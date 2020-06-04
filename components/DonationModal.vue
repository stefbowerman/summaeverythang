<template>
  <div :class="classes">
    <div class="dialog" role="dialog">
      <div class="modal-title">
        <h6>We need your support</h6>
        <TitleLockup />
      </div>
      <ul class="donation-options">
        <li>
          <a href="https://venmo.com/?txn=pay&audience=friends&recipients=lauren-halsey-3&note=Summaeverythang%20Community%20center%20Donation" class="btn btn-sm btn-venmo">Donate via Venmo</a>
        </li>
        <li>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="Lauren.d.halsey@gmail.com" />
            <input type="hidden" name="item_name" value="Support for Summaeverythang community center" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="submit" class="btn btn-sm btn-paypal" value="Donate via PayPal" />
          </form>
        </li>
      </ul>
      <div style="margin-top: 30px; font-family: courier; font-size: 13px; max-width: 40em;">All donations will go to support food donation programs in Watts and South Central Los Angeles</div>
    </div>
    <span class="close" @click="closeModal()">CLOSE</span>    
  </div>
</template>

<script>
import TitleLockup from '~/components/TitleLockup.vue'

export default {
  components: {
    TitleLockup
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
      this.$store.commit("CLOSE_DONATION_MODAL")
    }
  }
}
</script>

<style lang="scss">
.donation-options {
  max-width: 550px;
  list-style: none;
  padding: 0;
  margin: 0 auto;

  li {
    display: block;
    margin-bottom: 0;

    & + li {
      margin-top: 19px;
    }
  }

  .btn {
    width: 100%;
  }
}
</style>