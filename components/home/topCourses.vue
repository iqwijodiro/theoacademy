<template>
  <section class="top">
    <v-container>
      <h2 v-animate-on-scroll class="section__title text-center mb-14">
        Lo más Popular
      </h2>
      <v-row justify="center">
        <v-col v-animate-on-scroll cols="12" class="px-4 mx-0 mb-8">
          <vue-horizontal
            responsive
            class="horizontal__wrapper horizontal mx-auto"
          >
            <!-- <v-slide-group
            v-model="slider"
            class="pa-4"
            center-active
            show-arrows
          >
            <v-slide-item > -->
            <div
              v-for="(course, i) in courses"
              :key="i"
              class="ma-4"
              style="width: 360px"
            >
              <course-card
                :img-link="course.imgSrc"
                width="100%"
                :title="course.title"
                :subtitle="course.subtitle"
                :description="course.description"
              />
            </div>
            <!-- </v-slide-item>
          </v-slide-group> -->
          </vue-horizontal>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import courseCard from '../cards/courseCard.vue'
export default {
  components: {
    courseCard,
    VueHorizontal,
  },
  data() {
    return {
      slider: null,
      isActive: false,
      courses: [
        {
          imgSrc: require('~/assets/images/logo_brand_card_square.png'),
          title: 'Cursos',
          subtitle: 'Formacion por temas',
          description:
            'Mobirise is an easy website builder. Just drop site elements to your page, add content and style it to look the way you like.',
        },
        {
          imgSrc: require('~/assets/images/logo_brand_card_square.png'),
          title: 'Programas',
          subtitle: 'Formacion por estudios',
          description:
            'You dont have to code to create your own site. Select one of available themes in the Mobirise Site Maker.',
        },
        {
          imgSrc: require('~/assets/images/logo_brand_card_square.png'),
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },
        {
          imgSrc: require('~/assets/images/logo_brand_card_square.png'),
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },
        {
          imgSrc: require('~/assets/images/logo_brand_card_square.png'),
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },
        {
          imgSrc: require('~/assets/images/logo_brand_card_square.png'),
          title: 'For Groups',
          subtitle: 'Formacion para Grupos',
          description:
            'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        },
        // {
        //   imgSrc: require('~/assets/images/logo_brand_card_square.png'),
        //   title: 'For Groups',
        //   subtitle: 'Formacion para Grupos',
        //   description:
        //     'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        // },
        // {
        //   imgSrc: require('~/assets/images/logo_brand_card_square.png'),
        //   title: 'For Groups',
        //   subtitle: 'Formacion para Grupos',
        //   description:
        //     'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        // },
        // {
        //   imgSrc: require('~/assets/images/logo_brand_card_square.png'),
        //   title: 'For Groups',
        //   subtitle: 'Formacion para Grupos',
        //   description:
        //     'Select the theme that suits you. Each theme in the Mobirise Website Software contains a set of unique blocks.',
        // },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.top {
  min-height: 80vh;
  padding-bottom: 1rem;
  background-color: #fff;
  h2 {
    color: #383838;
  }
  .horizontal__wrapper {
    min-height: 580px;
    // width: 100%;
    // max-width: 1300px;
    // display: flex;
    // justify-content: center;
    align-items: flex-start;
  }
}
</style>
