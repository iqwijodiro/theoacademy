<template>
  <section class="training bg-dark">
    <v-container>
      <v-row justify="center">
        <v-col
          v-animate-on-scroll
          cols="12"
          md="6"
          class="px-5 font-light px-sm-12"
        >
          <h2 class="section__title mb-4 font-light">
            Como Centro de Formación
          </h2>
          <p class="text__lg mb-4">
            Seremos durante tu estadia un centro de formación online donde
            encontraras, conocimiento de Dios establecido en su Santa Palabra,
            impartido por ministros y ministras del Señor que anhelan que puedas
            disfrutar de la plenitud de una Relación con nuestro amado.
            <br /><br />
            Dentro de la verdad que enseñamos se encuentra el tener una Relacion
            estrecha con el Espiritu Santo de Dios, verdadero capacitador para
            todas las cosas. <br /><br />
            No esperes te invitamos a disfrutar de nuestros <br />
            <span class="font-purple"> cursos publicados. </span>
          </p>
        </v-col>
        <v-col
          v-animate-on-scroll
          cols="12"
          md="6"
          class="px-5 px-sm-8 font-light text-center"
        >
          <v-img
            :src="require('~/assets/images/logo-cutted.png')"
            contain
            loading="lazy"
          ></v-img>
          <p class="text__mid mt-2">Salmos 25:14</p>
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
