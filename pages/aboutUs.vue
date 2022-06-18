<template>
  <div class="about-us">
    <HeroAboutUs />
    <training-center />
    <education-process />
    <welcome-video />
  </div>
</template>

<script>
import HeroAboutUs from '~/components/aboutUs/heroAboutUs.vue'
import TrainingCenter from '~/components/aboutUs/trainingCenter.vue'
import EducationProcess from '~/components/aboutUs/educationProcess.vue'
import WelcomeVideo from '~/components/aboutUs/welcomeVideo.vue'
export default {
  components: { HeroAboutUs, TrainingCenter, EducationProcess, WelcomeVideo },
  head() {
    return {
      title: '¿Quienes Somos? - Theo Academy',
    }
  },
}
</script>

<style></style>
