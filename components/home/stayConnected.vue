<template>
  <div class="sharing">
    <section class="video">
      <v-container>
        <h2
          v-animate-on-scroll
          class="section__title text-center mb-sm-12"
          style="height: 100px"
        >
          Mantente Conectado
        </h2>
        <v-row align="center">
          <v-col cols="12" md="6" class="py-0 px-4">
            <div class="video__wrapper">
              <video
                v-animate-on-scroll
                src="https://res.cloudinary.com/db0gjdwr0/video/upload/v1653942263/theoacademy-assets/Video_Tutorial_Teo_Academy_-_CENTI_Sur_EEUU_ivrqvq.mp4"
                controls
                width="100%"
                class="video__item embedded-video mt-14 mt-sm-0 rounded-lg mr-5"
              >
                <source
                  src="https://res.cloudinary.com/db0gjdwr0/video/upload/v1653942263/theoacademy-assets/Video_Tutorial_Teo_Academy_-_CENTI_Sur_EEUU_ivrqvq.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://res.cloudinary.com/db0gjdwr0/video/upload/v1653925919/theoacademy-assets/Video-Tutorial-Teo-Academy-CENTI-Sur-EEUU_zvy1ag.ogg"
                  type="video/ogg"
                />
              </video>
            </div>
            <p
              v-animate-on-scroll
              class="video__description text-center text__mid pt-2 mb-4"
            >
              Bienvenido a Theo Academy
            </p>
          </v-col>
          <v-col cols="12" md="6" class="py-0 px-4">
            <div class="text__wrapper px-5 pa-md-8">
              <h3
                v-animate-on-scroll
                class="section__subtitle text__special mb-4 font-weight-regular"
              >
                <strong>
                  Descubre la Transformación del Ser desde una perspectiva
                  Bíblica.
                </strong>
              </h3>
              <p v-animate-on-scroll class="text__lg">
                Estudiemos juntos el indudable valor de las escrituras en el
                proceso de nuestra transformación interna, caminando hacia la
                mente de Cristo
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="share">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="py-0">
            <div
              v-animate-on-scroll
              class="social__list d-flex justify-center align-center"
            >
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.link"
                class="icon__wrapper d-flex justify-center align-center mr-5"
                :style="'background-color:' + social.color"
              >
                <v-icon light size="30" color="#fff" class="ma-0">
                  {{ social.icon }}
                </v-icon>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: 'Facebook',
          link: 'https://es-la.facebook.com/',
          color: '#1778f2',
          icon: 'fab fa-facebook-f',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
          color: '#f00075',
          icon: 'fab fa-instagram',
        },
        {
          name: 'Youtube',
          link: 'https://www.youtube.com/',
          color: '#ff0000',
          icon: 'fab fa-youtube',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.sharing {
  background-color: $blue-sec-light;
  .video__description {
    color: #383838;
  }
  .text__wrapper {
    .section__subtitle {
      color: #383838;
      font-weight: bold !important;
    }
    .text__lg {
      color: #383838;
    }
  }
  .share {
    padding: 1rem 0 3rem;
    .icon__wrapper {
      opacity: 0.9;
      border-radius: 50% / 50%;
      display: inline-block;
      height: 55px;
      width: 55px;
      padding: 0;
      text-align: center;
      line-height: 55px;
      transition: background-color 0.2s ease-in;
      &:hover {
        opacity: 1;
      }
    }
  }
}
@include respond(phone) {
  .video {
    .section__title {
      font-size: 1.9rem;
    }
    .text__wrapper {
      .section__subtitle {
        font-size: 1.4rem !important;
      }
      .text__lg {
        color: #383838;
      }
    }
  }
}
</style>
