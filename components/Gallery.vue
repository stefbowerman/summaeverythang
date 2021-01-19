<template>
  <div class="gallery">
    <div class="gallery__row">
      <div class="gallery__block">
        <img src="~/assets/gallery/IMG_3756-preview.jpg" />
      </div>
      <div class="gallery__block">
        <img src="~/assets/gallery/p_Summa_150.jpg" />
      </div>
    </div>
    <div class="gallery__row gallery__row--landscape">
      <div class="gallery__block">
        <img src="~/assets/gallery/Summa_112.jpg" />
      </div>
    </div>
    <div class="gallery__row">
      <div class="gallery__block">
        <img src="~/assets/gallery/p_Summa_151.jpg" />
      </div>
      <div class="gallery__block">
        <img src="~/assets/gallery/p_Summa_650-2.jpg" />
      </div>
    </div>
    <div class="gallery__row">
      <div class="gallery__block">
        <img src="~/assets/gallery/p_Summa_362.jpg" />
      </div>
      <div class="gallery__block">
        <img src="~/assets/gallery/p_Summa_256.jpg" />
      </div>
    </div>    
    <div class="gallery__row gallery__row--landscape">
      <div class="gallery__block">
        <img src="~/assets/gallery/Summa_029.jpg" />
      </div>
    </div>

    <SubscribeBlock /> 
  </div>
</template>

<script>
import SubscribeBlock from '~/components/SubscribeBlock'

export default {
  components: {
    SubscribeBlock
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  padding: $site-gutter 0;
  background-image: $red-green-reverse-gradient;

  .subscribe-block {
    margin-top: 9rem;
    margin-bottom: 7rem;

    @media (min-width: $screen-md-min) {
      margin-top: 10rem;
    }
  }
}

.gallery__row {
  display: flex;
  flex-direction: column;
  padding: 0 $site-gutter/2;
  margin: 0 auto;
  max-width: 1450px;

  @media (min-width: $screen-sm-min) {
    flex-direction: row;
    height: 100vh;
    max-height: 600px;
  }

  @media (min-width: $screen-lg-min) {
    max-height: none;

    &--landscape {
      height: 75vh;   
    }    
  }
}

.gallery__block {
  flex: 1;
  height: 80vh;
  padding: 0 0 $site-gutter/2;

  @media (min-width: $screen-sm-min) {
    height: 100%;
    padding: $site-gutter/2;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
    
    @media (min-width: $screen-sm-min) {
      border-radius: $site-gutter;  
    }
  }
}
</style>