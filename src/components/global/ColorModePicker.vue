<template>
  <b-button
    type="is-primary"
    size="is-medium"
    @click="$colorMode.preference = setColor()"
  >
    <b-icon icon="contraste" size="is-xg"></b-icon>
  </b-button>
</template>

<script>
export default {
  data() {
    return {
      colors: ['light', 'dark'],
    }
  },
  methods: {
    setColor() {
      const colorMode = this.$colorMode.preference
      return colorMode === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style lang="scss">
.dark-mode {
  .button {
    background-color: unset;

    .icon {
      color: $success;
    }
  }
}
</style>
