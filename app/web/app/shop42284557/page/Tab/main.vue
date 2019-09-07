<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Home from './Home/main'

export default {
  name: 'LeeTab',
  installRouter(router) {
    router.regist('index', '/', this, null, {
      redirect: '/home'
    })
    router.addChild(Home)
  }
}
</script>
