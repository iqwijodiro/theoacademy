<template>
  <footer class="footer text-center text-md-left">
    <v-container>
      <v-row>
        <v-col
          v-animate-on-scroll
          cols="12"
          md="3"
          class="mb-5 py-0 px-5 px-md-4"
        >
          <h5 class="text__lg mb-2">
            <strong>Contactos</strong>
          </h5>
          <ul class="list">
            <li>Correo Electronico</li>
            <li>Whatsapp</li>
            <li>Redes Sociales</li>
            <li>Nuestra plataforma</li>
          </ul>
        </v-col>
        <v-col
          v-animate-on-scroll
          cols="12"
          md="3"
          class="mb-5 py-0 px-5 px-md-4"
        >
          <h5 class="text__lg mb-2"><strong>Formación</strong></h5>
          <ul class="list">
            <li>Cursos</li>
            <li>Programas</li>
            <li>ForGroup</li>
          </ul>
        </v-col>
        <v-col
          v-animate-on-scroll
          cols="12"
          md="3"
          class="mb-5 py-0 px-5 px-md-4"
        >
          <h5 class="text__lg mb-2">
            <strong>Lo más popular</strong>
          </h5>
          <ul class="list">
            <li>Esenciales de la fe cristiana</li>
            <li>La paternidad de Dios</li>
            <li>Programa Teologico para iglesias</li>
          </ul>
        </v-col>
        <v-col
          v-animate-on-scroll
          cols="12"
          md="3"
          class="mb-5 py-0 px-5 px-md-4"
        >
          <h5 class="text__lg mb-2">
            <strong>Nosotros</strong>
          </h5>
          <p class="mb-8 text__mid">
            The God Academy es un espacio virtual de formación que te ayuda a
            conectar con la palabra de Dios de manera eficaz y maravillosa.
          </p>
          <h5 class="text__lg mb-3">
            <strong>Social</strong>
          </h5>
          <div
            v-animate-on-scroll
            class="my-3 d-flex flex-wrap align-center justify-center justify-md-start"
          >
            <div class="soc-item">
              <v-icon class="pa-0 ma-0" color="primary">
                fab fa-facebook-f
              </v-icon>
            </div>
            <div class="soc-item">
              <v-icon class="pa-0 ma-0" color="secondary"> mdi-youtube </v-icon>
            </div>
            <div class="soc-item">
              <v-icon class="pa-0 ma-0" color="primary"> mdi-instagram </v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000;
  padding: 5rem !important;
  li,
  p {
    color: #bbb;
  }
  h5 {
    color: #fff;
  }
  .soc-item {
    background-color: #f6f6f6;
    border-radius: 50% / 50%;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem 1rem 0;
    cursor: pointer;
  }
}
@include respond(phone) {
  .footer {
    padding: 5rem 0 !important;
  }
}
</style>
