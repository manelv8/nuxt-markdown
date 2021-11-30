<template>
  <section class="container is-fullhd is-flex-tablet">
    <section class="container">
      <section class="main-content columns">
        <div class="container column">
          <section class="section">
            <div class="columns is-multiline is-mobile">
              <nuxt-link
                v-for="article in articles"
                :key="article.path"
                :to="article.path"
                exact-active-class="sidebar-content__is-active"
                class="is-flex is-align-items-center pb-0"
              >
                <card :title="article.title" icon="alert-decagram">
                  <div class="path-name ml-5 pb-1">{{ article.title }}</div>
                </card>
              </nuxt-link>
            </div>
          </section>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card,
  },
  async asyncData({ $content, params }) {
    const articles = await $content({ deep: true })
      .only(['title', 'description', 'slug', 'path'])
      .sortBy('slug', 'cresc')
      .fetch()
    return {
      articles,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
