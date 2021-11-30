<template>
  <div class="card px-5 py-5">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border-top: 0.5rem solid $info;
  padding-bottom: 5px;
  margin-bottom: 30px;
}
</style>
