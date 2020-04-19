<template>
  <div>
    <vue-simple-markdown :source="blok.content"></vue-simple-markdown>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
