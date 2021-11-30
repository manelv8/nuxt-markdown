<template>
  <div class="columns is-mobile prev-next__buttons mgt-large">
    <div class="column is-one-fifth">
      <qed-button :disabled="!prev" :to="prevTo" light left>
        Anterior
      </qed-button>
    </div>
    <div class="column is-three-fifths"></div>
    <div
      class="column is-one-fifth"
      :class="{ 'is-flex is-justify-content-flex-end': $mq === 'xs' }"
    >
      <qed-button :disabled="!next" :to="nextTo" light right>
        Próximo
      </qed-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  computed: {
    prevTo() {
      return this.prev
        ? { name: 'matematica-aulas-slug', params: { slug: this.prev.slug } }
        : '#'
    },
    nextTo() {
      return this.next
        ? { name: 'matematica-aulas-slug', params: { slug: this.next.slug } }
        : '#'
    },
  },
}
</script>
<style scoped>
.prev-next__buttons {
  text-transform: uppercase !important;
}
</style>
