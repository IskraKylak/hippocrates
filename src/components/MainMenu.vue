<template>
    <div class="mainMenu">
        <div class="container">
            <div class="mainMenu_content">
                <router-link class="mainMenu_logo" :to="`/${this.$i18n.locale}/`">
                    <img src="@/assets/img/logo.png" alt="logo">
                </router-link>
                <div class="mainMenu_list">
                    <router-link class="mainMenu_list_item" v-for="(item, idx) in menu" :key="idx" :to="item.link">
                        {{ item.name }}
                    </router-link>
                </div>
                <div class="mainMenu_accPanel" v-if="tokkent === ''">
                    <Button :btnClass="'btnBorder'" @click="openLogin()">{{$t('btns.Вхід')}}</Button>
                    <Button @click="openReg()">{{$t('btns.Реєстрація')}}</Button>
                </div>
                <div class="mainMenu_accPanel" v-else>
                    <div class="nameAcc" @click.prevent="openMenu, lcMenu = !lcMenu" :class="[lcMenu ? 'active' : '']">{{ ACC.first_name }} {{ ACC.last_name }}</div>
                    <div class="accPanel_menu" :class="[lcMenu ? 'active' : '']">
                        <div @click="redirect()" class="accPanel_item">
                            {{$t('btns.Особистий_кабінет')}}
                        </div>
                        <div class="accPanel_item"  @click.prevent="logout">
                            {{$t('btns.Вихід')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/UI/Controls/Button.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
        Button
    },
    data() {
        return {
            lcMenu: false,
            acc: {
                first_name: '',
                last_name: '',
            },
        }
    },
    computed: {
        menu() {
            return [
                {
                    name: this.$t('menu.Проект'),
                    link: `/${this.$i18n.locale}/about`
                },
                {
                    name: this.$t('menu.Користувачу'),
                    link: `/${this.$i18n.locale}/how-to`
                },
                {
                    name: this.$t('menu.Курси'),
                    link: `/${this.$i18n.locale}/courses`
                },
                {
                    name: this.$t('menu.Вебінари'),
                    link: `/${this.$i18n.locale}/webinars`
                },
                {
                    name: this.$t('menu.Календар'),
                    link: `/${this.$i18n.locale}/calendar`
                },
                {
                    name: this.$t('menu.Контакти'),
                    link: `/${this.$i18n.locale}/contacts`
                }
            ]
        },
        tokkent() {
            return this.$store.getters.getToken
        },
        ...mapGetters([
            'ACC',
        ]),
    },
    methods: {
        redirect() {
            window.open(`https://asprofosvit.azurewebsites.net/another_domen_auth/${this.tokkent}`);
        },
        openLogin() {
            this.$router.push(`/${this.$i18n.locale}/login`)
        },
        openReg() {
            this.$router.push(`/${this.$i18n.locale}/register`)
        },
        async logout () {
            this.lcMenu = false
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push(`/${this.$i18n.locale}/`)
                })
        }
    }
}
</script>

<style lang="scss" >
.accPanel_menu {
    display: none;
    position: absolute;
    top: desktop-vw(25);
    right: 0;
    background: #1FAEEA;
    
    box-shadow: 0px 4px 4px rgb(36 36 36 / 15%);
    border-radius: 5px;
    color: #fff;
    min-width: desktop-vw(180);
    padding: desktop-vw(10);
    flex-direction: column;
    grid-gap: desktop-vw(10);

    &.active {
        display: flex;
    }

    .accPanel_item {
        cursor: pointer;
        font-size: desktop-vw(16);
    }
}


.nameAcc {
    font-style: normal;
    font-weight: 400;
    font-size: desktop-vw(16);
    line-height: 130%;
    color: #1faeea;
    cursor: pointer;
    display: flex;
    position: relative;
    padding-right: desktop-vw(16);

    &:after {
        content: "";
        display: block;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5 6L0.669873 0.75L9.33013 0.750001L5 6Z' fill='%231faeea'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        width: desktop-vw(10);
        height: desktop-vw(6);
        position: absolute;
        right: 0;
        top: desktop-vw(7);
        cursor: pointer;
    }

    &.active {
        &:after {
            transform: rotate(180deg)
        }
    }
}

.mainMenu {
    background: #fff;

    &_content {
        padding: desktop-vw(31) 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        grid-gap: desktop-vw(15);
        max-width: 100%;
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
            transition: all 0.3s ease;

            &:hover {
                color: #1faeea;
            }
        }
    }

    &_accPanel {
        display: flex;
        grid-gap: desktop-vw(20);
        position: relative;
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .nameAcc {
        font-size: mobile-vw(16);
    }

    .accPanel_menu {
        top: mobile-vw(35);
        min-width: mobile-vw(180);
        padding: mobile-vw(10);
        grid-gap: mobile-vw(10);
        
        .accPanel_item {
            cursor: pointer;
            font-size: mobile-vw(16);
        }
    }

    .mainMenu {

        &_content {
            padding: mobile-vw(20) 0;
            grid-gap: mobile-vw(15);
            justify-content: center;
        }

        &_logo {
            max-width: mobile-vw(199);
        }

        &_list {
            display: none;
            grid-gap: mobile-vw(20);

            &_item {
                font-size: mobile-vw(16);
            }
        }

        &_accPanel {
            display: none;
            grid-gap: mobile-vw(20);
        }
    }
}

</style>