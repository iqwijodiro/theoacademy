<template>
  <v-card id="navbar" flat tile>
    <v-app-bar
app height="95" min-height="75" width="100%" scroll-threshold="500" tag="header" color="#000"
      class="px-0">
      <v-container class="d-flex justify-center align-center align-self-baseline py-0 px-lg-14">
        <v-app-bar-title class="mr-5">
          <nuxt-link to="/">
            <img
:src="require('~/assets/images/logo-brand.png')" width="100%" height="95" contain
              class="d-block mt-n1" />
          </nuxt-link>
        </v-app-bar-title>
        <!-- <v-spacer></v-spacer> -->
        <nav v-if="$vuetify.breakpoint.mdAndUp" class="nav transparent d-flex align-center mx-5">
          <!-- <v-row align="end" class="pt-0"> -->
          <!-- <v-col> -->
          <nuxt-link v-for="link in links" :key="link.title" :to="link.url" class="nav__link ma-4">
            <h3>{{ link.title }}</h3>
          </nuxt-link>
          <nuxt-link to="/trainingCenter" class="nav__link ma-4">
            <v-menu dark open-on-hover bottom offset-y>
              <template #activator="{ on, attrs }">
                <h3 v-bind="attrs" v-on="on">
                  Formación
                  <v-icon color="#fff"> mdi-menu-down </v-icon>
                </h3>
              </template>
              <v-list class="nav">
                <v-list-item v-for="(droplink, i) in dropdown" :key="i">
                  <v-list-item-title>
                    <nuxt-link :to="droplink.url" class="nav__link nav__link-drop">
                      <h3>
                        {{ droplink.title }}
                      </h3>
                    </nuxt-link>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </nuxt-link>
          <nuxt-link to="/ourBlog" class="nav__link ma-4">
            <h3>Blog</h3>
          </nuxt-link>
          <nuxt-link to="/contactUs" class="nav__link ma-4">
            <h3>Contáctanos</h3>
          </nuxt-link>
          <div class="d-flex justify-center align-center mx-5">
            <my-btn text="Ingresar" destiny="/paymentPage" color="primary" append-icon="mdi-login-variant" />
          </div>
          <!-- </v-col> -->
          <!-- </v-row> -->
        </nav>
        <v-btn
v-if="$vuetify.breakpoint.smAndDown" class="align-self-center animated-icon ani" icon color="#fff"
          @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="drawer" :left="right" dark temporary fixed>
      <v-img :src="require('~/assets/images/logo-brand.png')" width="80%" max-height="95" contain />
      <v-list nav dense>
        <v-list-item-group class="d-flex flex-column pa-1 mx-1">
          <v-list-item v-for="(link, i) in links" :key="i" class="pa-2">
            <v-icon class="mr-2">
              {{ link.icon }}
            </v-icon>
            <nuxt-link :to="link.url">
              <v-list-item-title class="nav__link" v-text="link.title" />
            </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import myBtn from '~/components/buttons/myBtn.vue'
export default {
  components: { myBtn },
  data() {
    return {
      // scrollInvoked: 0,
      // isShrinking: true,
      // height: 95,
      // minHeight: 70,
      // scrollAm: 300,
      drawer: false,
      right: true,
      tabs: false,
      links: [
        {
          title: 'Home',
          url: '/',
          icon: 'mdi-home',
        },
        {
          title: 'Nosotros',
          url: '/aboutUs',
          icon: 'mdi-account-group',
        },
      ],
      dropdown: [
        {
          title: 'Cursos',
          url: '/trainingCenter/#courses',
          icon: 'mdi-lightbulb-on-10',
        },
        {
          title: 'Programas',
          url: '/trainingCenter/#programs',
          icon: 'mdi-lightbulb-on-10',
        },
        {
          title: 'ForGroups',
          url: '/groups',
          icon: 'mdi-lightbulb-on-10',
        },
      ],
    }
  },
  // methods: {
  //   onScroll() {
  //     this.scrollInvoked++
  //   },
  // },
}
</script>

<style lang="scss" scoped>
// #navbar {
//   .v-toolbar__content {
//     // height: 95px !important;
//   }
// }
.nav {
  .nav__link,
  .nav__link.nav__link-drop {
    h3 {
      color: #fff !important;
    }
  }
  .nav__link.nav__link-drop {
    padding: 1rem;
    border-bottom: 1px solid #fff;
  }
}
</style>
