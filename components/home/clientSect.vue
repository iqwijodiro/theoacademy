<template>
  <section class="brands">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <div v-for="(brand, i) in brands" :key="i" class="mini-card px-2">
            <v-img
              v-animate-on-scroll
              :src="brand.image"
              width="120"
              contain
              class="pa-0 ma-0 brand__image"
              :alt="brand.name"
            />
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
      brands: [
        {
          name: 'Brand 1',
          image: require('~/assets/images/brand-1.png'),
        },
        {
          name: 'Brand 2',
          image: require('~/assets/images/2.png'),
        },
        {
          name: 'Brand 3',
          image: require('~/assets/images/3.png'),
        },
        {
          name: 'Brand 4',
          image: require('~/assets/images/2.png'),
        },
        {
          name: 'Brand 5',
          image: require('~/assets/images/5.png'),
        },
        {
          name: 'Brand 6',
          image: require('~/assets/images/brand-1.png'),
        },
        {
          name: 'Brand 7',
          image: require('~/assets/images/2.png'),
        },
        {
          name: 'Brand 8',
          image: require('~/assets/images/3.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.brands {
  padding: 6rem 0.5rem;
  background-color: #fff;
}
</style>
