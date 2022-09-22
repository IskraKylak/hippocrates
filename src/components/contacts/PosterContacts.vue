<template>
  <div class="contactPoster">
    <img :src="content.img" alt="img">
    <div class="container">
        <h2 class="contactPoster_title">
            {{ content.title }}
        </h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: ['content'],
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

.contactPoster {
    padding: desktop-vw(104) 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(34);
        line-height: 130%;
        text-transform: uppercase;
        position: relative;
        z-index: 4;
        color: #FFFFFF;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background: linear-gradient(180deg, rgba(31, 174, 234, 0.2) 0%, rgba(36, 36, 36, 0.8) 100%);
        height: 100%;
        width: 100%;
        z-index: 3;
    }

    img {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: 2;
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
}

</style>