<template>
  <div class="vebinar">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <div class="vebinar_content">
            <h2 class="vebinar_title">
                {{ title }}
            </h2>
            <VebinarList :content="vebinars1" />
            <Pagination v-if="pagination > 1" :content="pagination" :activePag="activePag" @openPage="openPage"/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import VebinarList from '@/components/VebinarList'
import Pagination from '@/components/Pagination'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs,
    VebinarList,
    Pagination
  },
  methods: {
    ...mapActions([
        'GET_VEBINAR_FROM_API',
        'GET_VEBINAR_FROM_API_PAGE'
    ]),
    openPage(idx) {
        this.activePag = idx
        this.vebinars1.list = []
        let obj = {
            token: this.$store.getters.getToken,
            content: idx
        }
        this.GET_VEBINAR_FROM_API_PAGE(obj).then((response) => {
            // console.log(response)
            if(response) {
                this.countItem = response.count
                for(let i = 0; i < response.results.length; i++) {
                    this.vebinars1.list.push( response.results[i])
                }
            }
        })
    }
  },
  mounted() {
    let obj = {
        token: this.$store.getters.getToken,
    }
    this.GET_VEBINAR_FROM_API(obj).then((response) => {
      // console.log(response)
      if(response) {
        this.countItem = response.count
        for(let i = 0; i < response.results.length; i++) {
            this.vebinars1.list.push( response.results[i])
        }
      }
    })
  },
  data() {
    return {
        title: 'Вебінари',
        countItem: 0,
        activePag: 1,
        breadcrumbs: [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'Вебінари'
            }
        ],
        vebinars1: {
            title: 'Обрані вебінари',
            list: [
                // {
                //     img: require('../assets/img/imageEvents.png'),
                //     date: '9.07 - 10.07',
                //     statusClass: 'elect',
                //     status: 'Обраний',
                //     title: "СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",
                //     text: "БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",
                //     time: '17:00 - 19:00',
                //     location: 'Київ - Черкаси - Житомир'
                // },
                // {
                //     img: require('../assets/img/imageEvents.png'),
                //     date: '9.07 - 10.07',
                //     statusClass: 'elect',
                //     status: 'Обраний',
                //     title: "СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",
                //     text: "БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",
                //     time: '17:00 - 19:00',
                //     location: 'Київ - Черкаси - Житомир'
                // },
                // {
                //     img: require('../assets/img/imageEvents.png'),
                //     date: '9.07 - 10.07',
                //     statusClass: 'elect',
                //     status: 'Обраний',
                //     title: "СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",
                //     text: "БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",
                //     time: '17:00 - 19:00',
                //     location: 'Київ - Черкаси - Житомир'
                // }
            ]
        },
    }
  },
  computed: {
    pagination() {
        let pag = 0
        for( let i = 0; i < this.countItem; i+=6) {
            pag+=1
        }
        return pag
    }
  }
}
</script>
<style lang="scss" scoped>

.vebinar {
    padding-top: desktop-vw(150);
    padding-bottom: desktop-vw(70);

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
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .vebinar {
        padding-top: mobile-vw(30);
        padding-bottom: mobile-vw(100);

        &_title {
            font-style: normal;
            font-size: mobile-vw(32);
            margin-bottom: mobile-vw(37);
        }
    }
}

</style>