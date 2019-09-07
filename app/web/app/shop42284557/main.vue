<template>
  <lee-base v-loading="$loading.value">
    <lee-header />
    <keep-alive exclude="LeeCase">
      <router-view />
    </keep-alive>
    <search-page></search-page>
  </lee-base>
</template>

<script>
import SearchPage from './component/SearchPage/main'
export default {
  name: 'LeeRoot',
  components: { SearchPage }
}
</script>
