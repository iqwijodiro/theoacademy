<template>
  <div class="contact">
    <hero-contact />
    <social-contact />
    <contact-path />
    <newsletter-sect />
  </div>
</template>

<script>
import heroContact from '~/components/contactUs/heroContact.vue'
import SocialContact from '~/components/contactUs/socialContact.vue'
import ContactPath from '~/components/contactUs/contactPath.vue'
import NewsletterSect from '~/components/contactUs/newsletterSect.vue'
export default {
  components: { heroContact, SocialContact, ContactPath, NewsletterSect },
  head() {
    return {
      title: 'Contáctanos - Theo Academy',
    }
  },
}
</script>

<style></style>
