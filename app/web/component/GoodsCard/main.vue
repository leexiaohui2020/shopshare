<template>
  <div class="goods" @click="onSelect" v-loading="loading">
    <div class="goods-image">
      <img v-lazy="goods.image" :alt="goods.title" class="response">
    </div>
    <div class="goods-info">
      <h3 class="goods-title">{{ goods.title }}</h3>
      <div class="goods-footer">
        <span class="goods-price">{{ goods.price }}</span>
        <span class="goods-sold">{{ goods.totalSoldNum }}件已售</span>
        <lee-icon type="link" />
      </div>
    </div>
  </div>
</template>

<script>
import { Goods } from 'shop42284557/api/goods'
export default {
  name: 'LeeGoodsCard',
  props: {
    goods: {
      type: Goods,
      required: true
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async onSelect() {
      this.loading = true
      await this.goods.open()
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>
