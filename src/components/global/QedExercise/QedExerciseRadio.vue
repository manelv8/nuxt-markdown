<template>
  <section class="exercise-radio-container">
    <div class="card px-5 py-5">
      <div class="card-content">
        <div class="content">
          <div class="question-title is-size-4">
            <strong>{{ title }}</strong> {{ questionTitle }}
          </div>
          <div class="exercise-options mt-5 mb-6">
            <b-field v-for="option in computedOptions" :key="option.value">
              <b-radio-button
                v-model="optionSelected"
                :native-value="option"
                size="is-medium"
                :class="option.type"
                :type="option.type"
                class="radio-option"
              >
                <span class="is-size-5 has-text-left radio-option__span">{{
                  option.text
                }}</span>
                <b-icon
                  class="radio-icon"
                  :icon="option.icon"
                  :type="option.type"
                  size="is-large"
                ></b-icon>
              </b-radio-button>
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    questionTitle: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    correctOption: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      optionSelected: null,
    }
  },
  computed: {
    computedOptions() {
      return this.options.map((o, index) => {
        const text = this.optionOrder(index, o)
        return {
          value: o,
          text,
          type: 'is-primary',
          selected: false,
          icon: 'none',
        }
      })
    },
  },
  methods: {
    optionOrder(index, optionValue) {
      const orderValue = ['a)', 'b)', 'c)', 'd)', 'e)']
      return orderValue[index].concat(' ', optionValue)
    },
    checkAnswer() {
      if (this.correctOption.includes(this.optionSelected.value)) {
        this.optionSelected.icon = 'certo'
        this.optionSelected.type = 'is-success'
      } else {
        this.optionSelected.icon = 'errado'
        this.optionSelected.type = 'is-danger'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  border-radius: 10px;
  margin-bottom: 30px;

  .card-header {
    box-shadow: 0px 18px 4px -16px rgba(128, 128, 128, 0.18);
  }
}

.color {
  color: $info;
}

.border {
  border-top: 0.5rem solid $info;
}

.button {
  border-radius: 10px;
}

.exercise-options {
  width: 50%;
  .radio-icon {
    position: absolute;
    right: -40px;
  }
  /deep/.radio-option {
    &.is-success > label {
      border-color: #36db0d;
      color: #363636;
    }
    &.is-danger > label {
      border-color: #e43119;
      color: #363636;
    }
    label {
      background-color: #f9f9f9;
      border-radius: 10px;
      &.is-primary {
        border-color: #3f51b5;
        color: #363636;
      }
    }
    &__span {
      width: 100%;
    }
  }
}

.dark-mode {
  .card {
    background-color: $black;
    color: $warning;

    .card-header {
      box-shadow: unset;

      .card-header-title {
        color: $warning;
      }
    }

    .radio-option {
      /deep/label {
        background-color: $black;
        border: 0.125rem solid $success;
        color: white;
      }
    }

    .button {
      background-color: $black;
      border: 0.125rem solid $success;
      color: white;
    }
  }
}
</style>
