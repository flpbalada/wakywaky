<template>
  <b-button
    :href="blok.to"
    :title="blok.title"
    :rel="blok.rel"
    :target="blok.target"
    :variant="blok.variant"
    class="d-flex justify-content-center d-sm-inline-block mb-1 mr-md-1 text-uppercase font-weight-bold"
    >{{ blok.name }}
  </b-button>
</template>

<script>
export default {
  props: ["blok"],
  mounted() {
    console.log(this.blok);
  }
};
</script>
