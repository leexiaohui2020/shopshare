<template>
  <lee-base v-loading="$loading.value" :title="title">
    <lee-header />
    <keep-alive exclude="LeeCase,LeeSearch">
      <router-view />
    </keep-alive>
    <search-page></search-page>
  </lee-base>
</template>

<script>
import SearchPage from './component/SearchPage/main'
import { mapState } from 'vuex'
export default {
  name: 'LeeRoot',
  components: { SearchPage },
  computed: {
    ...mapState('config', ['title'])
  }
}
</script>
