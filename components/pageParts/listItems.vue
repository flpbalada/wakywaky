<template>
  <b-row align-v="center" class="mt-5 mb-5">
    <b-col cols="12" lg="8">
      <introBox
        v-for="(item, n) in stories"
        :key="item.id"
        :obj="item"
        :hash="n"
        :allowHash="blok.allowHash"
      ></introBox>
    </b-col>
  </b-row>
</template>

<script>
import introBox from "~/components/base/introBox.vue";
import axios from "axios";

export default {
  components: {
    introBox
  },
  props: ["blok"],
  data() {
    return {
      stories: null
    };
  },
  mounted() {
    let version = process.env.NODE_ENV == "development" ? "draft" : "published";
    axios
      .get(
        `https://api.storyblok.com/v1/cdn/stories?version=${version}&sort_by=id:asc&is_startpage=0&starts_with=${this.blok.filterByFullSlug}&token=T2C48SSblvlsIVOj4ciqIwtt`
      )
      .then(response => (this.stories = response.data.stories));
    console.log(process.env.NODE_ENV);
  }
};
</script>
