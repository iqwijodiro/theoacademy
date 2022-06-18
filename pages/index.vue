<template>
  <div class="index">
    <hero-index />
    <versicle-sect />
    <top-courses />
    <stay-Connected />
    <new-born />
    <testimonial-sect />
    <client-sect />
  </div>
</template>

<script>
import heroIndex from '~/components/home/heroIndex.vue'
import VersicleSect from '~/components/home/versicleSect.vue'
import TopCourses from '~/components/home/topCourses.vue'
import StayConnected from '~/components/home/stayConnected.vue'
import NewBorn from '~/components/home/newBorn.vue'
import TestimonialSect from '~/components/home/testimonialSect.vue'
import ClientSect from '~/components/home/clientSect.vue'
export default {
  name: 'HomePage',
  components: {
    heroIndex,
    VersicleSect,
    TopCourses,
    StayConnected,
    NewBorn,
    TestimonialSect,
    ClientSect,
  },
  head() {
    return {
      title: 'Formación teológica online - Theo Academy',
    }
  },
}
</script>
