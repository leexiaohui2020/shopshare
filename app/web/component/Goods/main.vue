<template>
  <div class="goods" @click="select" v-loading="loading">
    <div class="goods-image">
      <img v-lazy="data.image" :alt="data.title">
    </div>
    <div class="goods-info">
      <h3 class="goods-title">{{ data.title }}</h3>
      <div class="goods-footer">
        <div class="goods-price">{{ data.price }}</div>
        <div class="goods-icon">
          <lee-icon type="link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Goods } from 'shop42284557/api/goods'
export default {
  name: 'LeeGoods',
  props: {
    data: {
      type: Goods
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async select() {
      this.loading = true
      await this.data.open()
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>