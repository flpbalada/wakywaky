<template>
  <div>
    <navbar></navbar>
    <nuxt />
    <footerNavbar></footerNavbar>
  </div>
</template>

<script>
import navbar from "~/components/pageParts/navbar.vue";
import footerNavbar from "~/components/pageParts/footerNavbar.vue";

export default {
  components: {
    navbar,
    footerNavbar
  }
};
</script>
