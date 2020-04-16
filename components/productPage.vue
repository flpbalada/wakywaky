<template>
  <div>
    <component
      :key="blok._uid"
      v-for="blok in blok.hero"
      :blok="blok"
      :is="blok.component"
    ></component>
    <component
      :key="blok._uid"
      v-for="blok in blok.containers"
      :blok="blok"
      :is="blok.component"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
