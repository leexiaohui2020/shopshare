<template>
  <div class="wrapper" ref="wrapper" :style="wrapperStyle">
    <div class="wrapper-content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'LeeScroll',
  props: {
    height: {
      type: String,
      default: ''
    },
    bounce: {
      type: [Boolean, Object],
      default: false
    },
    probeType: {
      type: Number,
      default: 3
    }
  },
  computed: {
    wrapperStyle() {
      return {
        height: this.height
      }
    }
  },
  methods: {
    async _initScroll() {
      const wrapper = this.$refs.wrapper
      const bounce = {}
      if (typeof this.bounce === 'boolean') {
        bounce.top = bounce.left = bounce.right = bounce.bottom = this.bounce
      } else {
        Object.assign(bounce, this.bounce)
      }
      const scroll = this.scroll = new BScroll(wrapper, {
        bounce,
        probeType: this.probeType
      })
    },

    async refresh() {
      this.$nextTick(() => {
        this.scroll && this.scroll.refresh()
      })
    }
  },
  async mounted() {
    this.$nextTick(async () => {
      await this._initScroll()
    })

    this.onResize = async () => await this.refresh()
    window.addEventListener('resize', this.onResize)
  },
  async destroyed() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
