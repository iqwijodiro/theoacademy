<template>
  <section class="courses">
    <v-container class="text-center pb-15">
      <h2 v-animate-on-scroll class="title__xl mb-8">Cursos</h2>
    </v-container>
    <section class="bg-purple">
      <v-container class="px-4 py-0">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6">
            <v-card flat class="pa-8">
              <v-row justify="center" align="center" class="ma-1">
                <v-col cols="12" md="7" class="pa-0">
                  <div v-animate-on-scroll class="text__wrapper">
                    <h4 class="font-blue text__mid font-weight-light mb-3">
                      Cursos
                    </h4>
                    <h3 class="font-dark font-weight-bold text__lg mb-3">
                      El proceso de la iniciación Cristiana
                    </h3>
                    <p class="text__mid mb-12">
                      Conoce cuáles son los primeros pasos de un cristiano para
                      el desarrollo de una fe firme y trascendental.
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
                <v-col v-animate-on-scroll cols="12" md="5" class="py-0 px-4">
                  <v-img
                    :src="require('../../assets/images/transparente.png')"
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
                      Cursos
                    </h4>
                    <h3 class="font-dark font-weight-bold text__lg mb-3">
                      La paternidad de Dios
                    </h3>
                    <p class="text__mid mb-12">
                      Descubre la maravillosa experiencia de vivir como hijo (a)
                      de Dios. Experimenta una relación personal e intima con el
                      autor de la vida.
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
                    :src="require('../../assets/images/transparente.png')"
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
.courses {
  padding: 0;
  section.bg-purple {
    // min-height: 80vh;
    .bg-green {
      color: #383838 !important;
      &:hover {
        color: #fff !important;
        background-color: #00a89a !important;
      }
    }
  }
}
</style>
