<template>
  <div>
    <!-- 搜索点击框 -->
    <div class="search-box">
      <lee-input prefix="search" :placeholder="SEARCH_PLACEHOLDER" />
      <div class="cover" @click="openSearchPage"></div>
    </div>

    <lee-scroll ref="scroll" height="calc(100vh - 100px)">
      <!-- 分类导航 -->
      <lee-grid class="nav">
        <div class="nav-item" v-for="(v, k) of typesNav" :key="k" @click="openTagItem(v)">
          <div class="nav-image">
            <img :src="v.image" :alt="v.title">
          </div>
          <div class="nav-title">{{ v.title }}</div>
        </div>
      </lee-grid>

      <!-- 推荐商品 -->
      <h3 class="caption">推荐商品</h3>
      <lee-grid class="padding-lr" :col="2" :gutter="10">
        <div v-for="(v, k) of recommendGoods" :key="k">
          <lee-goods :data="v" />
        </div>
      </lee-grid>
    </lee-scroll>
  </div>
</template>

<script>
import { SEARCH_PLACEHOLDER } from 'common/constant-types'
import { mapState } from 'vuex'
import { getRecommend } from 'shop42284557/api/goods'

export default {
  name: 'LeeHome',
  data() {
    return {
      recommendGoods: [],
      SEARCH_PLACEHOLDER
    }
  },
  computed: {
    ...mapState('config', ['typesNav'])
  },
  methods: {
    async _getRecommend() {
      this.recommendGoods = await getRecommend()
    },

    async openTagItem(item) {
      const { tagId } = item
      this.$router.push({
        name: 'case',
        query: {
          tagId
        }
      })
    },

    async openSearchPage() {
      this.$search.open()
    }
  },
  async mounted() {
    await this._getRecommend()
  },
  watch: {
    async recommendGoods() {
      const scroll = this.$refs.scroll
      scroll && await scroll.refresh()
    }
  },
  installRouter(router) {
    router.regist('home', '/home', this)
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
