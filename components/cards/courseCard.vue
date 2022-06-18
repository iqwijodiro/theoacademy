<template>
  <v-card
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :width="width"
    :height="height"
    elevation="5"
    light
    rounded="lg"
    class="course__card"
  >
    <figure>
      <v-img :src="imgLink" height="200px" class="ma-0 pa-0" :alt="title">
      </v-img>
    </figure>
    <div class="card__wrapper px-3 pt-4">
      <v-row>
        <v-col cols="2" class="mr-2">
          <v-avatar size="65">
            <v-img :src="require('~/assets/images/transparente.png')" />
          </v-avatar>
        </v-col>
        <v-col cols="8">
          <h2 class="section__subtitle mb-2 pa-0">
            <strong>
              {{ title }}
            </strong>
          </h2>
          <h3 class="card__subtitle mt-1 mb-2 mx-0 pa-0">
            {{ subtitle }}
          </h3>
        </v-col>
      </v-row>
    </div>
    <v-card-actions class="px-8 pb-3">
      <my-btn text="Comprar" destiny="/paymentPage" color="primary" />
      <v-spacer />
      <v-btn icon @click.prevent="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <p class="card__text pa-4">
          {{ description }}
        </p>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
import myBtn from '../buttons/myBtn.vue'
export default {
  components: { myBtn },
  props: {
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    minWidth: {
      type: String,
      default: '',
    },
    minHeight: {
      type: String,
      default: '',
    },
    maxWidth: {
      type: String,
      default: '',
    },
    maxHeight: {
      type: String,
      default: '',
    },
    imgLink: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      course: {},
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.course__card {
  .card__wrapper {
    // height: 300px;
  }
}
</style>
