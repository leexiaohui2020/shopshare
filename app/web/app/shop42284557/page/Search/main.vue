<template>
  <div>
    <!-- 搜索框 -->
    <div class="padding-lr padding-tb-xs">
      <lee-input prefix="search" :placeholder="keywords" />
      <div class="cover" @click="openSearch"></div>
    </div>
    <!-- 筛选条 -->
    <filter-bar v-model="orderValue" @change="onOrderChange" />
    <lee-scroll ref="scroll" height="calc(100vh - 140px)" :on-pull-up="onPullUp">
      <div class="padding padding-tb-xs" v-for="(v, k) of goods" :key="k">
        <lee-goods-card :goods="v" />
      </div>
      <lee-load-end :height="loadEndHeight" v-show="loadEnd" />
    </lee-scroll>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FilterBar from 'shop42284557/component/FilterBar/main'
import { getGoodsByKeywords } from 'shop42284557/api/goods'
export default {
  name: 'LeeSearch',
  components: { FilterBar },
  data() {
    return {
      keywords: '',
      orderValue: {},
      page: 0,
      pagesize: 20,
      goods: [],
      loading: false,
      loadEnd: false,
      loadEndHeight: '40px'
    }
  },
  methods: {
    async _reInit() {
      await this._getKeywordsFromRoute()
      this.pagesize = 20
      this.page = 0
      this.goods = []
      this.loadEnd = false
      this.loading = false
      if (this.orderValue.orderBy === '') {
        await this.onOrderChange({ orderBy: '' })
      } else {
        this.orderValue = { orderBy: '' }
      }
    },

    async _getKeywordsFromRoute() {
      const { keywords } = this.$route.query
      if (!keywords) {
        this.$router.back()
      } else {
        this.keywords = keywords
      }
    },

    async onOrderChange(v) {
      this.loadEnd = false
      this.loading = true
      this.$loading.start()
      const data = await getGoodsByKeywords({
        keyword: this.keywords,
        page: 1,
        page_size: this.pagesize,
        order: v.order,
        order_by: v.orderBy
      })
      this.page = 1
      this.goods = data
      if (data.length < this.pagesize) {
        this.loadEnd = true
      }
      this.$loading.finish()
      this.loading = false
      this.$refs.scroll.scrollTo(0, 0)
    },

    async onPullUp() {
      if (this.loadEnd) return
      if (this.loading) return
      this.loading = true
      this.$loading.start()
      const data = await getGoodsByKeywords({
        keyword: this.keywords,
        page: this.page + 1,
        page_size: this.pagesize,
        order: this.orderValue.order,
        order_by: this.orderValue.orderBy
      })
      if (data.length > 0) {
        this.page ++
        this.goods = this.goods.concat(data)
      }
      if (data.length < this.pagesize) {
        this.loadEnd = true
      }
      this.$loading.finish()
      this.loading = false
    },

    async reinitLoadEndHeight() {
      const scroll = this.$refs.scroll.scroll
      const height = Math.max(0, scroll.maxScrollY - scroll.y)
      this.loadEndHeight = `${height + 40}px`
    },

    ...mapActions('search', ['openSearch'])
  },
  async mounted() {
    await this._reInit()
    this.$nextTick(() => {
      const scroll = this.$refs.scroll.scroll
      scroll.on('scroll', this.reinitLoadEndHeight)
      scroll.on('refresh', this.reinitLoadEndHeight)
    })
  },
  async beforeRouteUpdate(to, from, next) {
    console.info(123)
    next()
    await this._reInit()
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
    router.regist('search', '/search', this)
  }
}
</script>
