<template>
    <div class="vebinar_wrapList">
        <div class="vebinar_nameList">
            {{ content.title }}
        </div>
        <div class="vebinar_list">
            <ItemVebinar 
                v-for="(item, idx) in content.list" 
                :key="idx" 
                :content="item"
                :idx="idx" 
            />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ItemVebinar from '@/components/ItemVebinar'
export default {
    props: ['content'],
    components: {
        ItemVebinar
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>

.vebinar {

    &_wrapList {
        margin-bottom: desktop-vw(56);

        &:last-child {
            margin-bottom: 0;
        }
    }

    &_nameList {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(16);
        line-height: 130%;
        /* identical to box height */
        text-transform: uppercase;
        color: #383838;
        margin-bottom: desktop-vw(26);
        grid-gap: desktop-vw(16);
        display: flex;
        align-items: center;

        &:before {
            content: '';
            display: block;
            max-width: desktop-vw(12);
            min-width: desktop-vw(12);
            height: desktop-vw(12);
            background: #1FAEEA;
            border-radius: 2px;
        }
    }

    &_list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        grid-gap: desktop-vw(32);
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .vebinar {
        &_wrapList {
            margin-bottom: mobile-vw(56);
        }

        &_nameList {
            font-size: mobile-vw(16);
            margin-bottom: mobile-vw(26);
            grid-gap: mobile-vw(16);

            &:before {
                max-width: mobile-vw(12);
                min-width: mobile-vw(12);
                height: mobile-vw(12);
            }
        }

        &_list {
            display: grid;
            grid-template-columns: 1fr;
            justify-content: space-between;
            grid-gap: mobile-vw(38);
        }
    }
}

</style>