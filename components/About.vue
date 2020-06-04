<template>
  <div class="about">
    <div class="about-player">
      <div class="about-player__embed">
        <no-ssr>
          <vimeo-player
            :video-id="425754677"
            :options="options"
            @play="onPlay"
            @pause="onPause"
          />
        </no-ssr>
      </div>
    </div>
    <span class="btn btn-green btn-sm" @click="openAboutModal()">Learn More</span>
  </div>
</template>

<script>

export default {
  data() {
    return {
      options: {
        title: false,
        byline: false,
        portrait: false,
        playsinline: true,
        loop: true
      }
    }
  },
  methods: {
    onPlay() {
      this.$store.commit("VIDEO_PLAYING")
    },
    onPause() {
      this.$store.commit("VIDEO_STOPPED")
    },
    openAboutModal() {
      this.$store.commit("OPEN_ABOUT_MODAL")
    }
  }
}
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: $red-green-dark-gradient;
  padding: 100px $site-gutter;

  @media (min-width: $screen-md-min) {
    padding: 100px;    
  }

  .btn {
    margin-top: 3.5rem;
  }
}

.about-player {
  width: 100%;
  max-width: 135vh;
}

.about-player__embed {
  width: 100%;
  height: 0;
  padding-bottom: percentage(9/16);
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
