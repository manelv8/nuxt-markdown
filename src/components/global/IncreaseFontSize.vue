<template>
  <b-button type="is-primary" size="is-medium" @click="increaseFont()">
    <b-icon :icon="type" size="is-xg"></b-icon>
  </b-button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    plus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      proporcion: 0.2,
      minValue: 8,
    }
  },
  methods: {
    increaseFont() {
      const element = document.querySelector('html')
      const elementStyle = window
        .getComputedStyle(element)
        .getPropertyValue('font-size')

      const number = elementStyle.replace('px', '')
      const value = this.plus ? 1.0 + this.proporcion : 1.0 - this.proporcion

      const newFontSize = parseInt(number) * parseFloat(value)
      if (newFontSize >= this.minValue)
        element.style.fontSize = `${newFontSize}px`
      else if (newFontSize < this.minValue)
        element.style.fontSize = `${this.minValue}px`
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
