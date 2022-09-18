<template>
    <div class="courses">
        <div class="container">
            <div class="courses_content">
                <h2 class="courses_title">
                    {{ content.title }}
                </h2>
                <carousel class="courses_carousel" :items-to-show="((width <= 767) ? 1 : 4)" snapAlign="start">
                    <slide v-for="(item, idx) in content.list" :key="idx">
                        <div class="courses_item"> 
                            <div class="courses_img">
                                <img :src="item.img" alt="img">
                            </div>
                            <div class="courses_name">
                                {{ item.name }}
                            </div>
                        </div>
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
                <Button :btnClass="'btnLink'"> Переглянути усі </Button>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import Button from '@/components/UI/Controls/Button.vue'
export default {
    props: ['content'],
    components: {
        Button,
        Carousel,
        Slide,
        Navigation
    },
    data() {
        return {
           width: 0,
        }
    },
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
        },
    },
    created() {
        this.width = window.innerWidth;
        window.addEventListener('resize', this.updateWidth);
    },
}
</script>

<style lang="scss">

.courses {

    &_carousel {
        margin-bottom: desktop-vw(47);
    }

    button {
        margin: 0 auto;
    }

    &_content {
        padding: desktop-vw(50) 0;
    }

    &_item {
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
    }

    &_img {
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

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(24);
        line-height: 130%;
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(50);
    }

    &_name {
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

}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .courses {
        &_carousel {
            margin-bottom: mobile-vw(47);
        }

        &_content {
            padding: mobile-vw(50) 0;
        }

        &_item {
            max-width: mobile-vw(230);
            height: mobile-vw(230);
            padding: mobile-vw(25);
        }

        &_title {
            font-size: mobile-vw(24);
            margin-bottom: mobile-vw(50);
        }

        &_name {
            font-size: mobile-vw(16);
        }

    }
}

</style>