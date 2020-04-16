<template>
  <b-row
    :id="'step' + blok.step"
    itemprop="step"
    itemscope
    itemtype="http://schema.org/HowToStep"
  >
    <b-col>
      <div>{{ blok.step }}</div>
      <h3 itemprop="name">{{ blok.name }}</h3>
      <p itemprop="text">{{ blok.text }}</p>
    </b-col>
    <b-col v-if="blok.img" md="4">
      <b-img-lazy
        itemprop="image"
        :src="blok.img"
        :alt="blok.name"
        fluid
      ></b-img-lazy>
    </b-col>
    <meta itemprop="url" content="https://example.com/tie#step4" />
  </b-row>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
