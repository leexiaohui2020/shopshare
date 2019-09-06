<template>
  <div class="header-custom">
    <header class="header">
      <div class="header-action left" v-if="backBtn" @click="back">
        <lee-icon prefix="ios" type="arrow-back" />
      </div>
      <h1 class="header-title">{{ siteTitle }}</h1>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LeeHeader',
  props: {
    backBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('config', ['siteTitle'])
  },
  methods: {
    back() {
      this.$emit('back')
    }
  },
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
