<template>
  <div class="mobMenu">
    <div class="mobMenu_content" v-if="mobMenu">
        <div class="mobMenu_close" @click="mobMenu = false"></div>
        <router-link  :to="`/${this.$i18n.locale}/`" class="mobMenu_logo" @click="mobMenu = false">
            <img src="@/assets/img/logoFooter.svg" alt="img">
        </router-link>
        <div class="mobMenu_list">
            <router-link class="mobMenu_item" v-for="(item, idx) in menu" :key="idx" :to="item.link" @click="mobMenu = false">
                {{ item.name }}
            </router-link>
        </div>
        <div class="mobMenu_lc">
            <Button :btnClass="'mobMenu'">Вхід</Button>
            <Button :btnClass="'mobMenu'">Реєстрація</Button>
        </div>
        <div class="mobMenu_soc">
             <div class="footer_listSoc">
              <a href="#" class="footer_fb"></a>
              <a href="#" class="footer_viber"></a>
              <a href="#" class="footer_tg"></a>
            </div>
        </div>
    </div>
    <div class="container">
      <div class="mobMenu_bottom">
        <div class="nav_wrapPhone"> 
            <div class="nav_phone" @click="active = !active">
              {{ phones[0] }}
            </div>
            <div class="nav_arrPhone" :class="{'active' : active}" @click="active = !active"></div>
            <div class="nav_wrapListPhone">
              <slide-up-down class="nav_listPhone" v-model="active" :duration="300">
                <div class="nav_listPhone">
                  <div class="pb"></div>
                  <a :href="'tel' + item" class="nav_itemPhone" v-for="(item, idx) in phones" :key="idx">
                    {{ item }}
                  </a>
                  
                </div>
              </slide-up-down>
            </div>
        </div>
        <div class="mobMenu_burger" @click="mobMenu = !mobMenu"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideUpDown from 'vue3-slide-up-down'
import Button from '@/components/UI/Controls/Button.vue'
export default {
  components: {
    SlideUpDown,
    Button
  },
  data() {
    return {
        mobMenu: false,
        active: false,
        phones: [
        '+38 (073) 838-34-34',
        '+38 (073) 838-34-34',
        '+38 (073) 838-34-34',
        '+38 (073) 838-34-34',
        '+38 (073) 838-34-34',
        '+38 (073) 838-34-34'
        ],
        menu: [
            {
                name: 'Проект',
                link: `/${this.$i18n.locale}/about`
            },
            {
                name: 'Користувачу',
                link: `/${this.$i18n.locale}/how-to`
            },
            {
                name: 'Курси',
                link: `/${this.$i18n.locale}/courses/`
            },
            {
                name: 'Вебінари',
                link: `/${this.$i18n.locale}/webinars`
            },
            {
                name: 'Календар',
                link: `/${this.$i18n.locale}/calendar`
            },
            {
                name: 'Контакти',
                link: `/${this.$i18n.locale}/contacts`
            }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mobMenu {
    display: none;
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .mobMenu {
        height:  mobile-vw(50);
        padding: mobile-vw(5) 0;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #1FAEEA;
        z-index: 101;
        display: block;

        &_close {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.466 8.013l6.23-6.23A1.035 1.035 0 1014.23.317L8 6.547 1.77.317A1.036 1.036 0 10.304 1.783l6.23 6.23-6.23 6.23A1.035 1.035 0 101.77 15.71L8 9.48l6.23 6.23a1.034 1.034 0 001.466 0 1.035 1.035 0 000-1.466l-6.23-6.23z' fill='%23fff'%3e%3c/path%3e%3c/svg%3e");
            width: mobile-vw(16);
            height: mobile-vw(16);
            position: absolute;
            top: mobile-vw(20);
            right: mobile-vw(20);
            cursor: pointer;
        }

        &_logo {
            height:  mobile-vw(50);
            width: auto;
        }

        &_bottom {
            display: flex;
            justify-content: space-between;
            height: 100%;
            align-items: center;
        }

        &_burger {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 23 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='23' y1='1' y2='1' stroke='white' stroke-width='2'/%3e%3cline x1='23' y1='8' y2='8' stroke='white' stroke-width='2'/%3e%3cline x1='23' y1='15' y2='15' stroke='white' stroke-width='2'/%3e%3c/svg%3e");
            width: mobile-vw(23);
            height: mobile-vw(16);
            cursor: pointer;
        }

        .nav_wrapListPhone {
            position: absolute;
            right: mobile-vw(10);
            bottom: mobile-vw(25);
            top: auto;
        }

        .nav_wrapPhone {
            padding-right: mobile-vw(20);
        }

        .nav_listPhone {
            display: flex;
            flex-direction: column;
            background: #1FAEEA;
            padding: 0 mobile-vw(5);
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            grid-gap: mobile-vw(5);
            min-width: mobile-vw(150);
        }

        &_content {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: #1FAEEA;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            padding: mobile-vw(50) mobile-vw(20) mobile-vw(50) mobile-vw(20);
        }

        &_list,
        &_lc  {
            display: flex;
            flex-direction: column;
            grid-gap: mobile-vw(20);
            align-items: center;
        }

        &_item {
            color: #fff;
            text-transform: capitalize;
            font-weight: 500;
            font-size: mobile-vw(18);
            text-decoration: none;
        }
    }
}

</style>