<template>
  <div class="goods" @click="select">
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
  methods: {
    select() {
      this.$emit('select', this.data)
    }
  }
}
</script>

<style lang="less" scoped>
@import 'main';
</style>