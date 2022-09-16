<template>
  <div class="feedback">
    <div class="feedback__title">
        зворотній зв’язок
    </div>
    <div class="feedback__description">
        Натискаючи кнопку, Ви погоджуютесь з обробкою персональних даних. Та переходите до телеграм-боту.
    </div>
    <Button :btnClass="'btnFeedback'">Надіслати</Button>   
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/UI/Controls/Button.vue'
export default {
    components: {
        Button
    },
}
</script>

<style lang="scss">
.feedback {
    background: #1FAEEA;
    box-shadow: 0px 4px 4px rgba(36, 36, 36, 0.15);
    border-radius: 5px;
    padding: desktop-vw(54) desktop-vw(30);
    max-width: desktop-vw(339);

    &__title {
        // font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(18);
        line-height: 130%;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: desktop-vw(32);
    }

    &__description {
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(12);
        line-height: 130%;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: desktop-vw(32);
    }
}


@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .feedback {
        padding: mobile-vw(30) mobile-vw(40);
        max-width: calc(100% + mobile-vw(40));
        width: calc(100% + mobile-vw(40));
        border-radius: 0;

        &__title {
            font-size: mobile-vw(18);
            margin-bottom: mobile-vw(32);
        }

        &__description {
            font-size: mobile-vw(12);
            margin-bottom: mobile-vw(32);
        }
    }
}
</style>