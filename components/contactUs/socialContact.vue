<template>
  <div class="social contact">
    <section>
      <v-container class="pa-0">
        <v-row justify="center">
          <v-col cols="12" md="11" class="py-0 px-4 px-sm-8 text-center">
            <h2 v-animate-on-scroll class="section__title mb-8">
              Es importante que sepas
            </h2>
            <p v-animate-on-scroll class="text__lg font-dark">
              Somos un espacio virtual y nuestra comunicación será via
              plataformas digitales, las llamadas aplican en video conferencia,
              en caso que tengamos agentes autorizados para asistirte en tu país
              recibirás visitas para acompañarte, asesorarte o simplemente
              contarte quienes somos.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="">
            <v-img
              v-animate-on-scroll
              width="100%"
              height="300px"
              alt=""
              :src="require('~/assets/images/transparente.png')"
            />
            <div
              v-animate-on-scroll
              class="text__wrapper pa-sm-8 px-5 text-center"
            >
              <h2 class="section__subtitle mb-2">Instagram</h2>
              <my-btn text="Comenta" color="primary" class="ma-2" />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              v-animate-on-scroll
              width="100%"
              height="300px"
              alt=""
              :src="require('~/assets/images/transparente.png')"
            />
            <div
              v-animate-on-scroll
              class="text__wrapper pa-sm-8 px-5 text-center"
            >
              <h2 class="section__subtitle mb-2">Facebook</h2>
              <my-btn text="Dale Like" class="btnFB" />
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12" md="6">
            <v-img
              v-animate-on-scroll
              width="100%"
              height="300px"
              alt=""
              :src="require('~/assets/images/transparente.png')"
            />
            <div
              v-animate-on-scroll
              class="text__wrapper pa-sm-8 px-5 text-center"
            >
              <h2 class="section__subtitle mb-2">Youtube</h2>
              <my-btn text="Subscribete" class="btnYT" />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              v-animate-on-scroll
              width="100%"
              height="300px"
              alt=""
              :src="require('~/assets/images/transparente.png')"
            />
            <div
              v-animate-on-scroll
              class="text__wrapper pa-sm-8 px-5 text-center"
            >
              <h2 class="section__subtitle mb-2">Nuestra Web</h2>
              <my-btn text="Visítanos" color="secondary" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import MyBtn from '../buttons/myBtn.vue'
export default { components: { MyBtn } }
</script>

<style lang="scss" scoped>
.social.contact {
  min-height: 100vh;
  .btnFB {
    background-color: rgba($color: #05c6aa, $alpha: 1) !important;
    &:hover {
      background-color: #037161 !important;
    }
  }
  .btnYT {
    background-color: rgba($color: #0597f2, $alpha: 1) !important;
    &:hover {
      background-color: #03629d !important;
    }
  }
}
</style>
