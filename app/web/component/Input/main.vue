<template>
  <div class="bar">
    <lee-icon class="bar-prefix" :type="prefix" v-if="prefix" />
    <input class="bar-input" :placeholder="placeholder">
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
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
