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

.container {
  max-width: desktop-vw(1158);
  padding: 0 desktop-vw(15);
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  .container {
    max-width: mobile-vw(1158);
    padding: 0 mobile-vw(20);
    margin-right: auto;
    margin-left: auto;
    height: 100%;
  }
}
</style>
