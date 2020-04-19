<template>
  <div
    class="bg-white rounded shadow p-2 mb-2 d-flex justify-content-between align-items-center"
  >
    <div class="d-flex">
      <div class="p-1 bg-light rounded"></div>
      <div class="m-2">
        <h3>
          <span v-if="allowHash">{{ hash + "# — " }} </span>
          {{ obj.content.hero[0].hero }}
        </h3>
        <p class="font-italic">{{ obj.content.hero[0].lead }}</p>
        <b-button
          :to="obj.full_slug"
          :title="obj.content.hero[0].hero"
          variant="outline-dark"
          rel="next"
          class="font-weight-bold mt-2"
        >
          Přečíst celé
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hash: Number,
    obj: Object,
    allowHash: Boolean
  }
};
</script>
