<template>
  <v-app class="app">
    <nav-bar />
    <v-main class="ma-0 px-0 pt-0">
      <Nuxt />
    </v-main>
    <my-footer />
  </v-app>
</template>

<script>
import NavBar from '~/components/layout/navBar'
import MyFooter from '~/components/layout/MyFooter'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    MyFooter,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style lang="scss" scoped>
.app {
  font-family: $general-font;
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    background-color: #fff;
  }
}
</style>
