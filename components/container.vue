<template>
  <b-container>
    <component :key="blok._uid" v-for="blok in blok.rows" :blok="blok" :is="blok.component"></component>
  </b-container>
</template>

<script>
export default {
  props: ["blok"]
};
</script>