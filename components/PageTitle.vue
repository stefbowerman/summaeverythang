<template>
  <div class="page-title">
    <div class="container">
      <h1 v-text="title"></h1>
      <div class="page-title__sub" v-if="subtitle" v-text="subtitle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.page-title {
  margin: 80px 0 60px;
  text-align: center;

  h1 {
    font-size: 1.5rem;
  }

  @media (min-width: $screen-sm-min) {
    h1 {
      font-size: 2.5rem; 
    }
  }

  @media (min-width: $screen-md-min) {
    margin: 6vw 0 8vw;

    h1 {
      font-size: 4rem;
    }    
  }
}

.page-title__sub {
  font-family: $font-family-courier;

  @media (min-width: $screen-md-min) {
    font-size: 18px;    
  } 
}
</style>