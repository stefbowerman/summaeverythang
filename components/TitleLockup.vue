<template>
  <div :class="[
    'title-lockup'
  ]">
    <h1 v-if="subtitleStyle === false">summaeverythang</h1>
    <h2 v-else>summaeverythang</h2>

    <h4 v-if="subtitleStyle === false">community center, inc.</h4>
    <h5 v-else>community center, inc.</h5>
  </div>
</template>

<script>
export default {
  props: {
    subtitleStyle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.title-lockup {
  h1, h2 {
    margin-bottom: -0.01em;
  }

  h4, h5 {
    margin-bottom: 0;
  }

  h1, h2 {
    font-size: 24px;  
  }

  h4, h5 {
    font-size: 15px;
  }

  @media (min-width: $screen-xs-min) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 37px;
    }

    h4 {
      font-size: 22px;
    }
    h5 {
      font-size: 18px;
    }
  }

  @media (min-width: $screen-sm-min) {
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 44px;
    }

  }

  @media (min-width: $screen-md-min) {
    h1 {
      font-size: 70px;
    }
    h2 {
      font-size: 46px;
    }

    h4 {
      font-size: 26px;
    }
    h5 {
      font-size: 23px;
    }
  }    

  @media (min-width: $screen-xl-min) {
    h1 {
      font-size: 100px;
    }
    // h2 {
    //   font-size: 85px;
    // }

    h4 {
      font-size: 29px;
    }
    // h5 {
    //   font-size: 25px;
    // }
  }  
}
</style>