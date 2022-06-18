<template>
  <section class="hero d-flex justify-center align-start px-md-14">
    <!-- <v-container class="pb-10 mb-10">
      <v-row>
        <v-col cols="12" md="5" class="content__wrapper">
          <appear-frame
            v-if="show"
            :delay="100"
            :duration="600"
            :translate="['0', '35%']"
          >
            <v-card flat color="transparent">
              <h1 class="hero__title mb-3">The God Academy</h1>
              <p class="hero__subtitle mb-3">
                Un lugar para conocer más a Dios
              </p>
              <v-card-actions class="mx-n2 px-0">
                <my-btn
                  text="Conocer más"
                  destiny="/courses"
                  color="primary"
                  class="ma-2"
                />
              </v-card-actions>
            </v-card>
          </appear-frame>
        </v-col>
      </v-row>
    </v-container> -->
    <div class="hero__bg"></div>
    <v-container style="position: absolute; z-index: 3" class="px-14 pt-14">
      <v-row justify="start" align="start" class="px-10">
        <v-col cols="12" md="6" class="pt-10">
          <appear-frame
            v-if="show"
            :delay="100"
            :duration="600"
            :translate="['0', '35%']"
          >
            <v-card max-width="480" color="transparent" flat>
              <h1 class="hero__title mb-8">
                Texto que corresponda <span class="font-blue">propuesta</span>
              </h1>
              <!-- <p class="hero__subtitle mb-3">
                Un lugar para conocer más a Dios
              </p> -->
              <v-card-actions class="mx-n2 px-0">
                <!-- <my-btn
                  text="Conocer más"
                  destiny="/courses"
                  color="primary"
                  class="ma-2"
                /> -->
                <v-row justify="start" no-gutters>
                  <v-col
                    v-for="icon in icons"
                    :key="icon.title"
                    cols="12"
                    md="3"
                    class=""
                  >
                    <v-card
                      height="105"
                      width="90"
                      class="hero__card-option px-3 py-6"
                      color="white"
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
                        <p class="text-sm font-weight-bold font-gray">
                          {{ icon.title }}
                        </p>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </appear-frame>
        </v-col>
      </v-row>
    </v-container>
    <img
      src="https://res.cloudinary.com/db0gjdwr0/image/upload/v1655565735/theoacademy-assets/hero_img_model_qelum4.png"
      class="hero_model"
    />
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
      icons: [
        {
          title: 'School',
          vector: require('~/assets/images/Vector1.svg'),
        },
        {
          title: 'Advanced',
          vector: require('~/assets/images/Vector2.svg'),
        },
        {
          title: 'For Group',
          vector: require('~/assets/images/Vector3.svg'),
        },
      ],
    }
  },
  mounted() {
    this.show = true
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  .hero__bg {
    background-image: url(https://res.cloudinary.com/db0gjdwr0/image/upload/v1655564817/theoacademy-assets/hero_bg-shape_fysbal.svg);
    background-size: cover;
    transform: rotate(-2deg);
    position: absolute;
    width: 105vw;
    height: 110vh;
    margin-top: -220px;
    z-index: 1;
  }
  .hero__title {
    color: #fff;
  }
  .hero__card-option {
    background: #f5f5f5;
    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
      inset 12px 12px 24px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    // transform: rotate(-90deg);
  }
  .hero__subtitle {
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .hero_model {
    position: absolute;
    width: 64%;
    // height: auto;
    top: 0px;
    left: 38%;
    z-index: 2;
  }
}
</style>
