<template>
  <b-button
    :type="light ? 'is-light' : 'is-primary'"
    :icon-left="left ? 'left is-size-2' : ''"
    :icon-right="right ? 'right is-size-2' : ''"
    :tag="to !== '#' ? 'nuxt-link' : tag"
    :to="to"
    size="is-medium"
  >
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      required: false,
      default: 'nuxt-link',
    },
    to: {
      type: [Object, String],
      required: false,
      default: () => '#',
    },
  },
}
</script>

<style lang="scss" scoped>
.dark-mode {
  .button {
    background-color: $black;
    border-color: $success;
    color: white;
  }

  .button:hover {
    background-color: $success;
  }
}

.is-light {
  color: $primary;
}

.is-light:hover {
  background-color: #e2e2e2;
}

.is-light:active {
  background-color: #eeeded;
}

.is-primary:hover {
  background-color: #2c3980;
}

.is-primary:active {
  background-color: #3f51b5;
}

.button {
  border-radius: 10px;
}

.custom {
  font-size: $size-2 !important;
}
</style>
