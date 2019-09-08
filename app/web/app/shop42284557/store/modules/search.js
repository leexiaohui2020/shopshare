import App from 'shop42284557/main'

export default {
  state: {
    show: false,
    placeholder: '搜索商品'
  },

  actions: {
    async commitKeywords(ctx, keywords) {
      if (!keywords) return
      await ctx.dispatch('closeSearch')
      const router = App.$router
      router.push({ name: 'search', query: { keywords } })
    },

    async openSearch(ctx) {
      ctx.commit('setShow', true)
    },

    async closeSearch(ctx) {
      ctx.commit('setShow', false)
    }
  },

  mutations: {
    setShow(state, show) {
      state.show = show
    }
  }
}