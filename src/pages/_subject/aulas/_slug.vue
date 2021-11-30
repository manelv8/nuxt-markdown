<template>
  <section class="main-content px-6" :class="{ 'is-mobile': isMobile }">
    <article class="my-4 mx-6">
      <nuxt-content :document="aula" />
    </article>
    <prev-next
      class="my-4"
      :class="{ 'mx-6': $mq !== 'xs' }"
      :prev="prev"
      :next="next"
    />
  </section>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const path = params.subject.concat('/aulas')
    const aula = await $content(path, params.slug).fetch()
    const [prev, next] = await $content(path)
      .only(['title', 'slug'])
      .sortBy('slug', 'asc')
      .surround(params.slug)
      .fetch()

    return { aula, prev, next }
  },
  computed: {
    isMobile() {
      return this.$mq === 'sm' || this.$mq === 'xs'
    },
  },
}
</script>

<style lang="scss">
.nuxt-content {
  h1 {
    color: $primary;
    font-weight: 700;
    font-size: $size-2;
    border-bottom: 3px solid $primary;
    margin-left: 0;
    padding-bottom: 0.5rem;
    margin-bottom: 30px;

    a {
      display: none;
    }
  }

  h2 {
    font-weight: 600;
    font-size: $size-4;
    margin-bottom: 20px;

    a {
      display: none;
    }
  }

  p {
    font-weight: 400;
    font-size: $size-4;
    margin-bottom: 30px;
  }

  @media (max-width: 1023px) {
    h1 {
      text-align: center;
    }
  }
}
.main-content {
  height: 100%;
  &:not(.is-mobile) {
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero .navbar {
  background: #3f51b5;
}
</style>
