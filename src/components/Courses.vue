<template>
    <div class="courses">
        <div class="container">
            <div class="courses_content">
                <h2 class="courses_title">
                    {{$t('courses.title')}}
                </h2>
                <carousel class="courses_carousel" :items-to-show="((width <= 767) ? 1 : 4)" snapAlign="start">
                    <slide v-for="(item, idx) in content.list" :key="idx">
                        <ItemCatCourses :content="item" />
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
                <Button :btnClass="'btnLink'" @click="openCourses()"> {{$t('courses.btnName')}}</Button>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import Button from '@/components/UI/Controls/Button.vue'
import ItemCatCourses from '@/components/ItemCatCourses.vue'
export default {
    props: ['content'],
    components: {
        Button,
        Carousel,
        Slide,
        Navigation,
        ItemCatCourses
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
        openCourses() {
            this.$router.push(`/${this.$i18n.locale}/courses`)
        }
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

        &_title {
            font-size: mobile-vw(24);
            margin-bottom: mobile-vw(50);
        }

    }
}

</style>