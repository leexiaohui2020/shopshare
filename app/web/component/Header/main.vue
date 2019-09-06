<template>
  <div class="header-custom">
    <header class="header">
      <h1 class="header-title">{{ siteTitle }}</h1>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LeeHeader',
  computed: {
    ...mapState('config', ['siteTitle'])
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
