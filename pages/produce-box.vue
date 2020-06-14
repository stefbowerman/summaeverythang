<template>
  <main class="produce-box bg-gradient">
    <PageTitle
      title="Produce Boxes"
      subtitle="Each of our produce boxes includes:"
    />
    <div class="player-container">
      <div class="player">
        <div class="player__embed">
          <no-ssr>
            <vimeo-player
              :video-id="429029525"
              :options="options"
            />
          </no-ssr>
        </div>
      </div>
    </div>
    <div class="player-container">
      <div class="player">
        <div class="player__embed">
          <no-ssr>
            <vimeo-player
              :video-id="429030619"
              :options="options"
            />
          </no-ssr>
        </div>
      </div>
    </div>    
  </main>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  transition: 'fade',
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
  }
}
</script>

<style lang="scss">
.produce-box {
  padding-top: 50px;
  padding-bottom: 150px;

  @media (min-width: $screen-md-min) {
    padding-top: 150px;
  }
}
</style>
