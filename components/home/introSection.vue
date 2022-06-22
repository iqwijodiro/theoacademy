<template>
  <section>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-card height="100%" min-height="360" width="100%" max-width="740" class="card__model-new d-flex flex-column flex-sm-row">

                <div class="figure__wrapper">
                  <div class="figure__shaped figure_1" />
                  <div class="figure__shaped figure_2" />
                  <div class="figure__shaped figure_3" />
                  <div class="figure__shaped figure_4" />
                  <div class="figure__central figure_5" />
                </div>
                <div class="text__wrapper px-5 py-8">
                    <h3 class="section__subtitle font-blue fw-600">Escuela Bíblica</h3>
                    <p class="text__mid">
                      Dos secciones con texto a la izquierda, imagen a la derecha y
                      viceversa, sumándole un botón a Escuela Bíblica.
                    </p>

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
.card__model-new {
  border-radius: 60px !important;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1) !important;
  .figure__wrapper {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 100%;
    min-height: 350px;
    .figure__shaped {
      width: 205px;
      height: 95px;
      margin: 0 !important;
      position: absolute;
    }
    .figure_1 {
      background: #0c2483;
      box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
        inset 12px 12px 24px rgba(0, 0, 0, 0.25);
      border-radius: 0px 100px 0px 0px;
      transform: rotate(-90deg);
      top: 50px;
      left: 0;
    }
    .figure_2 {
      background: rgba(97, 221, 234, 0.8);
      box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
        inset 12px 12px 24px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 0px 100px;
      transform: rotate(-180deg);
      top: 30px;
      left: 160px;   

    }
    .figure_3 {
      background: #9b35de;
      box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
        inset 12px 12px 24px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 0px 100px;
      top: 210px;
      left: 55px;
    }
    .figure_4 {
      background: #00a5ff;
      box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
        inset 12px 12px 24px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 0px 100px;
      transform: rotate(-90deg);
      top: 190px;
      left: 215px;
    }
    .figure__central.figure_5 {
        position: absolute;
        width: 70px;
        height: 115px;
        background-image: url('~/assets/images/ISOTIPO-TRANSPARENTE1.svg');
      top: 120px;
      left: 180px;
    }
  }
  .text__wrapper {
    width: 100%;
    max-width: 300px;
    height: 100%;
  }
}
</style>
