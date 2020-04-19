<template>
  <footer class="p-3 text-center text-light bg-dark font-weight-bold">
    {{ "Tvořeno v žabkách na mole — dopékáno s nadšením 🤩 " }}
    <b-link to="/" title="wakyWaky.cz" class="text-light"> wakyWaky.cz</b-link>
    {{ " " + getYear }}
  </footer>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    getYear() {
      var dt = new Date();
      return dt.getFullYear();
    }
  }
};
</script>
