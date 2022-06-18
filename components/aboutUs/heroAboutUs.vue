<template>
  <section class="hero about d-flex align-center">
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
                Formando con valores
                <strong class="font-weight-bold">Cristianos</strong>
              </h1>
              <p class="text__lg mb-4">
                The God Academy es un espacio virtual de formación que nació de
                la necesidad de estudiar de la palabra de Dios, entendiendo que
                la misma es nuestro
                <strong class="font-weight-bold">MANUAL DE VIDA</strong> y que
                lo contenido allí nos ingresará en el
                <strong class="font-weight-bold">PLAN DE DIOS</strong> para
                siempre, y nos mostrará la promesa de la vida eterna
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
.hero.about {
  min-height: 100vh;
}
</style>
