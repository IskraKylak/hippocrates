<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
<script>

import MainLayout from '@/layouts/MainLayout'

export default {
  components: {
    MainLayout,
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
}
</script>

<style lang="scss">
</style>
