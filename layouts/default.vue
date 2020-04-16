<template>
  <div>
    <navbar></navbar>
    <nuxt />
    <footerNavbar></footerNavbar>
  </div>
</template>

<script>
import navbar from "~/components/navbar.vue";
import footerNavbar from "~/components/footerNavbar.vue";

export default {
  components: {
    navbar,
    footerNavbar
  }
};
</script>
