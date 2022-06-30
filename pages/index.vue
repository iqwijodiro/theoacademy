<template>
  <div class="index">
    <her-index-test />
    <intro-section />
    <benefits-section />
    <services-section />
  </div>
</template>

<script>
import ServicesSection from '../components/home/servicesSection.vue'
import HerIndexTest from '~/components/home/herIndexTest.vue'
import IntroSection from '~/components/home/introSection.vue'
import BenefitsSection from '~/components/home/benefitsSection.vue'
export default {
  name: 'HomePage',
  components: {
    IntroSection,
    HerIndexTest,
    BenefitsSection,
    ServicesSection
},
  head() {
    return {
      title: 'Formación teológica online - Theo Academy',
    }
  },
}
</script>
