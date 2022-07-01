<template>
  <section class="hero px-0 pt-md-0">
    <div class="hero__bg"></div>
    <v-container fluid class="px-0 pt-0">
      <v-row justify="end" class="px-0 ma-0">
        <v-col
          :cols="$vuetify.breakpoint.mdAndUp ? '4' : '12'"
          class="ma-0"
          align-self="start"
        >
          <appear-frame
            v-if="show"
            :delay="100"
            :duration="600"
            :translate="['0', '35%']"
          >
            <v-card max-width="480" color="transparent" flat class="hero__card">
              <h1 class="hero__title mb-8">
                Texto que corresponda <span class="font-blue">propuesta</span>
              </h1>
              <div class="mx-n2 px-0">
                <!-- <v-row justify="start" no-gutters> -->
                  <v-col
                    :cols="$vuetify.breakpoint.smAndUp ? '12' : '4'"
                    class="my-3 my-sm-1 mx-2"
                  >
                  <div class="d-flex flex-column flex-md-row">
                    <v-card
                     v-for="icon in icons"
                    :key="icon.title"
                      v-model="card"
                      height="105"
                      width="90"
                      class="hero__card-option px-2 py-6 mb-5 mr-sm-10"
                      color="white"
                      @click="test(card)"
                    >
                      <div
                        class="d-flex justify-center align-center flex-column"
                      >
                        <img
                          width="35px"
                          height="35px"
                          :src="icon.vector"
                          :alt="icon.title"
                          class="mb-2"
                        />
                        <p class="text__sm font-weight-bold font-gray">
                          {{ icon.title }}
                        </p>
                      </div>
                    </v-card>
                  </div>
                  </v-col>
                  <div v-if="$vuetify.breakpoint.smAndDown" >
                    <v-col
                      class="my-3 my-sm-1 mx-0 pa-0"
                    >
                      <appear-frame
                        :delay="100"
                        :duration="1000"
                        :translate="['100%', '0']"
                      >
                        <v-card
                          class="ma-0"
                          flat
                          color="transparent"
                        >
                          <v-img
                            src="https://res.cloudinary.com/db0gjdwr0/image/upload/v1655565735/theoacademy-assets/hero_img_model_qelum4.png"
                            class="hero_model ma-0"
                            alt="Usuario de Theo Academy"
                          />
                          <!-- <div
                    class="hero_model mb-16"
                    alt="Usuario de Theo Academy"
                  /> -->
                        </v-card>
                      </appear-frame>
                    </v-col>
                  </div>
                <!-- </v-row> -->
              </div>
            </v-card>
          </appear-frame>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="7" class="ma-0 pa-0">
          <appear-frame
            :delay="100"
            :duration="1000"
            :translate="['100%', '0']"
          >
            <v-card flat color="transparent">
              <v-img
                src="https://res.cloudinary.com/db0gjdwr0/image/upload/v1655565735/theoacademy-assets/hero_img_model_qelum4.png"
                class="hero_model ma-0"
                eager
                alt="Usuario de Theo Academy"
              />
              <!-- <div
                  class="hero_model mb-16"
                  alt="Usuario de Theo Academy"
                /> -->
            </v-card>
          </appear-frame>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// import myBtn from '../buttons/myBtn.vue'
import AppearFrame from '../animations/appearFrame.vue'
export default {
  components: {
    // myBtn,
    AppearFrame,
  },
  data() {
    return {
      show: false,
      card: [],
      icons: [
        {
          title: 'School',
          vector: 'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656631879/theoacademy-assets/Vector1_mmjtij.svg',
        },
        {
          title: 'Advanced',
          vector: 'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656631879/theoacademy-assets/Vector2_jppyv4.svg',
        },
        {
          title: 'For Group',
          vector: 'https://res.cloudinary.com/db0gjdwr0/image/upload/v1656631879/theoacademy-assets/Vector3_zwcg2p.svg',
        },
      ],
    }
  },
  mounted() {
    this.show = true
  },
  methods: {
    test(card) {
      console.log('Seleccionaste una modalidad' + card)
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  //   width: 100%;
  //   height: 100%;
  position: relative;
  .col.col-4 {
    padding: 200px 0 0 80px;
  }
  .hero__bg {
    position: absolute;
    width: 100%;
    margin-top: -125px;
    height: 100%;
    background-image: url(https://res.cloudinary.com/db0gjdwr0/image/upload/v1655564817/theoacademy-assets/hero_bg-shape_fysbal.svg);
    background-size: cover;
    background-position: center center;
    transform: rotate3d(-2deg);
  }
  .hero__title {
    color: #fff;
  }
  .hero__card {
    // margin: 0 0 180px 200px;

    .hero__card-option {
      background: #f5f5f5;
      box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
        inset 12px 12px 24px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    }
  }
  .hero_model {
    background-image: url('https://res.cloudinary.com/db0gjdwr0/image/upload/v1655565735/theoacademy-assets/hero_img_model_qelum4.png');
    background-size: cover;
  }
}
@include respond(tab-port) {
  .hero {
    padding: 150px 0 0 0;
    .col.col-4 {
      padding: 0;
    }
  }
}
</style>
