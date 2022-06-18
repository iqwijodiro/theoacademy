<template>
  <client-only>
    <div>
      <section>
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" md="4">
              <v-card width="100%" height="300" class="pa-5 d-flex justify-center align-end">
                <stripe-checkout
                ref="checkoutRef"
                mode="payment"
                :pk="pk"
                :line-items="lineItems"
                :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />
                <v-btn color="success" :loading="loading" :disabled="loading" @click="checkout">Subscribe!
                </v-btn>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card width="100%" height="300" class="pa-5 d-flex justify-center align-center">
                <stripe-element-card ref="cardRef" :pk="pk" hide-postal-code @token="tokenCreated"
                  @loading=" v=> loading = v" />
                  <pre>{{token}}</pre>
                <v-card-actions>
                  <v-btn color="success" :loading="loading" :disabled="loading" @click="$refs.cardRef.submit()">Get token!
                  </v-btn>
                </v-card-actions>
              </v-card>

            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </client-only>
</template>

<script>
import { StripeCheckout, StripeElementCard } from '@vue-stripe/vue-stripe';
// import myBtn from '~/components/buttons/myBtn.vue'
export default {
  components: {
    StripeCheckout,
    StripeElementCard
    // myBtn
  },
  data() {
    this.pk = process.env.STRIPE_PK;
    return {
      loading: false,
      lineItems: [
        {
          price: 'prod_LtdWHoxkpf9V4J',
          quantity: 1,
        },
        
      ],
      successURL: process.client && `${window.location.origin}${window.location.pathname}?state=success`,
      cancelURL: process.client && `${window.location.origin}${window.location.pathname}?state=error`,
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    };
  },
  computed: {
    queryState() {
      return process.client && (new URLSearchParams(window.location.search).get('state') || '')
    }
  },
  mounted () {
    if (this.queryState === 'success') {
      this.redirectState = 'success';
    }
    if (this.queryState === 'error') {
      this.redirectState = 'error';
    }
  },
  methods: {
    checkout() {
      console.log('valido');
      this.loading = true
      this.$refs.checkoutRef.redirectToCheckout();
    },
    tokenCreated(token) {
      this.token = token;
    },
  },
};
</script>
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  background-color: rgba($color: $purple-primary, $alpha: .6);
}
</style>