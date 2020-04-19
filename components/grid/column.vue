<template>
  <b-col cols="12" md>
    <!-- pruducts listing -->
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component"
    ></component>
    <!-- end of product listing -->
  </b-col>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
