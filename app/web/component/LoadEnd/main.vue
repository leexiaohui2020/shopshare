<template>
  <div class="loadend" :style="`height: ${height}`">
    <lee-icon class="margin-right-xs" :type="icon" v-if="icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'LeeLoadEnd',
  props: {
    height: {
      type: String,
      default: '40px'
    },

    text: {
      type: String,
      default: '到底了'
    },

    icon: {
      type: String,
      default: 'happy'
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
