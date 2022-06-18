import Vue from 'vue';
import {
  StripePlugin,
  StripeCheckout,
  StripeElementCard,
} from '@vue-stripe/vue-stripe';

const options = {
  pk: process.env.STRIPE_PK,
  stripeAccount: process.env.STRIPE_ACCOUNT,
  apiVersion: process.env.API_VERSION,
  locale: process.env.LOCALE,
};

export default () => {
  Vue.component('StripeCheckout', StripeCheckout);
  Vue.component('StripeElementCard', StripeElementCard);
  Vue.use(StripePlugin, options);
};