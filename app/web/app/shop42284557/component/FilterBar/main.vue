<template>
  <div class="filter">
    <filter-item v-for="(v, k) of filterNav" :key="k" :data="v" :active="VALUE.orderBy === v.key" @select="selectItem" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FilterItem from './filter-item'
export default {
  name: 'FilterBar',
  components: { FilterItem },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      VALUE: this.value
    }
  },
  computed: {
    ...mapState('config', ['filterNav'])
  },
  methods: {
    selectItem(item, order) {
      this.active = item.key
      this.VALUE = {
        order,
        orderBy: item.key
      }
    }
  },
  watch: {
    VALUE(value, oldValue) {
      if (value.order != oldValue.order || value.orderBy != oldValue.orderBy) {
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    value(v) {
      this.VALUE = v
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
