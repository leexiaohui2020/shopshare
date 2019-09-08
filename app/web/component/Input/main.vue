<template>
  <div class="bar">
    <lee-icon class="bar-prefix" :type="prefix" v-if="prefix" />
    <input ref="input" class="bar-input" :placeholder="placeholder" v-model="VALUE" @keyup.enter="onEnter">
    <lee-icon class="bar-suffix" :type="suffix" v-if="suffix" />
  </div>
</template>

<script>
export default {
  name: 'LeeInput',
  props: {
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      VALUE: this.value
    }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },

    onEnter() {
      this.$emit('enter', this.VALUE)
    }
  },
  watch: {
    value(v) {
      this.VALUE = v
    },
    VALUE(v) {
      if (v !== this.value) {
        this.$emit('input', v)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
