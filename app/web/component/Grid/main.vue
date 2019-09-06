<template>
  <div class="grid" :class="`grid-col-${col} grid-gutter-${gutter}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LeeGrid',
  props: {
    col: {
      type: Number,
      default: 4
    },

    gutter: {
      type: Number,
      default: 0
    }
  },
}
</script>

<style lang="less" scoped>
.grid-col-mixs(@col) {
  &.grid-col-@{col} > div {
    width: 100% / @col;
  }
}
.grid-gutter-mixs(@gutter) {
  &.grid-gutter-@{gutter} > div {
    padding: @gutter/2px;
    &:nth-child(odd) {
      padding-left: 0;
    }
    &:nth-child(even) {
      padding-right: 0;
    }
  }

  &.grid-gutter-@{gutter} {
    padding-top: @gutter / 2px;
    padding-bottom: @gutter / 2px;
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;

  .grid-col-mixs(1);
  .grid-col-mixs(2);
  .grid-col-mixs(3);
  .grid-col-mixs(4);
  .grid-col-mixs(5);
  
  .grid-gutter-mixs(5);
  .grid-gutter-mixs(10);
  .grid-gutter-mixs(15);
  .grid-gutter-mixs(20);
  .grid-gutter-mixs(25);
}
</style>
