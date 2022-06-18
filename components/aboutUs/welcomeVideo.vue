<template>
  <section class="welcome bg-dark">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" class="px-3">
          <div v-animate-on-scroll class="text__wrapper font-light px-sm-8">
            <h2 class="section__title mb-4">Bienvenidos a The God Academy</h2>
            <p class="text__lg mb-8">
              Disfruta este breve material que te cuenta un poco de los que
              somos, lo que hacemos y como anhelamos aportar a tu crecimiento
              espiritual. Creemos que se abrirán tus ojos espirituales y el
              conocimiento de Dios cambiará tu vida para siempre.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="px-3">
          <div v-animate-on-scroll class="video__wrapper px-sm-8 text-center">
            <video
              v-animate-on-scroll
              src="https://res.cloudinary.com/db0gjdwr0/video/upload/v1653942263/tga_assets/Video_Tutorial_Teo_Academy_-_CENTI_Sur_EEUU_ivrqvq.mp4"
              controls
              width="100%"
              class="video__item embedded-video mt-14 mt-sm-0 rounded-lg mr-5"
            >
              <source
                src="https://res.cloudinary.com/db0gjdwr0/video/upload/v1653942263/tga_assets/Video_Tutorial_Teo_Academy_-_CENTI_Sur_EEUU_ivrqvq.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/db0gjdwr0/video/upload/v1653925919/tga_assets/Video-Tutorial-Teo-Academy-CENTI-Sur-EEUU_zvy1ag.ogg"
                type="video/ogg"
              />
            </video>
            <p class="text__mid mt-2">Ezequiel 11:19-20</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.welcome {
  color: #fff;
}
</style>
