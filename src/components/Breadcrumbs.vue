<template>
  <div class="breadcrumbs">
    <div v-for="(item, idx) in content" :key="idx">
        <router-link class="breadcrumbs_link" v-if="item.link"  :to="item.link">
            {{ item.name }} /
        </router-link>
        <div v-else  class="breadcrumbs_title">
            {{ item.name }}
        </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: ['content'],
  components: {
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

.breadcrumbs {
    margin: desktop-vw(20) 0 desktop-vw(30);
    background: #F8F8F8;
    padding: desktop-vw(14) desktop-vw(20);
    display: flex;
    align-items: center;
    grid-gap: desktop-vw(5);

    &_link,
    &_title {
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(16);
        line-height: 130%;
        /* identical to box height */
        text-transform: uppercase;
        color: #383838;
    }

    &_title {
        color: rgba(56, 56, 56, 0.5);
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .breadcrumbs {
        margin: 0 0 mobile-vw(30);
        padding: mobile-vw(14);
        grid-gap: mobile-vw(5);

        &_link,
        &_title {
            font-size: mobile-vw(14);
        }
    }
}

</style>