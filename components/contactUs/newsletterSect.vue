<template>
  <section class="newsletter bg-green">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="9">
          <div v-animate-on-scroll class="text__wrapper text-center">
            <h2 class="section__title mb-8">Suscribete a nuestra Newsletter</h2>
            <p class="text__lg mb-12">
              Enterate de las principales noticias de The God Academy
            </p>
          </div>
          <div v-animate-on-scroll class="form__wrapper">
            <v-form ref="form" v-model="validForm">
              <v-row justify="center" align="start">
                <v-col cols="12" md="4" class="py-0 my-0">
                  <v-text-field
                    v-model="lead.name"
                    label="Nombre"
                    placeholder="Nombre"
                    solo
                    flat
                    clearable
                    class="pt-1"
                    required
                    :rules="[validationRules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 my-0">
                  <v-text-field
                    v-model="lead.email"
                    label="Email"
                    placeholder="Email"
                    solo
                    flat
                    clearable
                    class="pt-1"
                    required
                    :rules="[
                      validationRules.required,
                      validationRules.emailPattern,
                    ]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 my-0">
                  <v-btn
                    x-large
                    depressed
                    class="text-capitalize text__mid"
                    dark
                    :loading="loading"
                    color="#16425e"
                    @click.prevent="submitData"
                  >
                    Enviar
                    <v-icon class="ml-2"> mdi-trending-up </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      validForm: false,
      loading: false,
      lead: {
        name: null,
        email: null,
      },
      validationRules: {
        required: (v) => !!v || 'Campo Requerido',
        emailPattern: (v) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail inválido'
        },
      },
    }
  },
  methods: {
    async submitData() {
      try {
        this.validForm = await true
        this.loading = await true
        this.resetForm()
        return this.lead
      } catch (err) {
        this.loading = false
        this.validForm = false
      }
      this.loading = false
    },
    resetForm() {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
      console.log(this.lead)
    },
  },
}
</script>

<style lang="scss" scoped>
.newsletter {
  button.text-capitalize.text__mid {
    font-weight: 500;
  }
}
</style>
