<template>
  <lee-base v-loading="$loading.value">
    <lee-header />
    <keep-alive exclude="LeeCase">
      <router-view />
    </keep-alive>
  </lee-base>
</template>

<script>
export default {
  name: 'LeeRoot'
}
</script>
