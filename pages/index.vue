<template>
  <main>
    <Hero />
    <Intro />
    <About />
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Intro from '~/components/Intro.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Hero,
    Intro,
    About
  },
  transition: 'fade'
}
</script>
