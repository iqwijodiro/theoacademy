<template>
  <div class="index">
    <!-- <hero-index /> -->
    <her-index-test />
    <intro-section />
    <versicle-sect />
    <top-courses />
    <stay-Connected />
    <new-born />
    <testimonial-sect />
    <client-sect />
  </div>
</template>

<script>
// import heroIndex from '~/components/home/heroIndex.vue'
import VersicleSect from '~/components/home/versicleSect.vue'
import TopCourses from '~/components/home/topCourses.vue'
import StayConnected from '~/components/home/stayConnected.vue'
import NewBorn from '~/components/home/newBorn.vue'
import TestimonialSect from '~/components/home/testimonialSect.vue'
import ClientSect from '~/components/home/clientSect.vue'
import IntroSection from '~/components/home/introSection.vue'
import HerIndexTest from '~/components/home/herIndexTest.vue'
export default {
  name: 'HomePage',
  components: {
    // heroIndex,
    VersicleSect,
    TopCourses,
    StayConnected,
    NewBorn,
    TestimonialSect,
    ClientSect,
    IntroSection,
    HerIndexTest
},
  head() {
    return {
      title: 'Formación teológica online - Theo Academy',
    }
  },
}
</script>
