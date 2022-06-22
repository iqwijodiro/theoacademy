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
      <v-container class="d-flex justify-space-between align-center pa-5">
        <v-app-bar-title class="mr-5">
          <nuxt-link to="/">
            <div class="font-weight-bold font-blue">Theo Academy</div>
          </nuxt-link>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <nav
          v-if="$vuetify.breakpoint.mdAndUp"
          class="nav transparent d-flex justify-space-around align-center mx-5"
        >
          <nuxt-link
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            class="nav__link ma-4"
          >
            <h3>{{ link.title }}</h3>
          </nuxt-link>
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
            <v-menu bottom min-width="200px" rounded offset-y>
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
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar color="brown">
                      <span class="white--text text-h5">{{
                        user.initials
                      }}</span>
                    </v-avatar>
                    <h3>{{ user.fullName }}</h3>
                    <p class="text-caption mt-1">
                      {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Edit Account </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Disconnect </v-btn>
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
      light
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
              <v-list-item-title class="nav__link" v-text="link.title" />
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
export default {
  // components: { myBtn },
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
        {
          title: 'Nosotros',
          url: '/aboutUs',
          icon: 'mdi-account-group',
        },
        {
          title: 'Formación',
          url: '/trainingCenter',
          icon: 'mdi-school',
        },
        {
          title: 'Blog',
          url: '/ourBlog',
          icon: 'mdi-wrench',
        },
        {
          title: 'Recursos',
          url: '/ourResources',
          icon: 'mdi-wrench',
        },
        {
          title: 'Contactos',
          url: '/contactUs',
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
    }
  }
  .nav__link.nav__link-drop {
    padding: 1rem;
    border-bottom: 1px solid #fff;
  }
}
</style>
