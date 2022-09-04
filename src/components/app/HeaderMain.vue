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

<style lang="scss">
</style>