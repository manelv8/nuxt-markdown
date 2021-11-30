<template>
  <section class="container is-fullhd is-flex-tablet">
    <SideBar
      v-show="isMobile"
      position="fixed"
      :articles="articles"
      :sidebar-toggle.sync="sidebarToggle"
    />
    <SideBar
      v-show="!isMobile"
      position="static"
      :articles="articles"
      :sidebar-toggle.sync="sidebarToggle"
    />
    <section
      class="hero is-fullwidth is-fullheight is-flex-tablet is-relative"
      :class="{ 'is-mobile': isMobile }"
    >
      <NavBar
        :aula="aula"
        @toggle-sidebar="() => (sidebarToggle = !sidebarToggle)"
      />
      <section class="hero-body">
        <nuxt keep-alive />
      </section>
      <Footer :mobile="$mq === 'xs'" />
    </section>
  </section>
</template>
<script>
export default {
  async fetch() {
    const $content = this.$nuxt.context.$content
    const params = this.$nuxt.context.params
    console.log('content', JSON.stringify($content, null, 2))
    console.log('params', JSON.stringify(params, null, 2))
    const articles = await $content({ deep: true })
      .only(['title', 'description', 'slug', 'path'])
      .sortBy('slug', 'cresc')
      .fetch()
    const path = params.subject ? params.subject.concat('/aulas') : ''
    const args = [path, params.slug]
    const aula = await $content(...args).fetch()
    console.log('aula', aula)
    console.log(articles[0].path)
    this.articles = articles
    this.aula = Array.isArray(aula) ? { title: 'Início' } : aula
  },
  data() {
    return {
      articles: [],
      aula: {},
      sidebarToggle: false,
    }
  },
  computed: {
    isMobile() {
      return this.$mq === 'sm' || this.$mq === 'xs'
    },
  },
  watch: {
    async $route() {
      const $content = this.$nuxt.context.$content
      const params = this.$nuxt.context.params
      const path = params.subject ? params.subject.concat('/aulas') : ''
      const aula = await $content(path, params.slug).fetch()
      this.aula = Array.isArray(aula) ? { title: 'Início' } : aula
    },
  },
  fetchOnServer: false,
}
</script>
<style lang="scss" scoped>
.hero {
  &.is-fullwidth {
    &.is-mobile {
      width: 100%;
      max-width: 100vw;
    }
    width: calc(100vw - 280px);
    max-width: 80vw;
    .hero-body {
      display: block;
    }
  }
}
</style>
