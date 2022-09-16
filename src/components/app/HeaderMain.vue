<template>
  <div class="header">
    <Navigation />
    <MainMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import MainMenu from '@/components/MainMenu.vue'
export default {
  components: {
    Navigation,
    MainMenu
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  // left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 -20px 40px 0 #1faeea;
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  .header {
    position: relative;
    top: auto;
    // left: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0 -20px 40px 0 #1faeea;
    padding: mobile-vw(50) 0 0 0;
  }
}
</style>