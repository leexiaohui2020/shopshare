<template>
  <i :class="iconClass" :style="iconStyle"></i>
</template>

<script>
export default {
  name: 'LeeIcon',
  props: {
    prefix: {
      type: String,
      default: 'md'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      const prefix = this.prefix === 'logo' ? 'logo' : `ion-${this.prefix}`
      return ['icon', `${prefix}-${this.type}`]
    },
    iconStyle() {
      return {
        color: this.color,
        fontSize: this.size
      }
    }
  }
}
</script>