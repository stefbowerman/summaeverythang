<template>
  <div class="about">
    <div class="player-container">
      <div class="player">
        <div class="player__embed">
          <no-ssr>
            <vimeo-player
              :video-id="425754677"
              :options="options"
            />
          </no-ssr>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <span class="btn btn-red btn-sm" @click="openAboutModal()">Learn More</span>
      <nuxt-link to="/team" class="btn btn-sm">Meet the Team</nuxt-link>
    </div>
    <SubscribeBlock />
  </div>
</template>

<script>
import SubscribeBlock from '~/components/SubscribeBlock'

export default {
  components: {
    SubscribeBlock
  },
  data() {
    return {
      options: {
        title: false,
        byline: false,
        portrait: false,
        playsinline: true,
        loop: true,
        muted: true,
        color: '65a16a'
      }
    }
  },
  methods: {
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
  background-image: $red-green-gradient;
  padding: 120px 0 70px;

  @media (min-width: $screen-xl-min) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .btn-group {
    margin-top: 3.5rem;
  }

  .subscribe-block {
    margin-top: 9rem;
    margin-bottom: 5rem;

    @media (min-width: $screen-md-min) {
      margin-top: 13rem;
    }
  }
}
</style>
