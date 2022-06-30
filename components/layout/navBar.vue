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
        <div class="links__section d-flex justify-center align-center">
          <v-app-bar-title class="mr-10">
            <nuxt-link to="/">
              <div class="font-weight-bold font-blue">Theo Academy</div>
            </nuxt-link>
          </v-app-bar-title>
          <!-- <v-spacer></v-spacer> -->
          <nav
            v-if="$vuetify.breakpoint.mdAndUp"
            class="nav d-inline-flex transparent mx-5"
          >
            <nuxt-link to="/" class="pa-0 align-self-center">
              <h3 class="nav__link">Home</h3>
            </nuxt-link>
            <dropdown-overlay
              link-text="Formación"
              icon="mdi-chevron-down"
              class="nav__link"
            >
              <template #content>
                <v-container class="fill-height">
                  <v-row justify="start" align="start">
                    <v-col cols="3">
                    <div class="links__wrapper">
                      <nuxt-link to="/courses">
                        <h3 class="nav__link">Theo School</h3>
                      </nuxt-link>
                      <nuxt-link to="/advancedAcademy">
                        <h3 class="nav__link">Advanced Academy</h3>
                      </nuxt-link>
                      <nuxt-link to="/courses">
                        <h3 class="nav__link">For Groups</h3>
                      </nuxt-link>
                      <nuxt-link to="/courses">
                        <h3 class="nav__link">Suscripciones</h3>
                      </nuxt-link>
                    </div>
                    </v-col>
                    <v-col cols="4">
                      <p class="text__lg font-light">Pack de Cursos</p>
                      <p class="text__lg font-light">Diplomados Actuales</p>
                      <p class="text__lg font-light">Escuela para Iglesias</p>
                      <p class="text__lg font-light">Crece con TheoAcademy</p>
                    </v-col>
                    <v-col cols="4">
                      <v-card width="100%" max-width="380" height="320">
                        <v-img
                          min-width="100%"
                          min-height="100%"
                          class="pa-5"
                          gradient="0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%"
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
                                <v-icon color="#fff"> mdi-arrow-right </v-icon>
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
                          <div class="bottom__wrapper mt-10 mr-10 font-light" style="font-size: 14px">
                            <span class="fw-700">
                              Subscríbete y Disfruta de
                            </span>
                            <p>todo un pack de cursos acerca de este tema.</p>
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
                  <v-row justify="start" align="start">
                    <v-col cols="3">
                    <div class="links__wrapper">
                      <nuxt-link to="/courses">
                        <h3 class="nav__link">Nosotros</h3>
                      </nuxt-link>
                      <nuxt-link to="/advancedAcademy">
                        <h3 class="nav__link">Blog</h3>
                      </nuxt-link>
                      <nuxt-link to="/courses">
                        <h3 class="nav__link">Recursos</h3>
                      </nuxt-link>
                      <nuxt-link to="/courses">
                        <h3 class="nav__link">Contactos</h3>
                      </nuxt-link>
                    </div>
                    </v-col>
                    <v-col cols="4">
                      <p class="text__lg font-light">Un mundo caído como actuar</p>
                      <p class="text__lg font-light">Regala un giftbook</p>
                      <p class="text__lg font-light">Becas</p>
                    </v-col>
                    <v-col cols="4">
                      <v-card width="100%" max-width="380" height="320">
                        <v-img
                          min-width="100%"
                          min-height="100%"
                          class="pa-5"
                          gradient="0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%"
                          :src="require('~/assets/images/pict_blog.png')"
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
                                <v-icon color="#fff"> mdi-arrow-right </v-icon>
                              </p>
                            </v-btn>
                          </div>
                          <div class="text__wrapper pa-5 font-light">
                            <h2
                              style="font-size: 40px"
                              class="ma-0 font-light font-weight-light"
                            >
                              Un mundo caído,
                            </h2>
                            <p
                              class="text-capitalize fw-700 ma-0"
                              style="font-size: 25px"
                            >
                              ¿cómo actuar?
                            </p>
                          </div>
                          <div class="bottom__wrapper mt-10 mr-10 font-light" style="font-size: 14px">
                            <span class="fw-700">
                              Difruta de 
                            </span>
                            <p>nuestros temas en Blog.</p>
                          </div>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </dropdown-overlay>
          </nav>
        </div>
        <div class="login__section">
          <div v-if="!logged" class="d-flex align-center">
            <v-btn class="btn bg-secondary mr-3"> Regístrate </v-btn>
            <v-btn class="btn bg-primary"> Iniciar Sesión </v-btn>
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
        </div>
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
      </v-container>
      <v-switch v-model="logged"></v-switch>
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
  .nav__link {
     font-weight: 700 !important;
     margin-right: 20px;
  }
  .nav__link.nav__link-drop {
    padding: 1rem;
    border-bottom: 1px solid #fff;
  }
}
  .links__wrapper .nav__link{
     font-weight: 700 !important;
     margin-bottom: 16px;
  }
</style>
