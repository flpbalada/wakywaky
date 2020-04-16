<template>
  <div class="bg-primary navigator ">
    <b-container class="p-0">
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <logo></logo>
        <b-navbar-brand href="./" class="font-weight-bold"
          >waky<span class="text-secondary">Waky.cz</span></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav
            class="ml-auto"
            itemscope
            itemtype="http://www.schema.org/SiteNavigationElement"
          >
            <b-nav-item v-for="(item, i) in links" :key="i" :to="item.route">
              {{ item.title }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import logo from "./logo.vue";

export default {
  components: {
    logo
  },
  data() {
    return {
      links: [
        { title: "Online waketrenér", route: "/online-trener-wakeboardingu" },
        { title: "Srovnání wakeparků", route: "/srovnani-wakeparku" },
        { title: "Srovnání wakeshopů", route: "/srovnani-wakeshopu" },
        { title: "Magazín", route: "/magazin" },
        { title: "Kontakt", route: "/kontakt" }
      ]
    };
  }
};
</script>
<style scoped>
.navigator {
  z-index: 10000 !important;
  position: relative;
}
</style>
