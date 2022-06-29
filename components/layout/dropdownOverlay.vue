<template>
  <v-menu
    open-on-hover
    eager
    bottom
    tile
    offset-y
    close-delay="100"
    nudge-bottom="20"
    class="pa-0 mx-auto"
    max-width="1500"
    min-width="1200"
    transition="slide-y-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" text class="text-capitalize" v-on="on">
        <slot name="text" />
        <h3 class="nav__link fw-700">
          {{ linkText }}
          <v-icon color="#fff"> {{ icon }} </v-icon>
        </h3>
      </v-btn>
    </template>
    <v-card
      style="background-color: rgba(155, 53, 222, 0.8)"
      min-height="350"
      max-width="100%"
      class="pa-15"
    >
    <slot name="content" />
    </v-card>
  </v-menu>
</template>

<script>
export default {
    props: {
        linkText: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>

<style></style>
