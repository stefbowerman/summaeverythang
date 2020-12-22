<template>
  <div :class="classes">
    <div class="dialog" role="dialog">
      <div class="modal-title" style="margin-top: 2rem;">
        <h6>We need your support</h6>
        <TitleLockup />
      </div>
      <div style="font-size: 15px; margin-bottom: 5rem; font-family: courier, monospace;">
        All donations will go to support food donation programs in Watts and South Central Los Angeles.
      </div>      
      <ul class="donation-options">
        <li class="option-paypal">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="Lauren.d.halsey@gmail.com" />
            <input type="hidden" name="item_name" value="Support for Summaeverythang community center" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="submit" class="btn btn-sm btn-paypal" value="Donate with PayPal" />
          </form>
        </li>
        <li class="option-venmo">
          <a href="https://venmo.com/?txn=pay&audience=friends&recipients=lauren-halsey-3&note=Summaeverythang%20Community%20center%20Donation" class="btn btn-sm btn-venmo">Donate with Venmo</a>
        </li>
      </ul>
      <div style="font-size: 15px; margin-top: 5rem; max-width: 65em; font-family: courier, monospace;">
        Summaeverythang Community Center is a 501c3 nonprofit.<br />All donations are tax-deductible. 
      </div>
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

  // Venmo only works on devices with the app installed
  // Not sure the best way to check for this?
  .option-venmo {
    @media (min-width: $screen-md-min) {
      display: none;
    }
  }
}
</style>