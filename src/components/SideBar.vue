<template>
  <b-sidebar
    fullheight
    :position="position"
    :open.sync="openSidebar"
    :right="isFixed"
  >
    <section v-if="articles.length" class="px-2 py-5">
      <ul class="menu-list is-size-5">
        <li>
          <nuxt-link
            to="/"
            exact-active-class="sidebar-content__is-active"
            class="is-flex is-align-items-center pb-0"
          >
            <b-icon icon="home" class="pb-3" />
            <div class="path-name ml-5 pb-1">Início</div>
          </nuxt-link>
        </li>
        <li v-for="article of articles" :key="article.path">
          <nuxt-link
            :to="article.path"
            exact-active-class="sidebar-content__is-active"
            class="is-flex is-align-items-center pb-0"
          >
            <b-icon :icon="article.icon" class="pb-3" />
            <div class="path-name ml-5 pb-1">{{ article.title }}</div>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section v-if="!articles.length" class="skeleton-loading px-2 py-5">
      <b-skeleton width="80%" animated></b-skeleton>
      <b-skeleton width="70%" animated></b-skeleton>
      <b-skeleton width="80%" animated></b-skeleton>
      <b-skeleton width="80%" animated></b-skeleton>
      <b-skeleton width="60%" animated></b-skeleton>
      <b-skeleton width="80%" animated></b-skeleton>
      <b-skeleton width="70%" animated></b-skeleton>
      <b-skeleton width="70%" animated></b-skeleton>
      <b-skeleton width="60%" animated></b-skeleton>
      <b-skeleton width="80%" animated></b-skeleton>
      <b-skeleton width="70%" animated></b-skeleton>
      <b-skeleton width="70%" animated></b-skeleton>
    </section>
  </b-sidebar>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    sidebarToggle: {
      type: Boolean,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  computed: {
    openSidebar: {
      get() {
        return !this.isMobile || this.sidebarToggle
      },
      set(value) {
        this.$emit('update:sidebarToggle', value)
      },
    },
    isFixed() {
      return this.position === 'fixed'
    },
    isMobile() {
      return this.$mq === 'sm' || this.$mq === 'xs'
    },
  },
  watch: {
    $route(val, old) {
      if (val !== old) this.openSidebar = false
    },
  },
}
</script>
<style lang="scss" scoped>
.is-align-items-center {
  align-items: center;
}
/deep/.sidebar-content {
  position: relative;
  min-height: 100%;
  z-index: 101;
  &.is-static > section {
    position: fixed;
    margin-left: 0;
    margin-top: 0;
    left: unset;
    top: unset;
    width: 260px;
  }
  &__is-active {
    color: #3f51b5;
    font-weight: 600;
    :hover {
      color: #3f51b5;
    }
  }
  li {
    font-weight: 400;
    .path-name {
      width: 100%;
      line-height: 30px;
    }
  }
  .skeleton-loading {
    min-height: 100%;
    .b-skeleton-item {
      margin: 10px;
    }
  }
}
.light-mode {
  .b-sidebar {
    /deep/.sidebar-content {
      background-color: #fff !important;
    }
  }
  .sidebar-content {
    a {
      color: #353535;

      .path-name {
        border-bottom: 1px solid #efefef;
      }
    }

    a:hover {
      background-color: #f9f9f9;
    }

    .sidebar-content__is-active {
      .path-name {
        color: #3f51b5;
      }
    }
  }
}

.dark-mode {
  .b-sidebar {
    /deep/.sidebar-content {
      background-color: $black !important;
    }
  }
  .sidebar-content {
    a {
      color: $success;

      .path-name {
        border-bottom: 1px solid $success;
      }
    }

    a:hover {
      background-color: unset;

      .path-name {
        background-color: unset;
        border-bottom: 1px solid $success;
      }
    }

    .sidebar-content__is-active {
      border: 1px solid $success;

      .path-name {
        color: $success;
      }
    }
  }
}
</style>
