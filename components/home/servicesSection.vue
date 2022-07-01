<template>
  <section>
    <v-container>
      <v-row justify="center" class="fill-height">
        <v-col cols="12" md="10">
          <v-card
            elevation="0"
            class="rounded-xl"
          >
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pa-0">
                <v-img
                  src="https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627343/theoacademy-assets/theoschool_img_dpsyno.webp"
                  width="100%"
                  height="100%"
                  max-height="450px"
                />
              </v-col>
              <v-col cols="12" md="6" class="ma-0" align-self="center">
                <div class="text__wrapper pa-5 mx-8 text-left">
                  <h2 class="section__subtitle mb-5 font-blue fw-600">
                    Theo School
                  </h2>
                  <p class="text__lg font-dark mb-10">
                    Dos secciones con texto a la izquierda, imagen a la derecha
                    y viceversa, sumándole un botón a Escuela Bíblica.
                  </p>
                  <div class="d-flex justify-end align-center">
                    <v-btn
                      text
                      right
                      color="#FCBB34"
                      class="fw-600 font-light text-capitalize"
                      to="/trainingCenter"
                    >
                      <p class="text__mid ma-4">
                        Conoce más
                        <v-icon> mdi-arrow-right </v-icon>
                      </p>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="ma-0" align-self="center">
                <div class="text__wrapper pa-5 mx-8 text-right">
                  <h2 class="section__subtitle mb-5 font-purple fw-600">
                    Theo Advanced
                  </h2>
                  <p class="text__lg font-dark mb-10">
                    Dos secciones con texto a la izquierda, imagen a la derecha
                    y viceversa, sumándole un botón a Escuela Bíblica.
                  </p>
                  <div class="d-flex justify-end align-center">
                    <v-btn
                      text
                      right
                      color="#FCBB34"
                      class="fw-600 font-light text-capitalize"
                      to="/trainingCenter"
                    >
                      <p class="text__mid ma-4">
                        Conoce más
                        <v-icon> mdi-arrow-right </v-icon>
                      </p>
                    </v-btn>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="pa-0">
                <v-img
                  src="https://res.cloudinary.com/db0gjdwr0/image/upload/v1656628548/theoacademy-assets/theoadvanced_img_kbsewx.webp"
                  width="100%"
                  height="100%"
                  max-height="450px"
                  class="ml-n2 mt-n2"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
