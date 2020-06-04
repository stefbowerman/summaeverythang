<template>
  <div class="title-lockup">
    <h1>summaeverythang</h1>
    <h4>community center</h4>
  </div>
</template>

<style lang="scss">
.title-lockup {
  h1 {
    font-size: 24px;
    margin-bottom: -0.01em;
  }

  h4 {
    font-size: 15px;
    margin-bottom: 0;
  }

  @media (min-width: $screen-xs-min) {
    h1 {
      font-size: 40px;
    }

    h4 {
      font-size: 22px;
    }
  }

  @media (min-width: $screen-sm-min) {
    h1 {
      font-size: 50px;
    }

    h4 {
      font-size: 22px;
    }
  }

  @media (min-width: $screen-md-min) {
    h1 {
      font-size: 70px;
    }

    h4 {
      font-size: 26px;
    }
  }    

  @media (min-width: $screen-xl-min) {
    h1 {
      font-size: 100px;
    }

    h4 {
      font-size: 29px;
    }
  }  
}
</style>