<template>
  <section class="programs pb-0">
    <v-container class="text-center pb-15">
      <h2 v-animate-on-scroll class="title__xl mb-8">Programas</h2>
    </v-container>
    <section class="bg__dark-mid">
      <v-container class="px-4 py-0">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6">
            <v-card flat class="pa-8">
              <v-row justify="center" align="center" class="ma-1">
                <v-col cols="12" md="7" class="pa-0">
                  <div v-animate-on-scroll class="text__wrapper">
                    <h4 class="font-blue text__mid font-weight-light mb-3">
                      Programas
                    </h4>
                    <h3 class="font-dark font-weight-bold text__lg mb-3">
                      Teo 101 Beginner
                    </h3>
                    <p class="text__mid mb-12">
                      Conoce cuáles son los primeros pasos de un cristiano para
                      el desarrollo de una fe firme y trascendental; descubre la
                      maravillosa experiencia de vivir como hijo (a) de Dios.
                    </p>
                  </div>
                  <div v-animate-on-scroll class="card__actions">
                    <my-btn
                      text="Más detalles"
                      destiny="/trainingCenter/#courses"
                      class="ml-n1 bg-green font-dark px-2"
                    />
                  </div>
                </v-col>
                <v-col cols="12" md="5" class="py-0 px-4">
                  <v-img
                    v-animate-on-scroll
                    :src="
                      require('../../assets/images/logo_brand_card_square.png')
                    "
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card flat class="pa-8">
              <v-row justify="center" align="center" class="ma-1">
                <v-col cols="12" md="7" class="pa-0">
                  <div v-animate-on-scroll class="text__wrapper">
                    <h4 class="font-blue text__mid font-weight-light mb-3">
                      Programas
                    </h4>
                    <h3 class="font-dark font-weight-bold text__lg mb-3">
                      Teo 102 Insider
                    </h3>
                    <p class="text__mid mb-12">
                      El sub-programa Teo 102 tiene por objeto facilitar al
                      participante una experiencia personal con Dios y
                      acompañarle en un proceso de sanidad.
                    </p>
                  </div>
                  <div v-animate-on-scroll class="card__actions">
                    <my-btn
                      color="secondary"
                      text="Más detalles"
                      destiny="/trainingCenter/#courses"
                      class="ml-n1 px-2"
                    />
                  </div>
                </v-col>
                <v-col cols="12" md="5" class="py-0 px-4">
                  <v-img
                    v-animate-on-scroll
                    :src="
                      require('../../assets/images/logo_brand_card_square.png')
                    "
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="bg__green-dark">
      <v-container class="px-4 py-0">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6">
            <v-card flat class="pa-8">
              <v-row justify="center" align="center" class="ma-1">
                <v-col cols="12" md="7" class="pa-0">
                  <div v-animate-on-scroll class="text__wrapper">
                    <h4 class="font-blue text__mid font-weight-light mb-3">
                      Programas
                    </h4>
                    <h3 class="font-dark font-weight-bold text__lg mb-3">
                      Teo 103 Pre Active
                    </h3>
                    <p class="text__mid mb-12">
                      Conoce cuáles son los primeros pasos de un cristiano para
                      el desarrollo de una fe firme y trascendental; descubre la
                      maravillosa experiencia de vivir como hijo (a) de Dios.
                    </p>
                  </div>
                  <div v-animate-on-scroll class="card__actions">
                    <my-btn
                      text="Más detalles"
                      destiny="/trainingCenter/#courses"
                      class="ml-n1 bg-green font-dark px-2"
                    />
                  </div>
                </v-col>
                <v-col cols="12" md="5" class="py-0 px-4">
                  <v-img
                    v-animate-on-scroll
                    :src="
                      require('../../assets/images/logo_brand_card_square.png')
                    "
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card flat class="pa-8">
              <v-row justify="center" align="center" class="ma-1">
                <v-col cols="12" md="7" class="pa-0">
                  <div v-animate-on-scroll class="text__wrapper">
                    <h4 class="font-blue text__mid font-weight-light mb-3">
                      Programas
                    </h4>
                    <h3 class="font-dark font-weight-bold text__lg mb-3">
                      Teo 103 Active
                    </h3>
                    <p class="text__mid mb-12">
                      El sub-programa Teo 102 tiene por objeto facilitar al
                      participante una experiencia personal con Dios y
                      acompañarle en un proceso de sanidad.
                    </p>
                  </div>
                  <div v-animate-on-scroll class="card__actions">
                    <my-btn
                      color="secondary"
                      text="Más detalles"
                      destiny="/trainingCenter/#courses"
                      class="ml-n1 px-2"
                    />
                  </div>
                </v-col>
                <v-col cols="12" md="5" class="py-0 px-4">
                  <v-img
                    v-animate-on-scroll
                    :src="
                      require('../../assets/images/logo_brand_card_square.png')
                    "
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script>
import MyBtn from '../buttons/myBtn.vue'
export default { components: { MyBtn } }
</script>

<style lang="scss" scoped>
.bg__dark-mid {
  background-color: #232323;
}
.bg__green-dark {
  background-color: #05c6aa;
}
</style>
