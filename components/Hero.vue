<template>
  <div class="hero">
    <div class="container">
      <div class="titles">
        <TitleLockup />
      </div>
      <div class="pill">Free organic produce box donations for Watts and South Central Los Angeles</div>
    </div>
    <div class="bg">
      <img src="~/assets/background-website-foto.jpg" class="wallpaper" />
    </div>
  </div>
</template>

<script>
import TitleLockup from '~/components/TitleLockup.vue'

export default {
  components: {
    TitleLockup
  }
}
</script>

<style lang="scss">
.hero {
  margin: 0 auto;
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $white;

  .container {
    transform: translateY(5%);
  }

  .title-lockup {
    margin-bottom: 40px;
  }

  .pill {
    max-width: 28em;
    background-color: transparentize($green, 0.2);
  }

  .bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #49474a;
  }  

  .wallpaper {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }  
}
</style>
