<template>
  <div class="notFound">
    <div class="container">
      <h1>404 Page not found!</h1>
      <p>Go to <router-link class="link-home" to="/">Main Page</router-link>?</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.notFound {
  padding-top: calc(desktop-vw(150) + desktop-vw(100));
  padding-bottom: desktop-vw(100);
}

.notFound h1 {
  font-size: desktop-vw(50);
  text-align: center;
  color: rgb(32, 29, 29);
  padding: desktop-vw(40) 0;
}

p {
  text-align: center;
}

.link-home {
  color: #fa5c18;
}
</style>
