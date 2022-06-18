<template>
  <section class="verse">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
          class="verse__wrapper px-5 pa-sm-0"
          style="
            border-top: 3px solid #00ffe9;
            border-bottom: 3px solid #00ffe9;
          "
        >
          <p v-animate-on-scroll class="mt-6 text__special">
            Nacimos del corazón de Dios para traer formación <br />
            que te lleve a la Construcción de una Relación con <br />
            El Espíritu de Dios. Únete a nuestra comunidad.
            <br /><br />Versículo
          </p>
          <!-- <hr class="line" /> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.verse {
  background-color: #fff;
  color: #383838;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.verse__wrapper {
  max-width: 950px !important;
}
p.text__special {
  text-align: center;
  margin: 1.5rem 0;
}

@include respond(phone) {
  .verse__wrapper {
    p {
      font-size: 1.4rem;
    }
  }
}
</style>
