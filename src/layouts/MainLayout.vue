<template>
  <HeaderMain />
  <router-view /> 
  <FooterMain />
  <MobMenu />
</template>

<script>
import HeaderMain from '@/components/app/HeaderMain'
import FooterMain from '@/components/app/FooterMain'
import MobMenu from '@/components/app/MobMenu'
export default {
  components: {
    HeaderMain,
    FooterMain,
    MobMenu
  },
}
</script>
<style lang="scss">
</style>
