<template>
  <lee-scroll ref="scroll" height="calc(100vh - 50px)" :on-pull-up="onPullUp">
    <!-- 分类图片 -->
    <img ref="picture" :src="tag.picture" class="response" v-if="tag">
    <lee-grid class="padding-lr" :col="2" :gutter="10">
      <div v-for="(v, k) of goods" :key="k">
        <lee-goods :data="v" />
      </div>
    </lee-grid>
    <lee-load-end :height="loadEndHeight" v-show="loadEnd" />
  </lee-scroll>
</template>

<script>
import { getCase } from 'shop42284557/api/goods'

export default {
  name: 'LeeCase',
  data() {
    return {
      tagId: null,
      page: 0,
      pageSize: 20,
      goods: [],
      loading: false,
      loadEnd: false,
      loadEndHeight: '40px'
    }
  },
  computed: {
    tag() {
      const navlist = this.$store.state.config.typesNav
      const item = navlist.find(v => v.tagId === this.tagId)
      return item || null
    }
  },
  methods: {
    async getCase() {
      if (this.loading) return
      if (this.loadEnd) return
      this.loading = true
      this.$loading.start()

      const { tagId, page, pageSize } = this
      const data = await getCase({ tagId, page: page + 1, pageSize })
      if (data.length > 0) {
        this.page ++
        this.goods = this.goods.concat(data)
      }
      if (data.length < pageSize) {
        this.loadEnd = true
      }
      this.loading = false
      this.$loading.finish()
    },

    async onPullUp() {
      await this.getCase()
    },

    async reinitLoadEndHeight() {
      const scroll = this.$refs.scroll.scroll
      const height = Math.max(scroll.maxScrollY - scroll.y)
      this.loadEndHeight = `${height + 40}px`
    }
  },
  async created() {
    const { tagId } = this.$route.query
    if (tagId) {
      this.tagId = tagId
    } else {
      this.$router.back()
    }
  },
  async mounted() {
    this.$nextTick(async () => {
      const scroll = this.$refs.scroll.scroll
      scroll.on('scroll', this.reinitLoadEndHeight)
      scroll.on('refresh', this.reinitLoadEndHeight)
      await this.getCase()
    })
  },
  watch: {
    goods() {
      this.$refs.scroll.refresh()
    },
    loadEnd() {
      this.$refs.scroll.refresh()
    }
  },
  installRouter(router) {
    router.regist('case', '/case', this)
  }
}
</script>
