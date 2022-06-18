<template>
  <section class="courses searcher bg-light">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="9">
          <div v-animate-on-scroll class="text__wrapper text-center">
            <h2 class="section__title mb-8">
              Busca lo mejor en Cursos y programas
            </h2>
          </div>
          <div v-animate-on-scroll class="form__wrapper">
            <v-form ref="form" v-model="validForm">
              <v-row justify="center" align="start" class="mt-8">
                <v-col cols="12" md="3" class="py-0 my-0">
                  <input
                    type="text"
                    style="display: none; visibility: hidden"
                  />
                  <v-text-field
                    v-model="search.courses"
                    label="Cursos"
                    placeholder="Cursos"
                    solo
                    class="pt-1"
                    @keyup.enter.stop="searchData"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" class="py-0 my-0">
                  <input
                    type="text"
                    style="display: none; visibility: hidden"
                  />
                  <v-text-field
                    v-model="search.programs"
                    label="Programas"
                    placeholder="Programas"
                    solo
                    autofocus
                    clearable
                    class="pt-1"
                    @keyup.enter.stop="searchData"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" class="py-0 my-0">
                  <v-btn
                    block
                    x-large
                    class="search__btn text-capitalize text__mid font-dark font-weight-bold"
                    :loading="loading"
                    @click.prevent="searchData"
                  >
                    Buscar
                    <v-icon class="ml-2"> mdi-magnify </v-icon>
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
      search: {
        courses: null,
        programs: null,
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
$text-field-outlined-fieldset-border: #2417ff;
.courses.searcher {
  //   min-height: 100vh;
  .form__wrapper {
    .search__btn {
      background-color: #00ffe9;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #00a89a;
        color: #fff;
      }
    }
  }
}
</style>
