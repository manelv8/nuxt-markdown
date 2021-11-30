<template>
  <div class="img-container px-6">
    <figure class="image columns" @click="isImageModalActive = true">
      <div class="column is-three-quarters">
        <img :src="src" :alt="alt" />
      </div>
      <div class="column is-one-quarters">
        <span class="zoom px-5 py-4">
          <b-icon icon="aumentarimg" size="is-large" type="is-info"> </b-icon>
        </span>
      </div>
    </figure>
    <b-modal v-model="isImageModalActive">
      <figure class="image">
        <img :src="src" :alt="alt" />
      </figure>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isImageModalActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  margin-bottom: 30px;
}

figure {
  cursor: pointer;
}
</style>
