<template>
  <section>
    <b-collapse
      class="card"
      animation="slide"
      aria-id="contentIdForA11y3"
      :open="false"
    >
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title pl-5 mb-0 is-size-4 has-text-weight-medium">
          <b-icon :icon="icon" size="is-large" class="mr-2"></b-icon>
          {{ title }}
        </p>
        <a class="card-header-icon pr-5">
          <b-icon
            :icon="props.open ? 'contrair' : 'expandir'"
            size="is-large"
          ></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content is-size-4">
          <slot></slot>
        </div>
      </div>
    </b-collapse>
  </section>
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
  },
}
</script>

<style lang="scss" scoped>
.collapse.card {
  box-shadow: unset;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card-header {
  box-shadow: 0px 18px 4px -16px rgba(128, 128, 128, 0.18);

  .card-header-title {
    color: $info;
  }
  .card-header-icon {
    .icon {
      color: $info;
      text-shadow: 0px 5px 3px rgba(128, 128, 128, 0.18);
    }
  }

  .card-content {
    .content {
      p {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
