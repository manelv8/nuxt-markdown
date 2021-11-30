<template>
  <div class="">
    <a :href="link" target="_blank">
      <p class="mb-0">
        <b-icon icon="link" size="is-large" class="mr-2"></b-icon>
        <slot></slot>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  align-items: center;
  color: $info;
  display: flex;
  flex-grow: 1;
}
</style>
