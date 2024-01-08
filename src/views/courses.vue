<template>
  <div class="courses">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <h1 class="courses_title">{{$t('coursePage.title')}}</h1>
        <a href="" class="custom_link"></a>
        <Button :btnClass="'btnLink'" @click="openCourse"> {{$t('coursePage.btnName')}} </Button>
        <div class="courses_content">
            <!-- <div class="courses_filter" v-if="courses.list.length !== 0">
                <div class="courses_filter_title" :class="{'active' : activeFilter}" @click="activeFilter = !activeFilter">
                    {{ filterTitle }}
                </div>
                <slide-up-down class="courses_filter_list" v-model="activeFilter" :duration="300">
                    <CheckBox v-for="(item, idx) in courses.list" :key="idx" :idx="idx" :content="item" @addSpec="addSpec" @removeSpec="removeSpec"/>
                    <div class="mt"></div>
                    <Button :btnClass="'btnLink'" @click="filterEnter">Показати</Button>
                </slide-up-down>
            </div> -->
            <div class="courses_list" v-if="courses.list.length !== 0">
                <ItemCatCourses v-for="(item, idx) in courses.list" :key="idx" :content="item" @goToCoursesCat="goToCoursesCat" />
            </div>
            <div class="courses_wrapCarusel" v-if="courses.list.length !== 0">
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
import {mapActions, mapGetters} from 'vuex'

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
    methods: {
    openCourse() {
        this.$router.push({
            name: 'coursesCatPage',
            params: { Pid1: 'allCourses' }
        })
    },
    goToCoursesCat(data) {
        let parts = data.split('=');
        this.$router.push({
            name: 'coursesCatPage',
            params: { Pid1: 'allCourses'  },
            query: {specializations: parts[1]}
        })
    },
    ...mapActions([
        'GET_HOME_FROM_API',
        'GET_SPECIALIZATIONS_FROM_API',
        'GET_EVENT_FROM_API'
    ]),
    addSpec(data) {
        this.filter.push(`&specializations=${data}`)
    },
    removeSpec (data) {
        let myIndex = this.filter.indexOf(`&specializations=${data}`);
        if (myIndex !== -1) {
            this.filter.splice(myIndex, 1);
        }
    },
    filterEnter() {
        let str = ''
        for(let i = 0; i < this.filter.length; i++ ) {
            str = str + this.filter[i]
        }
        if(str !== '') {
            this.$router.push({
                name: 'coursesCatPage',
                params: { Pid1: str }
            })
        }
    }
  },
  mounted() {
    this.GET_SPECIALIZATIONS_FROM_API().then((response) => {
      if(response) {
        for(let i = 0; i < response.length; i++) {
          this.courses.list.push(response[i])
          this.courses.list[i].img = response[i].photo
        }
      }
    })
  },
  data() {
    return {
        filter: [],
        activeFilter: true,
        title: 'Курси',
        filterTitle: 'Курси по спеціальностям',
        courses: {
            list: []
        },
        CheckBox: [
        ],
    }
  },
  computed: {
    breadcrumbs() {
        return [
            {
                name: this.$t('breadcrumbs.home'),
                link: `/${this.$i18n.locale}/`
            },
            {
                name: this.$t('breadcrumbs.courses'),
            },
        ] 
    }
  }
}
</script>
<style lang="scss">
.btn.btn_btnLink {
    margin: 0 auto desktop-vw(50) auto;
}

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

.custom_link {
    font-style: normal;
    font-weight: 700;
    font-size: desktop-vw(16);
    line-height: 130%;
    text-align: center;
    color: #1FAEEA;
    position: relative;
    z-index: 4;
    text-decoration: none;
}

@media screen and (max-width: $mobile) {

    .btn.btn_btnLink {
        margin: 0 auto mobile-vw(50) auto;
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

.courses {
    padding-top: desktop-vw(150);
    padding-bottom: desktop-vw(70);

    .coursesCat_item {
        max-width: desktop-vw(267);
        width: 100%;
        height: desktop-vw(267);
    }

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
        grid-gap: desktop-vw(22) desktop-vw(26);
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

    .courses {
        padding-top: mobile-vw(35);
        padding-bottom: mobile-vw(60);

        .coursesCat_item {
            max-width: mobile-vw(230);
            width: 100%;
            height: mobile-vw(230);
        }

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