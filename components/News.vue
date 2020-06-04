<template>
  <div :class="newsClasses" ref="news">
    <div class="news-background">
      <div class="screen"></div>
      <img src="~/assets/bg-box.jpg" />          
    </div>

    <div class="news-block">
      <div class="news-block__topper">
        <div class="news-block__title">
          <div class="pill pill--lg">
            <div class="meta">On May 30, 2020</div>
            <h2>Summaeverythang Community Center donated 300+ free organic produce boxes to folks in Watts.</h2>
          </div>
        </div>
        <img src="~/assets/news-bg-2.jpg" class="news-block__topper-bg" />
      </div>

      <div class="news-block__content">
        <div class="news-block__body">
          <div class="news-block__body-text">
            <h3>The contents of these boxes included:</h3>
            <p></p>
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
        </div>
      </div>
    </div>

    <div class="news-block">
      <div class="news-block__topper">
        <div class="news-block__title">
          <div class="pill pill--lg">
            <div class="meta">On May 16, 2020</div>
            <h2>Summaeverythang Community Center donated 200 free organic produce boxes to folks in Watts.</h2>
          </div>
        </div>
        <img src="~/assets/news-bg-1.jpg" class="news-block__topper-bg" />
      </div>

      <div class="news-block__content">
        <div class="news-block__body">
          <div class="news-block__body-text">
            <h3>Contents included Organic:</h3>
            <p></p>
            <p>Kale Bunch</p>
            <p>Lettuce Romaine Heart</p>
            <p>Bell Pepper</p>
            <p>Cucumber</p>
            <p>Butternut Squash</p>
            <p>Tomato Roma</p>
            <p>Onion</p>
            <p>Potatoes Red Small</p>
            <p>Broccoli</p>
            <p>Carrots</p>
            <p>Blueberry 6oz Baskets</p>
            <p>Oranges</p>
            <p>Lemons</p>
            <p>Mango</p>
            <p>Bananas</p>
            <p>Strawberries</p>
            <p>Mint</p>
            <p>Rosemary</p>
            <p>Cilantro</p>
            <p>Apple Fuji</p>
            <p>Raspberries 6oz Baskets</p>
            <p>Oregano</p>
            <p>Chives</p>
            <p>Arugula</p>
            <p>Basil</p>
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
      inView: false,
      isSticky: false,
      videoOptions: {
        background: true,
        loop: true
      }
    }
  },
  computed: {
    newsClasses() {
      return [
        'news',
        { 'in-view': this.inView },
        { 'is-sticky': this.isSticky },
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
      const boundingRectTop = this.$refs.news.getBoundingClientRect().top;

      this.isSticky = boundingRectTop <= 0;
      // this.inView = boundingRectTop <= window.innerHeight; // This isn't great since it only takes the top part of the element into account but it's fone because the only thing that comes after is the footer and that slides over
    }
  }
}
</script>

<style lang="scss">
.news {
  background-color: $dark-green;
  position: relative;
  overflow: hidden;
}

.news-block {
  text-align: center;
  // background-color: $white;

  .pill {
    background-image: $red-green-short-gradient;
  }
}

.news-block__topper {
  position: relative;
  z-index: 1;
  padding: 80px 0 100px;
  color: $white;
}

.news-block__topper-bg {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0) brightness(0.7);
}

.news-block__title {
  padding: 0 $site-gutter;

  h2 {
    font-size: 21px;
    margin: 0;
    text-transform: none;
    letter-spacing: 0.05em;
  }

  .meta {
    font-family: 'Courier', monospace;
    font-size: 13px;
    margin: -9px 0 7px;
  }
}

.news-block__content {
  // margin-top: 13rem;
}

.news-block__body {
  position: relative;
}

.news-block__body-text {
  padding: 8rem $site-gutter;
  font-size: 25px;
  line-height: 1.2;
  position: relative;
  z-index: 2;
  color: $white;

  p {
    margin-bottom: 0;

    & + p {
      margin-top: 1.5em;
    }
  }
}

.news-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: $dark-green;

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
    background-color: rgba(20, 85, 28, 0.7);
    mix-blend-mode: multiply;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

@media (min-width: $screen-sm-min) {
  .news-block__topper {
    padding: 150px 0 200px;
  }

  .news-block__title {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10vw;
  }

  .news-block__content-title {
    margin-bottom: 30px;
    font-size: 26px;
  }
}

@media (min-width: $screen-md-min) {
  .news-block__body-text {
    font-size: 40px;
    line-height: 1.3;

    p {
      & + p {
        margin-top: 0.9em;
      }
    }    
  }
}
</style>
