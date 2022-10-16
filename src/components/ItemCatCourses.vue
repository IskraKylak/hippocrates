<template>
    <div class="coursesCat_item"> 
        <div class="coursesCat_img">
            <img :src="content.img" alt="img">
        </div>
        <div class="coursesCat_name">
            {{ content.name }}
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
    },
    methods: {
        goToCourse(prodId) {
            this.$router.push({
                name: 'vebinarPage',
                params: { Pid: prodId }
            })
        },
    }
}
</script>
<style lang="scss" scoped>

.coursesCat_item {
    max-width: desktop-vw(230);
    width: 100%;
    height: desktop-vw(230);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    padding: desktop-vw(25);
    cursor: pointer;
}

.coursesCat_img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    overflow: hidden;

    &:before {
        content: "";
        background: linear-gradient(180deg, rgba(31, 174, 234, 0.2) 0%, rgba(36, 36, 36, 0.8) 100%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
}

.coursesCat_name {
    font-style: normal;
    font-weight: 700;
    font-size: desktop-vw(16);
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    position: relative;
    z-index: 4;
}

@media screen and (max-width: $tablet) {

}
@media screen and (max-width: $mobile) {
    .coursesCat {

        &_item {
            max-width: mobile-vw(230);
            height: mobile-vw(230);
            padding: mobile-vw(25);
        }

        &_name {
            font-size: mobile-vw(16);
        }

    }
}

</style>