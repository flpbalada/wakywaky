<template>
  <div
    class="bg-white shadow p-4 mb-2"
    itemscope
    itemtype="http://schema.org/Product"
  >
    <meta itemprop="name" :content="blok.name" />
    <meta itemprop="description" :content="blok.description" />
    <div
      itemprop="offers"
      itemtype="http://schema.org/AggregateOffer"
      itemscope
    >
      <meta itemprop="lowPrice" :content="blok.lowPrice" />
      <meta itemprop="highPrice" :content="blok.highPrice" />
      <meta itemprop="offerCount" :content="blok.offerCount" />
      <meta itemprop="priceCurrency" :content="blok.priceCurrency" />
    </div>
    <div itemprop="review" itemtype="http://schema.org/Review" itemscope>
      <div itemprop="author" itemtype="http://schema.org/Person" itemscope>
        <meta itemprop="name" content="wakyWaky.cz" />
      </div>
      <div
        itemprop="reviewRating"
        itemtype="http://schema.org/Rating"
        itemscope
      >
        <meta itemprop="ratingValue" :content="blok.rating" />
        <meta itemprop="bestRating" content="5" />
      </div>
    </div>
    <link itemprop="image" :href="blok.imgg" />
    <b-row align-v="start">
      <b-col sm="12" md="6">
        <b-img :src="blok.img" fluid></b-img>
      </b-col>
      <b-col class="mt-4 mt-md-0">
        <b-badge
          :key="item"
          v-for="item in labels(this.blok.labels)"
          variant="light"
          class="mr-1"
        >
          {{ item }}
        </b-badge>
        <h2 class="font-weight-bold mt-2">{{ blok.name }}</h2>
        <p class="mb-4">
          {{ blok.description }}
        </p>
        <ctaButton
          :key="item._uid"
          v-for="item in blok.ctaButton"
          :blok="item"
        ></ctaButton>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ctaButton from "./ctaButton.vue";
export default {
  components: {
    ctaButton
  },
  props: ["blok"],
  methods: {
    labels(str) {
      return str.split("|");
    }
  }
};
</script>
