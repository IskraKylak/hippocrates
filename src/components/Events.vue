<template>
    <div class="events">
        <div class="container">
            <div class="events_content">
                <h2 class="events_title">
                    {{ content.title }}
                </h2>
                <carousel class="events_carousel" :items-to-show="((width <= 767) ? 1 : 2)" snapAlign="start">
                    <slide v-for="(item, idx) in content.list" :key="idx">
                        <ItemEvent :content="item" />
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
                <Button :btnClass="'btnLink'" @click="openLogin()"> {{$t('events.btnName')}} </Button>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import Button from '@/components/UI/Controls/Button.vue'
import ItemEvent from '@/components/ItemEvent'
export default {
    props: ['content'],
    components: {
        Button,
        Carousel,
        Slide,
        Navigation,
        ItemEvent
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
        openLogin() {
            if(this.tokkent === '')
                this.$router.push(`/${this.$i18n.locale}/login`)
            else
                window.open(`https://asprofosvit.org/another_domen_auth/${this.tokkent}`);
        }
    },
    computed: {
        tokkent() {
            return this.$store.getters.getToken
        }
    },
    created() {
        this.width = window.innerWidth;
        window.addEventListener('resize', this.updateWidth);
    },
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

.carousel__slide {
    align-items: flex-start;
}

.carousel__prev {
    left: desktop-vw(-20);
}

.carousel__next {
    right: desktop-vw(-20);
}

.events {

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
        max-width: desktop-vw(515);
        width: 100%;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: all 0.5s ease;
        height: 100%;

        // &:hover {
        //     box-shadow: 0px 2px 16px rgb(0 0 0 / 25%);
        // }
    }

    &_bottom {
        padding: desktop-vw(20) 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - desktop-vw(280));
    }

    &_img {
        height: desktop-vw(280);
        width: 100%;
        position: relative;
        display: flex;
        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(24);
        line-height: 130%;
        /* identical to box height */
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(50);
    }

    &_name {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(14);
        line-height: 130%;
        /* identical to box height */
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(16);  
        text-align: left;
    }

    &_text {
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(14);
        line-height: 130%;
        color: #383838;
        margin-bottom: desktop-vw(23); 
    }

    &_wrapData {
        display: flex;
        justify-content: space-between;
    }

    &_data {
        display: flex;
        grid-gap: desktop-vw(20);
        span {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(14);
            line-height: 130%;
            color: #1FAEEA;
        }
    }

    &_more {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(14);
        line-height: 130%;
        text-align: right;
        color: #1FAEEA;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: #25d1ff;
        }
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .carousel__prev, .carousel__next {
        background-color: #1FAEEA;
        height: mobile-vw(26);
        width: mobile-vw(26);
    }

    .carousel__prev {
        left: mobile-vw(20);
    }

    .carousel__next {
        right: mobile-vw(20);
    }

    .events {

        &_carousel {
            margin-bottom: mobile-vw(47);
        }

        &_content {
            padding: mobile-vw(50) 0;
        }

        &_item {
            max-width: mobile-vw(515);
        }

        &_bottom {
            padding: mobile-vw(20) 0 0;
            height: calc(100% - mobile-vw(280));
        }

        &_img {
            height: mobile-vw(280);
        }

        &_title {
            font-size: mobile-vw(24);
            margin-bottom: mobile-vw(50);
        }

        &_name {
            font-size: mobile-vw(14);
            margin-bottom: mobile-vw(16);  
        }

        &_text {
            font-size: mobile-vw(14);
            margin-bottom: mobile-vw(23); 
        }

        &_data {
            grid-gap: mobile-vw(20);
            span {
                font-size: mobile-vw(14);
            }
        }

        &_more {
            font-size: mobile-vw(14);
        }
    }
}
</style>