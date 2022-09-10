<template>
    <div class="courses">
        <div class="container">
            <div class="courses_content">
                <h2 class="courses_title">
                    {{ content.title }}
                </h2>
                <carousel class="courses_carousel" :items-to-show="4" snapAlign="start">
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
           
        }
    }
}
</script>

<style lang="scss">



.carousel__prev, .carousel__next {
    background-color: #1FAEEA;
    height: desktop-vw(50);
    width: desktop-vw(50);
    border-radius: 3px;
    svg {
        height: 60%;
        width: 60%;
    }
}

.carousel__prev {
    left: desktop-vw(-20);
}

.carousel__next {
    right: desktop-vw(-20);
}

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


</style>