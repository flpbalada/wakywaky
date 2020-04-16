<template>
  <div class="bg-white pt-5 pb-5 shadow-lg text-center">
    <b-container>
      <b-row align-v="center">
        <b-col>
          <h1>Ooops 404: Na této stránce to dojezdilo</h1>
          <p class="lead mb-4">
            Asi to vypadá, že stránka kterou hledáte na našem webu neexistuje.
          </p>
          <b-button to="/" variant="primary">Přejít na hlavní stránku</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
