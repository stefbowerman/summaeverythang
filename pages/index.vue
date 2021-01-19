<template>
  <main>
    <Hero />
    <Intro />
    <About />
    <Gallery />
  </main>
</template>

<script>
import Hero from '~/components/Hero'
import Intro from '~/components/Intro'
import About from '~/components/About'
import Gallery from '~/components/Gallery'

export default {
  components: {
    Hero,
    Intro,
    About,
    Gallery
  },
  transition: 'fade'
}
</script>
