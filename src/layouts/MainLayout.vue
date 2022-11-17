<template>
  <HeaderMain />
  <router-view /> 
  <FooterMain />
  <div id="message" class="hidden-xs"></div>
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
#message {
    padding: desktop-vw(20);
    position: fixed;
    top: 40vh;
    right: 10vh;
    background: #e1cd00;
    z-index: 100;
    color: #fff;
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease;

    &.hidden-xs {
      visibility: hidden;
      opacity: 0;
    }
}
</style>
