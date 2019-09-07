<template>
  <transition name="slide">
    <div class="page" v-show="show">
      <div class="search">
        <lee-input
          class="search-input"
          ref="input"
          prefix="search"
          :placeholder="SEARCH_PLACEHOLDER"
          v-model="keywords"
        />
        <div class="search-action" @click="close">取消</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { SEARCH_PLACEHOLDER } from 'common/constant-types'
export default {
  name: 'LeeSearchPage',
  data() {
    return {
      keywords: '',
      SEARCH_PLACEHOLDER
    }
  },
  computed: {
    show() {
      return this.$search.show
    }
  },
  methods: {
    close() {
      this.$search.close()
    }
  },
  watch: {
    show(v) {
      if (v) {
        this.$refs.input.focus()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
