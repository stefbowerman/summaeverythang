<template>
  <div class="team-member">
    <img v-if="image" :src="image" />
    <div class="team-member__info">
      <div class="team-member__title">
        <h3 v-text="name"></h3>
        <a v-if="instagram"
           class="team-member__insta"
          :href="`https://instagram.com/${instagram}`"
           target="_blank"
           v-text="`@${instagram}`">  
        </a>
      </div>
      <div v-if="bio" v-html="bio" class="bio"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },    
    bio: {
      type: String,
      default: ''
    },
    instagram: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.team-member {
  .bio {
    font-size: 13px;
    font-family: $font-family-courier;
    color: $white;

    p:last-child {
      margin: 0;
    }
  }

  img {
    width: 100%;
    margin-bottom: 30px;
    border-radius: 6px;
  }
}

.team-member__info {
  padding: 0 10px;
}

.team-member__title {
  margin-bottom: 1rem;

  h3 {
    margin: 0;
  }
}

.team-member__insta {
  display: inline-block;
  margin-top: 0.25rem;
}
</style>
