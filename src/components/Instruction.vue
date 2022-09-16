<template>
    <div class="instruction">
        <div class="container">
            <div class="instruction_content">
                <h2 class="instruction_title">
                    {{ content.title }}
                </h2>
                <div class="instruction_list">
                    <div class="instruction_item" v-for="(item, idx) in content.list" :key="idx">
                        <div class="instruction_video">
                        </div>
                        <div class="instruction_item_bottom">
                            <div class="instruction_item_name">
                                {{ item.title }}
                            </div>
                            <div class="instruction_item_text">
                                {{ item.text }}
                            </div>
                        </div>
                    </div>  
                </div>
                <Button :btnClass="'btnLink'"> Особистий кабінет </Button>
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
        Button
    },
    data() {
        return {
           
        }
    }
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
        font-size: 14px;
        line-height: 19px;
        color: #383838;
    }
}
</style>