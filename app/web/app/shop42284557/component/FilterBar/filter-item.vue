<template>
  <div class="filter-item" :class="{ active }" @click="onSelect">
    <span>{{ data.title }}</span>
    <lee-icon class="margin-left-xs" :type="`arrow-${ value === 'asc' ? 'up' : 'down' }`" v-show="showArrow" />
  </div>
</template>

<script>
export default {
  name: 'LeeFilterItem',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: this.data.value && this.data.value[0]
    }
  },
  computed: {
    showArrow() {
      return this.active && this.value
    }
  },
  methods: {
    onSelect() {
      if (this.active && this.data.value) {
        let index = this.data.value.indexOf(this.value) + 1
        if (index > this.data.value.length - 1) {
          index = 0
        }
        this.value = this.data.value[index]
      }
      this.$emit('select', this.data, this.value)
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
