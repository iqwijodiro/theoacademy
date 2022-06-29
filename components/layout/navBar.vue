<template>
  <v-card id="navbar" flat tile class="pa-0">
    <v-app-bar
      app
      tag="header"
      height="95"
      color="#9B35DE"
      elevate-on-scroll
      class="pa-0"
    >
      <v-container class="d-flex justify-space-around align-center pa-5">
        <v-app-bar-title class="mr-5">
          <nuxt-link to="/">
            <div class="font-weight-bold font-blue">Theo Academy</div>
          </nuxt-link>
        </v-app-bar-title>
        <!-- <v-spacer></v-spacer> -->
        <nav
          v-if="$vuetify.breakpoint.mdAndUp"
          class="nav transparent d-flex justify-space-around align-center mx-5"
        >
          <dropdown-overlay link-text="Formación" icon="mdi-chevron-down">
            <template #content>
              <v-container class="fill-height">
                <v-row justify="start" align="center">
                  <v-col cols="3" align-self="center">
                    <nuxt-link to="/courses">
                      <h3 class="nav__link fw-700 mb-5">Theo School</h3>
                    </nuxt-link>
                    <nuxt-link to="/advancedAcademy">
                      <h3 class="nav__link fw-700 mb-5">Advanced Aaademy</h3>
                    </nuxt-link>
                    <nuxt-link to="/courses">
                      <h3 class="nav__link fw-700 mb-5">For Groups</h3>
                    </nuxt-link>
                    <nuxt-link to="/courses">
                      <h3 class="nav__link fw-700 mb-5">Suscripciones</h3>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="4">
                    <p class="nav__link font-light mb-5">Pack de Cursos</p>
                    <p class="nav__link font-light mb-5">Diplomados Actuales</p>
                    <p class="nav__link font-light mb-5">Escuela para Iglesias</p>
                    <p class="nav__link font-light mb-5">Crece con TheoAcademy</p>
                  </v-col>
                  <v-col cols="4">
                    <v-card width="100%" max-width="380" height="320">
                      <v-img
                        min-width="100%"
                        min-height="100%"
                        class="pa-5"
                        :src="require('~/assets/images/img_course_prom.png')"
                      >
                        <div class="top__wrapper d-flex justify-end">
                          <v-btn
                            text
                            right
                            class="fw-600 font-light text-capitalize"
                            to="/trainingCenter"
                          >
                            <p class="text__lg">
                              Leer más
                              <v-icon color="#fff">
                                mdi-arrow-right
                              </v-icon>
                            </p>
                          </v-btn>
                        </div>
                        <div class="text__wrapper pa-5 font-light">
                          <h2
                            style="font-size: 40px"
                            class="ma-0 font-light font-weight-light text-uppercase"
                          >
                            Orando
                          </h2>
                          <p
                            class="text-capitalize fw-700 ma-0"
                            style="font-size: 25px"
                          >
                            Bíblicamente
                          </p>
                        </div>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </dropdown-overlay>
          <dropdown-overlay link-text="Más" icon="mdi-chevron-down">
            <template #content>
              <v-container class="fill-height">
                <v-row justify="start" align="center">
                  <v-col cols="3" align-self="center">
                    <nuxt-link to="/courses">
                      <h3 class="nav__link fw-700 mb-5">Theo School</h3>
                    </nuxt-link>
                    <nuxt-link to="/advancedAcademy">
                      <h3 class="nav__link fw-700 mb-5">Advanced Aaademy</h3>
                    </nuxt-link>
                    <nuxt-link to="/courses">
                      <h3 class="nav__link fw-700 mb-5">For Groups</h3>
                    </nuxt-link>
                    <nuxt-link to="/courses">
                      <h3 class="nav__link fw-700 mb-5">Suscripciones</h3>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="4">
                    <p class="text__lg font-light mb-5">Theo School</p>
                    <p class="text__lg font-light mb-5">Advanced ACademy</p>
                    <p class="text__lg font-light mb-5">For Groups</p>
                    <p class="text__lg font-light mb-5">Suscripciones</p>
                  </v-col>
                  <v-col cols="4">
                    <v-card width="100%" max-width="380">
                      <v-img
                        min-width="100%"
                        min-height="100%"
                        :src="require('~/assets/images/img_course_prom.png')"
                      >
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </dropdown-overlay>
          <div v-if="!logged" class="d-flex align-center">
            <v-btn x-small rounded class="white--text bg-green py-6 px-5 mr-3">
              Crear <br />
              Cuenta
              <v-icon>mdi-circle-edit-outline</v-icon>
            </v-btn>
            <v-btn x-small rounded class="white--text bg-green py-6 px-5">
              Ingresar
              <v-icon>mdi-login-variant</v-icon>
            </v-btn>
          </div>
          <div v-else class="d-flex justify-center align-center">
            <v-btn icon>
              <v-badge overlap dot offset-y="2" color="red accent-2">
                <v-icon color="#fff" size="30"> mdi-bell-outline </v-icon>
              </v-badge>
            </v-btn>
            <v-menu bottom min-width="200px" rounded offset-y open-on-hover>
              <template #activator="{ on }">
                <div class="d-flex justify-center align-center">
                  <v-btn icon x-large v-on="on">
                    <v-badge overlap dot color="success">
                      <v-avatar color="primary" size="45">
                        <span class="white--text text-h6">
                          {{ user.initials }}
                        </span>
                      </v-avatar>
                    </v-badge>
                  </v-btn>
                </div>
              </template>
              <v-card class="bg-light">
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar class="bg-purple pa-2">
                      <span class="white--text text-h5">{{
                        user.initials
                      }}</span>
                    </v-avatar>
                    <h3 class="font-dark my-3">{{ user.fullName }}</h3>
                    <p class="text-caption mt-1">
                      {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Editar Perfíl </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Cerrar Sesión </v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
          </div>
        </nav>
        <!-- Mobile version Menu -->
        <v-btn
          v-if="$vuetify.breakpoint.smAndDown"
          class="align-self-center animated-icon ani"
          icon
          color="#fff"
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <!-- Mobile version Menu -->
        <v-switch v-model="logged"></v-switch>
      </v-container>
    </v-app-bar>
    <!-- Mobile version Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      class="drawer"
      :left="right"
      temporary
      fixed
    >
      <v-img
        :src="require('~/assets/images/logo-brand.png')"
        width="80%"
        max-height="95"
        contain
      />
      <v-list nav dense>
        <v-list-item-group class="d-flex flex-column pa-1 mx-1">
          <v-list-item v-for="(link, i) in links" :key="i" class="pa-2">
            <v-icon class="mr-2">
              {{ link.icon }}
            </v-icon>
            <nuxt-link :to="link.url">
              <v-list-item-title
                class="nav__link font-dark"
                v-text="link.title"
              />
            </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Mobile version Navigation Drawer -->
  </v-card>
</template>

<script>
// import myBtn from '~/components/buttons/myBtn.vue'
import dropdownOverlay from './dropdownOverlay.vue'
export default {
  components: {
    // myBtn,
    dropdownOverlay,
  },
  data() {
    return {
      // scrollInvoked: 0,
      // isShrinking: true,
      // height: 95,
      // minHeight: 70,
      // scrollAm: 300,
      logged: false,
      drawer: false,
      right: true,
      tabs: false,
      user: {
        id: '64as1d6a9sd1a3s1das58',
        fullName: 'Winder Díaz',
        email: 'windev@gmail.com',
        initials: 'WD',
      },
      // userNameSplitted: this.user.fullName.split(' '),
      // userNameInitials:
      //   this.userNameSplitted.shift().charAt(0) +
      //   this.userNameSplitted.pop().charAt(0),
      links: [
        {
          title: 'Home',
          url: '/',
          icon: 'mdi-home',
        },
        // {
        //   title: 'Nosotros',
        //   url: '/aboutUs',
        //   icon: 'mdi-account-group',
        // },
        {
          title: 'Formación',
          url: '/trainingCenter',
          icon: 'mdi-school',
        },
        // {
        //   title: 'Blog',
        //   url: '/ourBlog',
        //   icon: 'mdi-wrench',
        // },
        // {
        //   title: 'Recursos',
        //   url: '/ourResources',
        //   icon: 'mdi-wrench',
        // },
        // {
        //   title: 'Contactos',
        //   url: '/contactUs',
        //   icon: 'mdi-account-group',
        // },
        {
          title: 'Más',
          url: '/#',
          icon: 'mdi-plus',
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
  // computed: {
  //   userInitials() {
  //     return this.userNameInitials.toUpperCase
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.nav {
  .nav__link,
  .nav__link.nav__link-drop {
    h3 {
      color: #fff !important;
      cursor: pointer;
    }
  }
  .nav__link.nav__link-drop {
    padding: 1rem;
    border-bottom: 1px solid #fff;
  }
}
</style>
