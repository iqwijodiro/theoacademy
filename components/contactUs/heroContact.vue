<template>
  <section class="hero contact d-flex align-center bg-green">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" class="text-center py-0 px-4 px-sm-10">
          <appear-frame
            v-if="show"
            :delay="100"
            :duration="600"
            :translate="['0', '35%']"
          >
            <div class="text__wrapper">
              <h1 class="h1 font-weight-light mb-4">
                Forma parte de nuestra
                <strong class="font-weight-bold">Comunidad</strong>
              </h1>
              <p class="text__lg mb-4">
                Dios te bendiga te invitamos a conocernos a través de nuestras
                diversas plataformas y a contactarnos por cualquiera de ellas.
                Estamos dispuestos a ofrecerte toda la información que
                necesites.
              </p>
            </div>
          </appear-frame>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import AppearFrame from '../animations/appearFrame.vue'

export default {
  components: { AppearFrame },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true
  },
}
</script>

<style lang="scss" scoped>
.hero.contact {
  min-height: 100vh;
}
</style>
