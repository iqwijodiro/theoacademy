<template>
  <div class="training">
    <hero-training />
    <academy-offer />
    <course-searcher id="courses" />
    <courses-sect />
    <program-sect id="programs" />
  </div>
</template>

<script>
import HeroTraining from '~/components/trainingCenter/heroTraining.vue'
import AcademyOffer from '~/components/trainingCenter/academyOffer.vue'
import CourseSearcher from '~/components/trainingCenter/courseSearcher.vue'
import CoursesSect from '~/components/trainingCenter/coursesSect.vue'
import ProgramSect from '~/components/trainingCenter/programSect.vue'
export default {
  components: {
    HeroTraining,
    AcademyOffer,
    CourseSearcher,
    CoursesSect,
    ProgramSect,
  },
  head() {
    return {
      title: 'Centro de Formación - Theo Academy',
    }
  },
}
</script>

<style lang="scss" scoped></style>
