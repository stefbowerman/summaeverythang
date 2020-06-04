<template>
  <div :class="classes">
    <div class="dialog" role="dialog">
      <div class="modal-title">
        <h3>About</h3>
      </div>
      <div class="modal-body">
        <p>If you can’t feed your community’s growth in-house, take food to the community’s homes.</p>
        <p>Since the March 2020 quarantine, artist Lauren Halsey and her people’s Summaeverythang Community Center have done just that, donating and delivering organic produce from Southern California farms to South Central L.A.</p> 
        <p>Halsey, the center’s founder, says “I was looking forward to opening Summaeverythang—located next door to my studio—in late summer/fall, but Corona stopped that. So, I started thinking of ways to engage the ideologies and thesis of the community center with the community, outside of the physical space.”</p> 
        <p>300 bunches each of collard greens, kale, cilantro; hundreds of pounds of black beans, rice, fingerling potatoes; rainbows of bell peppers, carrots, bananas, apples, blueberries, and more fresh, organic produce were her answer. After consulting closely with Korina Matayas, a high school friend who studied Environmental Law and sustainable food systems, Halsey bought the fruit and veggies. Then, alongside her running crew of little cousins, best friends, people from the neighborhood, studio assistants, and partner, Monique McWilliams, Halsey organized the cornucopia into 200 boxes and delivered them to Nickerson Gardens and other homes in Watts.</p> 
        <p>Since then, Summaeverythang has delivered 750 more. All fresh, organic, and free.</p>
        <p>Such service, though not part of Halsey’s initial plan, is consistent with the spirit of Summaeverythang Community Center, which is founded on an ethos of empowerment through self-directed action.</p> 
        <p>“There’s a lecture from 1975 that I’ve listened to like 200 times since 2014,” says Halsey. “Toni Morrison says that for Black people to be dependent on media and government ‘is hopeless, ridiculous, childish, and it’s an affront. …We didn’t used to have to wait for the word.’”</p> 
        <p>“This has inspired me how to be and act,” Halsey adds.</p> 
        <p>Standing in South Central, Summaeverythang Community Center is that inspiration made concrete. “I began it as a space to support and sustain all sorts of intelligence in the hood—from academic to intellectual. Summaeverythang. Capoiera, tutoring, artmaking, film programs, gardening, field trips, etc.” The center is a site to develop Black and Brown empowerment: personal, political, economic, and sociocultural.</p>
        <p>Halsey hopes to collaborate with other community centers to reach more of Watts, South Central, and Compton.</p>
        <p>Regardless, for the foreseeable future, Summaeverythang plans to continue serving its community where it lives, drawing on the spirit of the Black Panther Party’s Free Breakfast for School Children Program and other models of self-sufficiency.</p>
        <p>“The history of Black people in this country is those people who got up and moved,” Toni Morrison says in that 1975 lecture. Halsey and Summaeverythang Community Center is listening and moving.</p>
        <p>— Douglas Kearney</p>
      </div>
      <div class="modal-footer">
        <span class="btn btn-xs btn-red" @click="closeModal()">Close</span>
      </div>
    </div>
    <span class="close" @click="closeModal()">CLOSE</span>    
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        'modal',
        { 'is-open': this.show }
      ]
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("CLOSE_ABOUT_MODAL")
    }
  }
}
</script>

<style lang="scss">

</style>