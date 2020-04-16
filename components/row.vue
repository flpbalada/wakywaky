<template>
  <b-row class="mt-5 mb-5">
    <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
  </b-row>
</template>

<script>
export default {
  props: ["blok"]
};
</script>