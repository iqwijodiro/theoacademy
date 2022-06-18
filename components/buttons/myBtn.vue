<template>
  <v-btn
    nuxt
    depressed
    x-large
    :to="destiny"
    class="myBtn rounded-xl ma-2"
    :class="btnType"
    :color="color"
    @click.prevent="action"
  >
    <!-- :style="btnType" -->
    <slot name="preppendIcon">
      <v-icon> {{ preppendIcon }}</v-icon>
    </slot>
    <div class="mx-2 btn__text">{{ text }}</div>
    <slot name="appendIcon">
      <v-icon> {{ appendIcon }}</v-icon>
    </slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    destiny: {
      type: String,
      default: '/',
    },
    color: {
      type: String,
      default: '#fff',
    },
    action: {
      type: Function,
      default: () => [],
    },
    iconName: {
      type: String,
      default: '',
    },
    preppendIcon: {
      type: String,
      default: '',
    },
    appendIcon: {
      type: String,
      default: '',
    },
  },
  computed: {
    btnType() {
      return this.color === 'primary' ? 'bg-primary' : 'bg-secondary'
    },
  },
}
</script>

<style lang="scss" scoped>
.myBtn {
  padding: 0.6rem 1.2rem !important;
  color: #373737 !important;
  transition: all 0.2s ease-out;
  .btn__text {
    font-size: 1.1rem;
    text-transform: none !important;
    font-weight: 600 !important;
    letter-spacing: normal;
  }
  &:hover {
    color: #fff !important;
  }
}
.bg-primary {
  background-color: $blue-sec-light !important;
  &:hover {
    background-color: $blue-sec-mid !important;
  }
}
.bg-secondary {
  background-color: $purple-primary !important;
  color: #fff !important;
  &:hover {
    background-color: $blue-sec-light !important;
  }
}
</style>
