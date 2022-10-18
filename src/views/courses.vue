<template>
  <div class="courses">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <h1 class="courses_title">{{ title }}</h1>
        <div class="courses_content">
            <div class="courses_filter">
                <div class="courses_filter_title" :class="{'active' : activeFilter}" @click="activeFilter = !activeFilter">
                    {{ filterTitle }}
                </div>
                <slide-up-down class="courses_filter_list" v-model="activeFilter" :duration="300">
                    <CheckBox v-for="(item, idx) in CheckBox" :key="idx" :idx="idx" :content="item" />
                    <div class="mt"></div>
                    <Button :btnClass="'btnLink'">Показати</Button>
                </slide-up-down>
            </div>
            <div class="courses_list">
                <ItemCatCourses v-for="(item, idx) in courses.list" :key="idx" :content="item" />
            </div>
            <div class="courses_wrapCarusel">
                <carousel class="courses_carousel" :items-to-show="1" snapAlign="start">
                    <slide v-for="(item, idx) in courses.list" :key="idx">
                        <ItemCatCourses :content="item" />
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'vue3-carousel/dist/carousel.css';
import Breadcrumbs from '@/components/Breadcrumbs'
import CheckBox from '@/components/UI/Controls/CheckBox.vue'
import ItemCatCourses from '@/components/ItemCatCourses.vue'
import SlideUpDown from 'vue3-slide-up-down'
import Button from '@/components/UI/Controls/Button.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs,
    CheckBox,
    ItemCatCourses,
    SlideUpDown,
    Button,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
        activeFilter: true,
        title: 'Курси',
        filterTitle: 'Курси по спеціальностям',
        courses: {
            list: [
                {
                    img: require('../assets/img/courses/1.png'),
                    name: 'хірургія'
                },
                {
                    img: require('../assets/img/courses/2.png'),
                    name: 'сімейна медицина'
                },
                {
                    img: require('../assets/img/courses/3.png'),
                    name: 'кардіологія'
                },
                {
                    img: require('../assets/img/courses/4.png'),
                    name: 'неврологія'
                },
                {
                    img: require('../assets/img/courses/1.png'),
                    name: 'хірургія'
                },
                {
                    img: require('../assets/img/courses/2.png'),
                    name: 'сімейна медицина'
                },
                {
                    img: require('../assets/img/courses/3.png'),
                    name: 'кардіологія'
                },
                {
                    img: require('../assets/img/courses/4.png'),
                    name: 'неврологія'
                }
            ]
        },
        CheckBox: [
            'Акушер-гінеколог',
            'Алерголог-імунолог',
            'Анестезіолог',
            'Біолог',
            'Гастроентеролог',
            'Гематолог',
            'Дерматолог',
            'Ендокринолог',
            'Епідеміолог',
            'Акушер-гінеколог',
            'Алерголог-імунолог',
            'Анестезіолог',
            'Біолог',
            'Гастроентеролог',
            'Гематолог',
            'Дерматолог',
            'Ендокринолог',
            'Епідеміолог',
        ],
        breadcrumbs: [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'курсы'
            }
        ],
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

@media screen and (max-width: $mobile) {
    .carousel__prev, .carousel__next {
        background-color: #1FAEEA;
        height: mobile-vw(50);
        width: mobile-vw(50);
        border-radius: 3px;
        svg {
            height: 60%;
            width: 60%;
        }
    }

    .carousel__prev {
        left: mobile-vw(20);
    }

    .carousel__next {
        right: mobile-vw(20);
    }
}
</style>

<style lang="scss" scoped>

.mt {
    height: desktop-vw(15);
    width: 100%;
}

.coursesCat_item {
    max-width: desktop-vw(177);
    width: 100%;
    height: desktop-vw(177);
}

.courses {
    padding-top: desktop-vw(150);
    padding-bottom: desktop-vw(70);

    &_wrapCarusel {
        display: none;
    }

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(32);
        line-height: 130%;
        /* identical to box height */
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(37);
    }

    &_list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: desktop-vw(22) desktop-vw(46);
        justify-content: space-between;
        width: 100%;
        height: max-content;
    }

    

    &_content {
        display: flex;
        grid-gap: desktop-vw(40);
    }

    &_filter {
        max-width: desktop-vw(240);
        
        &_list {
            display: flex;
            flex-direction: column;
            grid-gap: desktop-vw(15);
        }

        &_title {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(18);
            line-height: 130%;
            text-transform: uppercase;
            color: #1FAEEA;
            display: flex;
            justify-content: space-between;
            margin-bottom: desktop-vw(20);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:after {
                content: '';
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.3186 10.2527L9.65932 1.59338L1.00004 10.2527' stroke='%231FAEEA' stroke-width='2'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                display: block;
                width: desktop-vw(20);
                height: desktop-vw(11);
                transform: rotate(180deg);
                transition: all 0.3s ease;
            }

            &.active {
                &:after {
                    content: '';
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.3186 10.2527L9.65932 1.59338L1.00004 10.2527' stroke='%231FAEEA' stroke-width='2'/%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    display: block;
                    width: desktop-vw(20);
                    height: desktop-vw(11);
                    transform: rotate(0);
                }
            }
        }
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .mt {
        height: mobile-vw(15);
        width: 100%;
    }

    .carousel__prev, .carousel__next {
        background-color: #1FAEEA;
        height: mobile-vw(50);
        width: mobile-vw(50);
        border-radius: 3px;
        svg {
            height: 60%;
            width: 60%;
        }
    }

    .coursesCat_item {
        max-width: mobile-vw(230);
        width: 100%;
        height: mobile-vw(230);
    }

    .courses {
        padding-top: mobile-vw(35);
        padding-bottom: mobile-vw(60);

        &_wrapCarusel {
            display: block;
        }

        &_title {
            font-size: mobile-vw(32);
            margin-bottom: mobile-vw(37);
        }

        &_list {
            display: none;
        }

        &_content {
            display: flex;
            flex-direction: column-reverse;
        }

        &_filter {
            max-width: 100%;
            margin-top: mobile-vw(50);
            
            &_list {
                grid-gap: mobile-vw(15);
                width: max-content;
                margin: 0 auto;
            }

            &_title {
                font-size: mobile-vw(18);
                width: max-content;
                grid-gap: mobile-vw(15);
                margin: 0 auto mobile-vw(20) auto;

                &:after {
                    width: mobile-vw(20);
                    height: mobile-vw(11);
                }

                &.active {
                    &:after {
                        width: mobile-vw(20);
                        height: mobile-vw(11);
                    }
                }
            }
        }
    }
}

</style>