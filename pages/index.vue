<template>
  <main>
    <Hero />
    <Intro />
    <About />
    <News />
    <Footer />
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Intro from '~/components/Intro.vue'
import About from '~/components/About.vue'
import News from '~/components/News.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    Intro,
    About,
    News,
    Footer
  }
}
</script>
