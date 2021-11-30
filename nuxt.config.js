export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Quants',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // location of source files (https://go.nuxtjs.dev/config-srcDir)
  srcDir: './src',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss', '@/assets/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
  ],

  styleResources: {
    // your settings here
    scss: ['@/assets/scss/_variables.scss'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxt/content',
    'nuxt-mq',
  ],

  content: {
    // My custom configuration
    liveEdit: false,
  },

  // Buefy construct option (https://buefy.org/documentation/constructor-options/)
  buefy: {
    /* buefy options */
    defaultIconPack: 'custom',
    customIconPacks: {
      custom: {
        sizes: {
          default: '',
          'is-small': 'is-size-5',
          'is-medium': 'is-size-4',
          'is-large': 'is-size-3',
          'is-xg': 'is-size-1',
        },
        iconPrefix: 'icon-',
      },
    },
  },

  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      xs: 769,
      sm: 1024,
      md: 1400,
      lg: Infinity,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
