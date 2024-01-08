<template>
    <div class="instruction">
        <div class="container">
            <div class="instruction_content">
                <h2 class="instruction_title">
                    {{$t('instruction.title')}}
                </h2>
                <carousel class="events_carousel" :items-to-show="((width <= 767) ? 1 : 3)" snapAlign="start">
                    <slide v-for="(item, idx) in content.list" :key="idx">
                        <div class="instruction_item">
                            <div class="instruction_video" v-if="item.video">
                                <video :src="item.video" preload="auto" controls="" loop=""></video>
                            </div>
                            <div class="instruction_item_bottom">
                                <div class="instruction_item_name">
                                    {{ $t('instruction.list.title') }}
                                </div>
                                <div class="instruction_item_text">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>  
                    </slide>
                    <template #addons v-if="(width <= 767)">
                        <navigation />
                    </template>
                </carousel>
                <Button :btnClass="'btnLink'" @click="openLogin()">{{$t('instruction.btnName')}}</Button>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/UI/Controls/Button.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
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
        redirect() {
            window.open(`https://asprofosvit.azurewebsites.net/another_domen_auth/${this.tokkent}`);
        },
        updateWidth() {
            this.width = window.innerWidth;
        },
        openLogin() {
            if(this.tokkent === '')
                this.$router.push(`/${this.$i18n.locale}/login`)
            else
                window.open(`https://asprofosvit.azurewebsites.net/another_domen_auth/${this.tokkent}`);
        },
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
.instruction {

    button {
        margin: 0 auto;
    }

    &_content {
        padding: desktop-vw(50) 0;
    }

    &_list {
        display: flex;
        justify-content: space-between;
        grid-gap: desktop-vw(40);
        width: 100%;
        margin-bottom: desktop-vw(50);
    }

    &_item {
        background: #FFFFFF;
        box-shadow: 0px 3px 4px rgba(36, 36, 36, 0.1);
        border-radius: 3px 3px 3px 3px;
        max-width: desktop-vw(340);
        width: 100%;
        overflow: hidden;

        &_name {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(14);
            line-height: 130%;
            text-transform: uppercase;
            color: #1FAEEA;
            margin-bottom: desktop-vw(16);
        }

        &_text {
            font-style: normal;
            font-weight: 400;
            font-size: desktop-vw(14);
            color: #383838;
        }

        &_bottom {
            padding: desktop-vw(24) desktop-vw(15);
            background: #FFFFFF;
            border-radius: 0px 0px 3px 3px;
        }
    }

    &_video {
        height: desktop-vw(180);
        background: #C4C4C4;
        position: relative;
        
        video {
            width: 100%;
            height: 100%;
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
    
    &_text {
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(14);
        line-height: 130%;
        color: #383838;
    }
}
@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .instruction {

        &_content {
            padding: mobile-vw(50) 0;
        }

        &_list {
            display: flex;
            justify-content: space-between;
            grid-gap: mobile-vw(40);
            width: 100%;
            margin-bottom: mobile-vw(50);
        }

        &_item {
            max-width: mobile-vw(340);

            &_name {
                font-size: mobile-vw(14);
                margin-bottom: mobile-vw(16);
            }

            &_text {
                font-size: mobile-vw(14);
            }

            &_bottom {
                padding: mobile-vw(24) mobile-vw(15);
            }
        }

        &_video {
            height: mobile-vw(180);
        }

        &_title {
            font-size: mobile-vw(24);
            margin-bottom: mobile-vw(50);
        }
        
        &_text {
            font-size: mobile-vw(14);
        }
    }
}

</style>