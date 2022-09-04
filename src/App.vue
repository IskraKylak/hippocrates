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
  max-width: 1400px;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1200px;
  }
}

@media (min-width: 1520px) {
  .container {
    max-width: 1400px;
  }
}
</style>
