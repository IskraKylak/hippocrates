<template>
  <div class="portfolio">
    <div class="container">
        <div class="portfolio_content">
            <h2 class="portfolio_title">
                {{ content.title }}
            </h2>
            <div class="portfolio_text">
                {{ content.text }}
            </div>
            <Button :btnClass="'btnLink'">{{ content.btn }}</Button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/UI/Controls/Button.vue'

export default {
    props: ['content'],
    components: {
        Button,
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">

.portfolio {
    &_content {
        padding: desktop-vw(50) 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        margin: 0 auto;
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

    &_text {
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(16);
        line-height: 130%;
        text-align: center;
        color: #383838;
        margin-bottom: desktop-vw(50);
        text-align: center;
        max-width: desktop-vw(500);

    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
}
</style>