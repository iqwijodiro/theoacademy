<template>
  <section class="pt-0">
    <v-container >
      <v-row justify="center" align="center">
        <!-- <v-card
          flat
          height="100%"
          min-height="360"
          width="100%"
          max-width="740"
          class="card__model-new d-flex flex-column flex-sm-row"
        > -->
          <v-col cols="12" md="5" class="ma-0 pa-3">
            <!-- <div class="figure__wrapper"> -->
            <!-- <div class="figure__shaped figure_1" />
              <div class="figure__shaped figure_2" />
              <div class="figure__shaped figure_3" />
              <div class="figure__shaped figure_4" />
              <div class="figure__central figure_5" /> -->
            <v-img
              v-animate-on-scroll
              src="https://res.cloudinary.com/db0gjdwr0/image/upload/v1656627219/theoacademy-assets/square_shaped_twious.svg"
              contain
              max-width="480px"
              max-height="500px"
            />
            <!-- </div> -->
          </v-col>
          <v-col cols="12" md="6">
            <div v-animate-on-scroll class="text__wrapper text-center text-md-left px-5 py-8">
              <h3 class="title__xl font-blue fw-600 mb-8">
                Porqué estudiar con Theo Academy
              </h3>
              <p class="text__xl font-dark">
                Porque somos una opcion que te permite conocer la palabra de Dios como fundamento para tu vida, como lo hacemos?
              </p>
            </div>
          </v-col>
        <!-- </v-card> -->
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card__model-new {
  // border-radius: 60px !important;
  // box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1) !important;
  // .figure__wrapper {
  //   position: relative;
  //   width: 100%;
  //   max-width: 400px;
  //   height: 100%;
  //   min-height: 350px;
  //   .figure__shaped {
  //     width: 205px;
  //     height: 95px;
  //     margin: 0 !important;
  //     position: absolute;
  //     box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
  //       inset 12px 12px 24px rgba(0, 0, 0, 0.25);
  //   }
  //   .figure_1 {
  //     background: #0c2483;

  //     border-radius: 0px 100px 0px 0px;
  //     transform: rotate(-90deg);
  //     top: 15%;
  //     left: 0;
  //   }
  //   .figure_2 {
  //     background: rgba(97, 221, 234, 0.8);

  //     border-radius: 0px 0px 0px 100px;
  //     transform: rotate(-180deg);
  //     top: 10%;
  //     left: 40%;
  //   }
  //   .figure_3 {
  //     background: #9b35de;

  //     border-radius: 0px 0px 0px 100px;
  //     top: 60%;
  //     left: 14%;
  //   }
  //   .figure_4 {
  //     background: #00a5ff;

  //     border-radius: 0px 0px 0px 100px;
  //     transform: rotate(-90deg);
  //     top: 55%;
  //     left: 54%;
  //   }
  //   .figure__central.figure_5 {
  //     position: absolute;
  //     width: 70px;
  //     height: 115px;
  //     background-image: url('~/assets/images/ISOTIPO-TRANSPARENTE1.svg');
  //     top: 120px;
  //     left: 180px;
  //   }
  // }
  // .text__wrapper {
  //   width: 100%;
  //   max-width: 300px;
  //   height: 100%;
  // }
  // @include respond(phone) {
  //   .figure__wrapper {
  //     .figure__shaped {
  //       width: 52.5%;
  //       height: 24%;
  //     }
  //   }
  // }
}
</style>
