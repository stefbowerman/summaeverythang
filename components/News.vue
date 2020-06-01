<template>
  <div class="news">
    <div class="news-block">
      <div class="news-block__topper">
        <div class="news-block__meta">On May 30, 2020</div>
        <div class="news-block__title">
          <div class="pill pill--lg">
            <h2>Summaeverythang Community Center donated 300+ free organic produce boxes to folks in Watts.</h2>
          </div>
        </div>
      </div>

      <div class="news-block__content">
        <div class="news-block__content-title">The contents of these boxes included</div>
        <div :class="newsBodyClasses" ref="newsBody">
          <div class="news-block__body-text">
            <p>312 bunches of kale</p>
            <p>312 heads of romaine lettuce</p>
            <p>300 bell peppers</p>
            <p>300 cucumbers</p>
            <p>308 butternut squash</p>
            <p>616 roma tomatoes</p>
            <p>616 bags of fingerling potatoes</p>
            <p>300 baskets of blueberries</p>
            <p>600 oranges</p>
            <p>390 carrots</p>
            <p>320 bunches of cilantro</p>
            <p>128 bunches of mint</p>
            <p>128 bunches of rosemary</p>
            <p>112 bunches of broccoli</p>
            <p>301 pineapples</p>
            <p>144 bananas</p>
            <p>144 bunches of basil</p>
            <p>112 bunches of parsley</p>
            <p>120 heads of cabbage</p>
            <p>600 gala apples</p>
            <p>108 baskets of raspberries</p>
            <p>112 bunches of chives</p>
            <p>112 oregano</p>
            <p>300 avodacos</p>
            <p>304 baskets of strawberries</p>
            <p>300 onions</p>
            <p>308 mangos</p>
            <p>600 lemons</p>
            <p>600 limes</p>
            <p>300 beets</p>
            <p>165 packs of garlic</p>
            <p>30 lbs of arugula</p>
            <p>300 buns of collard greens</p>
            <p>300 lbs rice</p>
            <p>300 lbs of black beans</p>
          </div>

          <div class="news-block__body-background">
            <div class="screen"></div>
            <iframe src="https://player.vimeo.com/video/424652543?background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick and dirty way of hiding the sticky video -->
    <div class="news-block" style="position: relative">
      <div class="news-block__topper">
        <div class="news-block__meta">On May 16, 2020</div>
        <div class="news-block__title">
          <div class="pill pill--lg">
            <h2>Summaeverythang Community Center donated 200 free organic produce boxes to folks in Watts.</h2>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsBodySticky: false
    }
  },
  computed: {
    newsBodyClasses() {
      return [
        'news-block__body',
        { 'is-sticky': this.newsBodySticky }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.newsBodySticky = (this.$refs.newsBody.getBoundingClientRect().top <= 0);
    }
  }
}
</script>

<style lang="scss">
.news {
  background-color: $white;
}

.news-block {
  text-align: center;
  background-color: $white;
}

.news-block__topper {
  padding: 80px 0 100px;
}

.news-block__meta {
  margin-bottom: 15px;
}

.news-block__title {
  padding: 0 $site-gutter;

  h2 {
    font-size: 21px;
    margin: 0;
    text-transform: none;
    letter-spacing: 0.05em;
  }
}

.news-block__content {
  // margin-top: 13rem;
}

.news-block__content-title {
  margin-bottom: 18px;
  font-size: 16px;
}

.news-block__body {
  position: relative;
}

.news-block__body-text {
  padding: 8rem $site-gutter;
  font-size: 25px;
  line-height: 1.8;
  position: relative;
  z-index: 2;
  color: $white;

  p {
    margin-bottom: 0;

    & + p {
      margin-top: 0.4em;
    }
  }
}

.news-block__body-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .is-sticky & {
    position: fixed;
  }

  .screen {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: transparentize($white, 0.3);
    background-color: #024f0c73;
    mix-blend-mode: color;
  }

  iframe {
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);      
  }
}

@media (min-width: $screen-sm-min) {
  .news-block__topper {
    padding: 150px 0 200px;
  }

  .news-block__title {
    padding: 0 10vw;

    h2 {
      font-size: 35px;
    }
  }

  .news-block__content-title {
    margin-bottom: 30px;
    font-size: 26px;
  }

  .news-block__body-text {
    font-size: 40px;
    line-height: 1;
  }
}

@media (min-width: $screen-lg-min) {
  .news-block__title {
    h2 {
      font-size: 53px;
    }
  }

  .news-block__body-text {
    font-size: 60px;
    line-height: 1;
  }
}
</style>
