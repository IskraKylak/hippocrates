<template>
  <HeaderMain />
  <router-view />
  <FooterMain />
</template>

<script>
import HeaderMain from '@/components/app/HeaderMain'
import FooterMain from '@/components/app/FooterMain'
export default {
  components: {
    HeaderMain,
    FooterMain
  },
}
</script>
<style lang="scss">
</style>
