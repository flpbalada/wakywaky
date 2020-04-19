<template>
  <div class="bg-white pt-4 pb-4 shadow-lg">
    <b-container>
      <b-row align-v="center">
        <b-col cols="12" md="8">
          <h1>{{ blok.hero }}</h1>
          <p class="lead mb-4">{{ blok.lead }}</p>
          <component
            :key="blok._uid"
            v-for="blok in blok.ctaButton"
            :blok="blok"
            :is="blok.component"
          ></component>
        </b-col>
        <b-col>
          <b-img-lazy
            v-if="blok.avatar"
            :src="blok.avatar"
            alt="avatar"
            fluid
            class="d-none d-md-flex"
          ></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  mounted() {
    console.log(this.$route);
  }
};
</script>
