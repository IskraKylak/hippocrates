<template>
    <div class="mainMenu">
        <div class="container">
            <div class="mainMenu_content">
                <router-link class="mainMenu_logo" to="/">
                    <img src="@/assets/img/logo.png" alt="logo">
                </router-link>
                <div class="mainMenu_list">
                    <router-link class="mainMenu_list_item" v-for="(item, idx) in menu" :key="idx" :to="item.link">
                        {{ item.name }}
                    </router-link>
                </div>
                <div class="mainMenu_accPanel">
                    <Button :btnClass="'btnBorder'">Вхід</Button>
                    <Button>Реєстрація</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/UI/Controls/Button.vue'
export default {
    components: {
        Button
    },
    data() {
        return {
            menu: [
                {
                    name: 'Проект',
                    link: '/'
                },
                {
                    name: 'Користувачу',
                    link: '/'
                },
                {
                    name: 'Курси',
                    link: '/'
                },
                {
                    name: 'Вебінари',
                    link: '/'
                },
                {
                    name: 'Календар',
                    link: '/'
                },
                {
                    name: 'Контакти',
                    link: '/'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

.mainMenu {
    background: #fff;

    &_content {
        padding: desktop-vw(31) 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        grid-gap: desktop-vw(15);
        width: 100%;
    }

    &_logo {
        max-width: desktop-vw(199);
        width: 100%;
        img {
            width: 100%;
        }
    }

    &_list {
        display: flex;
        grid-gap: desktop-vw(20);

        &_item {
            font-style: normal;
            font-weight: 400;
            font-size: desktop-vw(16);
            line-height: 130%;
            text-transform: uppercase;
            color: #383838;
            text-decoration: none;
        }
    }

    &_accPanel {
        display: flex;
        grid-gap: desktop-vw(20);
    }
}


</style>