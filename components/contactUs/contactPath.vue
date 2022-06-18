<template>
  <section class="contact path">
    <v-container class="px-4 py-0">
      <div v-animate-on-scroll class="text__wrapper font-light text-center">
        <h2 class="section__title">Contáctanos</h2>
        <h3 class="text__special mt-2">Y con gusto te atenderemos</h3>
      </div>
      <v-row justify="center" align="center" class="mt-8">
        <v-col cols="12" md="6" class="py-0 px-4">
          <v-card
            flat
            class="d-flex flex-column justify-center align-center pa-12"
          >
            <v-icon size="80" color="#766eff" class="mb-8">
              mdi-email-outline
            </v-icon>
            <div v-animate-on-scroll class="text__wrapper text-center">
              <h4 class="card__title mb-2">Email</h4>
              <p class="text__mid mb-2">
                We will reply you as soon as possible
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="py-0 px-4">
          <v-card
            flat
            class="d-flex flex-column justify-center align-center pa-12"
          >
            <v-icon size="80" color="#766eff" class="mb-8">
              mdi-cellphone-check
            </v-icon>
            <div v-animate-on-scroll class="text__wrapper text-center">
              <h4 class="card__title mb-2">Phone</h4>
              <p class="text__mid mb-2">Mon - Fri 09:00 - 18:00</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact.path {
  background-color: #232323;
}
</style>
