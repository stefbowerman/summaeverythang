<template>
  <main>
    <Hero />
    <Footer />
    <Intro />
    <About />
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Intro from '~/components/Intro.vue'
import About from '~/components/About.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    Intro,
    About,
    Footer
  },
  transition: 'fade'
}
</script>
