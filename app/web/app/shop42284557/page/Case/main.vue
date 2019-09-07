<template>
  <lee-scroll ref="scroll" height="calc(100vh - 50px)" :on-pull-up="onPullUp">
    <!-- 分类图片 -->
    <img ref="picture" :src="tag.picture" class="response" v-if="tag">
    <lee-grid class="padding-lr" :col="2" :gutter="10">
      <div v-for="(v, k) of goods" :key="k">
        <lee-goods :data="v" />
      </div>
    </lee-grid>
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
      pageSize: 10,
      goods: [],
      loading: false,
      loadEnd: false
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
      } else {
        this.loadEnd = true
      }

      this.loading = false
      this.$loading.finish()
    },

    async onPullUp() {
      await this.getCase()
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
    await this.getCase()
  },
  watch: {
    goods() {
      this.$refs.scroll.refresh()
    }
  },
  installRouter(router) {
    router.regist('case', '/case', this)
  }
}
</script>
