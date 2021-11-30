<template>
  <div :class="['card px-5 py-5', info ? 'border' : '']">
    <header class="card-header pt-4">
      <p
        :class="[
          'card-header-title mb-0 has-text-weight-medium',
          info ? 'color' : '',
        ]"
      >
        <b-icon v-if="info" :icon="icon" size="is-large" class="mr-2"></b-icon>
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Exemplo',
    },
    icon: {
      type: String,
      default: '',
    },
    info: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  margin-bottom: 30px;

  .card-header {
    box-shadow: 0px 18px 4px -16px rgba(128, 128, 128, 0.18);
  }
}

.color {
  color: $info;
}

.border {
  border-top: 0.5rem solid $info;
}
</style>
