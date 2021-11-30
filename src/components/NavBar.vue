<template>
  <section
    class="hero-head sticky-top"
    @click="() => (activeNavbar = !activeNavbar)"
  >
    <b-navbar
      centered
      shadow
      :mobile-burger="false"
      :active="activeNavbar"
      type="is-primary"
      class="pb-5 px-6"
      :class="[{ 'is-mobile': isMobile }, marginTop]"
    >
      <template slot="brand">
        <b-navbar-item class="is-hidden-desktop" tag="div">
          <b-button
            type="is-primary"
            size="is-medium"
            @click.stop="() => false"
          >
            <b-icon class="flex-center" icon="arrow_left" size="is-xg"></b-icon>
          </b-button>
        </b-navbar-item>
        <b-navbar-item tag="h2" class="is-size-1-desktop is-size-4-touch">
          <div class="is-hidden-touch ml-6"></div>
          <section v-if="aula.title">
            {{ aula.title }}
          </section>
          <b-skeleton
            v-if="!aula.title"
            :width="skeletonWidth"
            animated
          ></b-skeleton>
        </b-navbar-item>
        <b-navbar-item class="is-hidden-desktop" tag="div">
          <b-button
            type="is-primary"
            size="is-medium"
            @click.stop="() => $emit('toggle-sidebar')"
          >
            <b-icon class="flex-center" icon="menu_topics" size="is-xg">
            </b-icon>
          </b-button>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons is-flex">
            <div class="block">
              <b-button type="is-primary" size="is-medium">
                <b-icon icon="search" size="is-xg"> </b-icon>
              </b-button>
              <increase-font-size type="diminuirtxt"></increase-font-size>
              <increase-font-size type="aumentartxt" plus></increase-font-size>
              <color-mode-picker></color-mode-picker>
              <b-button type="is-primary" size="is-medium">
                <b-icon icon="ouvir" size="is-xg"> </b-icon>
              </b-button>
            </div>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </section>
</template>
<script>
export default {
  props: {
    aula: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeNavbar: false,
    }
  },
  computed: {
    isMobile() {
      return this.$mq === 'xs' || this.$mq === 'sm'
    },
    marginTop() {
      return this.isMobile ? 'pt-5' : 'pt-6'
    },
    skeletonWidth() {
      return this.isMobile ? '200px' : '270px'
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-head {
  .navbar {
    border-radius: 0 0 50px 50px;
    background-color: $primary;
    &.is-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      /deep/.navbar-brand {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      /deep/.flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      /deep/.navbar-menu {
        box-shadow: none;
      }
    }
  }
  &.sticky-top {
    position: sticky;
    top: 0;
    z-index: 99;
  }
}

.dark-mode {
  .hero-head {
    .navbar {
      background-color: $black;
      /deep/.navbar-menu {
        background-color: $black;
      }

      h2 {
        color: $warning;
      }

      .button {
        background-color: unset;

        .icon {
          color: $success;
        }
      }
    }
  }
}
</style>
