<template>
  <section class="process bg-light">
    <v-container>
      <v-row justify="center" align="center">
        <v-col
          v-animate-on-scroll
          cols="12"
          md="6"
          class="px-5 px-sm-4 font-dark text-center"
        >
          <div class="image__wrapper">
            <v-img
              :src="require('~/assets/images/logo_brand_card_square.png')"
              contain
              loading="lazy"
            ></v-img>
            <p class="text__mid mt-2">1 Timoteo 2:14</p>
          </div>
        </v-col>
        <v-col
          v-animate-on-scroll
          cols="12"
          md="6"
          class="px-5 font-dark px-sm-12"
        >
          <div class="text__wrapper">
            <h2 class="section__title mb-4 font-dark">
              Como acompañantes en el proceso de educación
            </h2>
            <p class="text__lg mb-4">
              En esta fase le ofrecemos a las iglesias todo un sistema de
              acompañamiento para crear las condiciones de formación a la
              feligresía ademas de realizar diversos estudios sobre el nivel de
              conocimiento existente, con el fin de preparar estudios extensos
              que generen altos niveles de conocimiento y Relacion Intima con el
              Señor por parte de los miembros del cuerpo de Cristo.
              <br /><br />
              <span class="font-purple">
                Capacitamos a todo el cuerpo de Cristo:</span
              >
              los que imparten y los que reciben impartición de la Santa palabra
              de Dios. <br /><br />
              Nuestro equipo espera conocer tu iglesia y acompañarte en el
              recorrido del conocimiento de Dios.
            </p>
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
.training {
  color: #fff;
}
</style>
