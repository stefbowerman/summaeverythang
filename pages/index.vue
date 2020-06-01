<template>
  <main>
    <Hero />
    <Intro />
    <News />
    <Footer />
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Intro from '~/components/Intro.vue'
import News from '~/components/News.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    Intro,
    News,
    Footer
  }
}
</script>
