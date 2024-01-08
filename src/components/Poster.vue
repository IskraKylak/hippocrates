<template>
  <div class="poster">
    <div class="poster_bg">
        <img :src="content.img" alt="img">
    </div>
    <div class="container">
        <div class="poster_content">
            <div class="poster_info">
                <h1 class="poster_title">
                    {{ content.title }}
                </h1>
                <h2 class="poster_subtitle">
                    {{ content.text }}
                </h2>
                <Button v-if="tokkent === ''" :btnClass="'btnPoster'" @click="openReg()">{{$t('Зареєструватися')}}</Button>
            </div>
            <Feedback />
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/UI/Controls/Button.vue'
import Feedback from '@/components/app/Feedback.vue'
import {useI18n} from 'vue-i18n'

// const { t } = useI18n({useScope: 'global'})

export default {
    props: ['content'],
    // created() {
    //     const { t, locale } = this.$i18n
    // },
    components: {
        Button,
        Feedback
    },
    data() {
        return {
        }
    },
    computed: {
      tokkent() {
          return this.$store.getters.getToken
      }
    },
    methods: {
        openReg() {
            this.$router.push(`/${this.$i18n.locale}/register`)
        }
    }
}
</script>

<style lang="scss">
.poster {
    position: relative;

    &_bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;

        &:before {
            content: "";
            background: rgba(248, 248, 248, 0.85);
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            z-index: 1;
        }
    }

    &_content {
        padding: desktop-vw(80) 0 desktop-vw(160) 0;
        display: flex;
        grid-gap: desktop-vw(20);
        justify-content: space-between;
        position: relative;
        z-index: 3;
    }

    &_info {
        max-width: desktop-vw(723);
    }

    &_title {
        font-family: 'LithosC';
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(70);
        line-height: 93%;
        /* identical to box height, or 93% */
        text-transform: uppercase;
        color: #9D1006;
        margin-bottom: desktop-vw(36);
    }

    &_subtitle {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(38);
        line-height: 145%;
        color: #0EA0DD;
        margin-bottom: desktop-vw(51);
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .poster {


        .feedback {
            margin: 0 mobile-vw(-20);
        }

        &_bg {
            img {
                width: auto;
                height: 100%;
            }
        }

        &_content {
            padding: mobile-vw(80) 0 0 0;
            grid-gap: mobile-vw(100);
            flex-direction: column;
        }

        &_info {
            max-width: mobile-vw(723);
        }

        &_title {
            font-size: mobile-vw(42);
            margin-bottom: mobile-vw(20);
        }

        &_subtitle {
            font-size: mobile-vw(24);
            margin-bottom: mobile-vw(20);
        }
    }
}
</style>