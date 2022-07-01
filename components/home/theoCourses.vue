<template>
  <section>
    <v-container class="ma-0 px-2">
      <h2 class="section__title font-blue fw-600">Theo School Cursos</h2>
      <v-row justify="center">
        <v-col cols="12" class="px-4 mx-0 mb-8">
          <vue-horizontal
            responsive
            class="horizontal__wrapper horizontal mx-auto"
          >
            <div
              v-for="(course, i) in courses"
              :key="i"
              class="ma-4"
              style="width: 360px"
            >
              <info-card
                :img-link="course.imgSrc"
                width="100%"
                :title="course.title"
                :subtitle="course.subtitle"
                :description="course.description"
              />
            </div>
          </vue-horizontal>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import infoCard from '../cards/infoCard.vue'
export default {
  components: {
    infoCard,
    VueHorizontal,
  },
  data() {
    return {
      slider: null,
      isActive: false,
      courses: [
        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },
        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },

        {
          imgSrc:
            'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627342/theoacademy-assets/pict_blog_g5htq2.webp',
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },
      ],
    }
  },
}
</script>

<style></style>
