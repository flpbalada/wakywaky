<template>
  <div
    :id="blok.step"
    itemprop="step"
    itemscope
    itemtype="http://schema.org/HowToStep"
  >
    <link itemprop="url" href="" />
    <h3 itemprop="name">{{ `#${blok.step} — ${blok.name}` }}</h3>
    <div
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/HowToDirection"
    >
      <p itemprop="text">{{ blok.text }}</p>
    </div>
    <b-img
      itemprop="image"
      alt="image showing preparation"
      :src="blok.img"
      fluid
      class="pb-4 pt-2"
    />
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
