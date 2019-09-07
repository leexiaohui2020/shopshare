<template>
  <div class="wrapper" ref="wrapper" :style="wrapperStyle">
    <div class="wrapper-content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
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
    },
    onPullUp: {
      type: Function
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

      const pullUpLoad = typeof this.onPullUp === 'function'
      if (pullUpLoad) {
        bounce.bottom = true
      }
      const scroll = this.scroll = new BScroll(wrapper, {
        bounce,
        pullUpLoad,
        probeType: this.probeType
      })

      if (pullUpLoad) {
        scroll.on('pullingUp', async () => {
          await this.onPullUp()
          scroll.finishPullUp()
        })
      }
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
