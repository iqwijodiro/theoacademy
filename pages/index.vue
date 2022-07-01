<template>
  <div class="index">
    <her-index-test />
    <intro-section />
    <benefits-section />
    <services-section />
    <theo-courses />
  </div>
</template>

<script>
import ServicesSection from '../components/home/servicesSection.vue'
import TheoCourses from '../components/home/theoCourses.vue'
import HerIndexTest from '~/components/home/herIndexTest.vue'
import IntroSection from '~/components/home/introSection.vue'
import BenefitsSection from '~/components/home/benefitsSection.vue'
export default {
  name: 'HomePage',
  components: {
    IntroSection,
    HerIndexTest,
    BenefitsSection,
    ServicesSection,
    TheoCourses
},
  head() {
    return {
      title: 'Formación teológica online - Theo Academy',
    }
  },
}
</script>
