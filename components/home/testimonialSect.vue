<template>
  <section class="testimonials">
    <v-container class="text-center">
      <h2 v-animate-on-scroll class="section__title">Nuestro Equipo</h2>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card flat>
            <v-carousel v-animate-on-scroll hide-delimiters cycle>
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                class="mx-auto"
              >
                <v-card
                  flat
                  height="100%"
                  :max-width="$vuetify.breakpoint.smAndUp ? '80%' : '100%'"
                  class="d-flex justify-center align-center flex-column pa-0 px-sm-10 mx-auto"
                >
                  <v-avatar size="200" class="mb-5" style="border-radius: 50%">
                    <v-img :src="slide.src" width="200" height="200" />
                  </v-avatar>
                  <div class="text__wrapper">
                    <p class="text__lg mt-8">
                      {{ slide.text }}
                    </p>
                    <p class="user__name text__lg">
                      <strong> {{ slide.username }} </strong>
                    </p>
                    <p class="user__role text__lg text-uppercase">
                      {{ slide.role }}
                    </p>
                  </div>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-textarea v-model="giftBookText" filled />
        </v-col>
        <pdf-generator :gift-book-text="giftBookText" />
      </v-row>
    </v-container>
  
  </section>
</template>

<script>
import PdfGenerator from '../pdfGenerator.vue'
export default {
  components: { PdfGenerator },
  data() {
    return {
      giftBookText: null,
      slides: [
        {
          src: require('@/assets/images/hero_bg.png'),
          username: 'Linda',
          text: 'Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme.',
          role: 'developer',
        },
        {
          src: require('@/assets/images/hero_bg.png'),
          username: 'Linda',
          text: 'Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme.',
          role: 'developer',
        },
        {
          src: require('@/assets/images/hero_bg.png'),
          username: 'Linda',
          text: 'Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme.',
          role: 'developer',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  background-color: #fff;
}
</style>
