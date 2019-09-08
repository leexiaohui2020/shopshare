<template>
  <transition name="slide">
    <div class="page" v-show="show">
      <div class="search">
        <lee-input
          ref="input"
          class="search-input"
          prefix="search"
          v-model="keywords"
          :placeholder="placeholder"
          @enter="commitKeywords"
        />
        <div class="search-action" @click="closeSearch">取消</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LeeSearchPage',
  data() {
    return {
      keywords: ''
    }
  },
  computed: {
    ...mapState('search', ['show', 'placeholder'])
  },
  methods: {
    ...mapActions('search', ['commitKeywords', 'closeSearch'])
  },
  watch: {
    show(v) {
      this.keywords = ''
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
