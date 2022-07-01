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
    class="course__card rounded-b-xl rounded-r-xl rounded-tl-0 overflow-hidden"
  >
    <v-img :src="imgLink" height="200px" class="ma-0 pa-0" :alt="title">
    </v-img>
    <div class="card__wrapper px-3 pt-4">
      <v-row>
        <v-col cols="2" class="mr-2">
          <v-avatar size="65">
            <v-img :src="require('~/assets/images/transparente.png')" />
          </v-avatar>
        </v-col>
        <v-col cols="8">
            <div class="text__wrapper font-dark">
                <h3 class="section__subtitle mb-2 pa-0 fw-600">
                    {{ title }}
                </h3>
                <h4 class="card__subtitle mt-1 mb-2 mx-0 pa-0">
                  {{ subtitle }}
                </h4>
            </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<script>
export default {
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

<style lang="scss" scoped></style>
