<template>
  <div class="quote column is-three-fifths is-offset-one-fifth">
    <p class="px-5 py-4 mb-0 is-italic is-size-5 has-text-centered">
      <slot></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.quote {
  background-color: #edeffb;
  border-radius: 10px;
  margin-bottom: 30px;
}

.dark-mode {
  .quote {
    background-color: rgba(237, 239, 251, 0.1);
  }
}
</style>
