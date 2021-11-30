<template>
  <section>
    <div class="columns is-vcentered qed-pagination">
      <div class="column is-one-third is-full-mobile">
        <div class="exercNumber has-text-centered-mobile">
          <span
            >Qestão
            {{
              currentItem &lt; 10 ? `0${currentItem}` : currentItem
            }}
            de
            {{
              items.length &lt; 10 ? `0${items.length}` : items.length
            }}
          </span>
        </div>
      </div>
      <div class="column is-two-third is-full-mobile">
        <nav class="pagination-links">
          <nuxt-link
            v-if="items.length > 0"
            key="prev"
            :to="getPrevPagPath()"
            :event="getPrevPagPath() == '#' ? '' : 'click'"
            @click="decreaseCurrentItem"
          >
            <span
              :class="`prev-next page-item is-size-4 has-text-centered mr-3 px-3 py-4 ${
                getPrevPagPath() == '#' ? 'limit' : ''
              }`"
            >
              <b-icon icon="left" size="is-large"></b-icon>
            </span>
          </nuxt-link>

          <nuxt-link
            v-for="(item, index) in items"
            :key="item.path"
            :to="item.path"
          >
            <span
              v-if="
                (index <= currentItem - 1 && index > currentItem - 4) ||
                (index >= currentItem && index < currentItem + 2) ||
                (currentItem - 1 == 0 && index < 5) ||
                (currentItem - 1 == 1 && index < 5) ||
                (currentItem == items.length && index > currentItem - 6) ||
                (currentItem == items.length - 1 && index > currentItem - 5)
              "
              :class="`page-item is-size-4 has-text-centered mx-3 px-4 py-4 ${
                item.answered ? 'answered' : ''
              } ${index + 1 == currentItem ? `current-item` : ''}`"
              >{{ index &lt; 10 ? `0${index + 1}` : `${index + 1}`}}</span
            >
          </nuxt-link>

          <nuxt-link
            v-if="items.length > 0"
            key="next"
            :to="getNextPagPath()"
            :event="getNextPagPath() == '#' ? '' : 'click'"
            @click="increaseCurrentItem"
          >
            <span
              :class="`prev-next page-item is-size-4 has-text-centered ml-3 px-3 py-4 ${
                getNextPagPath() == '#' ? 'limit' : ''
              }`"
            >
              <b-icon icon="right" size="is-large"></b-icon>
            </span>
          </nuxt-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    this.items = await this.$content({ deep: true }).sortBy('title').fetch()
  },
  fetchOnServer: false,
  data() {
    return {
      items: [],
      currentItem: 1,
    }
  },
  methods: {
    getPrevPagPath() {
      return this.currentItem === 1
        ? '#'
        : this.items[this.currentItem - 2].path
    },
    getNextPagPath() {
      return this.currentItem === this.items.length
        ? '#'
        : this.items[this.currentItem].path
    },
    increaseCurrentItem(event) {
      event.preventDefault()
      if (this.currentItem < this.items.length) this.currentItem += 1
    },
    decreaseCurrentItem(event) {
      if (this.currentItem > 1) this.currentItem -= 1
    },
  },
}
</script>

<style lang="scss">
.qed-pagination {
  border-bottom: 3px solid $primary;
  padding-bottom: $size-6;

  .exercNumber {
    color: $primary;
    font-weight: 700;
    font-size: $size-4;
    margin-left: 0;
    padding-bottom: 0.5rem;

    a {
      display: none;
    }
  }

  .pagination-links {
    display: flex;
    float: right;

    .page-item {
      background: $light;
      border-radius: 50%;
    }

    .answered {
      background: $primary;
      color: $light;
      opacity: 0.5;
    }

    .limit {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .current-item {
      background: $primary;
      color: $light;
      opacity: 10;
    }

    .prev-next {
      background: $info;
      color: $light;
    }

    .prev-next > .icon {
      vertical-align: bottom;
    }

    .prev-next > .icon > .custom {
      font-size: $size-1 !important;
    }
  }
}

@media (max-width: 1023px) {
  .qed-pagination {
    border-bottom: unset;

    .exercNumber {
      border-bottom: 3px solid $primary;
      padding-bottom: $size-5;
    }

    .pagination-links {
      padding-top: $size-5;
      float: unset;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
