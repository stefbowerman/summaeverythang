<template>
  <div class="team bg-gradient">
    <PageTitle
      title="Summaeverythang Team"
      subtitle="Summaeverythang is supported by a dedicated team of community volunteers"
    />    
    <div class="container">
      <div class="team-grid">
        <TeamMember
          name="Monique McWilliams"
          image="/team-monique.jpg"
          bio="<p>NO ONE should have to deal with food insecurity and its detrimental effects. Disproportionately and overwhelmingly many of those experiencing this inhumanity are members of MY community. Volunteering with Summaeverythang allows me to directly fight this injustice on their behalf. I view my action as a response to blatant inaction, similar to the Black Panthers’ “Free Food Program”, one of their most noted “Survival Programs”.</p><p>It’s “survival pending the revolution”...</p>"
          instagram="missmeau"
        />
        <TeamMember
          name="Korina Matayas"
          image="/team-korina.jpg"
          bio="<p>My name is Korina Matyas, born and raised in LA. I’m a food and agriculture advocate with a background in sustainable food systems and environmental law and policy. My work aims to support small farms and help communities achieve food sovereignty. Apart from Summaeverythang, I volunteer with <a href='https://instagram.com/agrowingculture' target='_blank'>@agrowingculture</a>, am a farmhand at Yerba Buena Farm, and create edible landscapes with <a href='https://instagram.com/homegrowngardensla' target='_blank'>@homegrowngardensla</a>.</p>"
          instagram="prayforme"
        />
        <TeamMember
          name="Lil D / Breonte Davis"
          image="/team-breonte.jpg"
          bio="<p>I'm Breonte Davis, a carpenter from L.A. I enjoy giving back to my community.</p>"
          instagram="8.dee.24"
        />
        <TeamMember
          name="E-Man / Emmanuel Carter"
          image="/team-emmanuel.jpg"
          bio="<p>My name is Emmanuel Carter. I’m a native from LA. My occupation and passion is rapping and I'm also a art handler for Lauren Halsey. I’m out of Watts and South Central and I love my communities. I've been giving back to my friends and family since 2000 to present. I love giving back to my community and I love to put smiles on my people’s faces and helping people who less fortunate.</p>"
          instagram="justcallme_mr.carter"
        />
        <TeamMember
          name="Louis Taylor"
          image="/team-louis.jpg"
          bio="<p>I'm Louis Taylor, a carpenter from LA. I love helping and out seeing the joy in people that are less fortunate bc I’m from the same places and willing to do all I can to help anyone in need.</p>"
          instagram="ludawg2.1"
        />
        <TeamMember
          name="Anthony Creeden"
          image="/team-anthony.jpg"
          bio="<p>Born in Washington DC, paintings in L. A. by way of Austin and Chicago. Putting creative skill sets to use for good people/great things.</p>"
          instagram="anthonybcreeden"
        />
        <TeamMember
          name="Aujané"
          image="/team-aujane.jpg"
          bio="<p>I enjoyed packing the bags and helping out to give back to my community. It's been a great opportunity because I've never done anything big like this before.</p>"
        />
        <TeamMember
          name="Bop Bop / D'Yani"
          image="/team-bop-bop.jpg"
          bio="<p>I had fun packing food boxes and I love being black.</p>"
        />
        <TeamMember
          name="Baby D / Dael"
          image="/team-baby-d.jpg"
          bio="<p>I enjoy packing food boxes and helping out black community.</p>"
        />
        <TeamMember
          name="Alex Aispuro"
          image="/team-alex.jpg"
          bio="<p>My name is Alex and im helping out because i know its for a good cause. And its going to the people who need it.</p>"
        />        
        <TeamMember
          name="Loda / Lauren Halsey"
          image="/team-lauren.jpg"
          bio="<p>Summaeverythang Community Center's weekly organic produce donation is an extension of my art practice centered around and for the advancement of South Central LA and Watts where my family has lived since the 1920s.</p>"
          instagram="summaeverythang"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import TeamMember from '~/components/TeamMember.vue'

export default {
  components: {
    PageTitle,
    TeamMember
  }
}
</script>

<style lang="scss">
.team {
  padding: 50px 0 100px;
  color: $white;

  @media (min-width: $screen-md-min) {
    padding: 100px 0;
  }
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px 30px;
  // grid-template-areas: ". . ." ". . .";
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: $screen-xs-min) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: $screen-md-min) {
    grid-template-columns: 1fr 1fr 1fr;
  }  
}
</style>
