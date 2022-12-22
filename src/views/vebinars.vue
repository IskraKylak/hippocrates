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
            <div v-if="tokkent === ''"> 
                <VebinarList :content="vebinars1" />
                <Pagination v-if="pagination1 > 1" :content="pagination1" :activePag="pag1.activePag" @openPage="openPage"/>
            </div>
            <div v-else>
                 <div class="vebinatStatus">
                    <VebinarList :content="vebinars2" />
                    <Pagination v-if="pagination2 > 1" :content="pagination2" :activePag="pag2.activePag" @openPage="openPage1"/>
                </div>
                <div class="vebinatStatus">
                    <VebinarList :content="vebinars3" />
                    <Pagination v-if="pagination3 > 1" :content="pagination3" :activePag="pag3.activePag" @openPage="openPage2"/>
                </div>
            </div>
            
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
        'GET_VEBINAR_FROM_API_FAVORITE',
        'GET_VEBINAR_FROM_API_NOTFAVORITE',
        'GET_VEBINAR_FROM_API_PAGE',
        'GET_VEBINAR_FROM_API_PAGE_FAVORITE',
        'GET_VEBINAR_FROM_API_PAGE_NOT_FAVORITE'
    ]),
    openPage(idx) {
        this.pag1.activePag = idx
        this.vebinars1.list = []
        let obj = {
            token: this.$store.getters.getToken,
            content: idx
        }
        this.GET_VEBINAR_FROM_API_PAGE(obj).then((response) => {
            // console.log(response)
            if(response) {
                this.pag1.countItem = response.count
                for(let i = 0; i < response.results.length; i++) {
                    this.vebinars1.list.push( response.results[i])
                }
            }
        })
    },
    openPage1(idx) {
        this.pag2.activePag = idx
        this.vebinars2.list = []
        let obj = {
            token: this.$store.getters.getToken,
            content: idx
        }
        this.GET_VEBINAR_FROM_API_PAGE_FAVORITE(obj).then((response) => {
            // console.log(response)
            if(response) {
                this.pag2.countItem = response.count
                for(let i = 0; i < response.results.length; i++) {
                    this.vebinars2.list.push( response.results[i])
                }
            }
        })
    },
    openPage2(idx) {
        this.pag3.activePag = idx
        this.vebinars3.list = []
        let obj = {
            token: this.$store.getters.getToken,
            content: idx
        }
        this.GET_VEBINAR_FROM_API_PAGE_NOT_FAVORITE(obj).then((response) => {
            // console.log(response)
            if(response) {
                this.pag3.countItem = response.count
                for(let i = 0; i < response.results.length; i++) {
                    this.vebinars3.list.push( response.results[i])
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
        this.pag1.countItem = response.count
        for(let i = 0; i < response.results.length; i++) {
            this.vebinars1.list.push( response.results[i])
        }
      }
    })
    this.GET_VEBINAR_FROM_API_FAVORITE(obj).then((response) => {
      // console.log(response)
      if(response) {
        this.pag2.countItem = response.count
        for(let i = 0; i < response.results.length; i++) {
            this.vebinars2.list.push( response.results[i])
        }
      }
    })
    this.GET_VEBINAR_FROM_API_NOTFAVORITE(obj).then((response) => {
      // console.log(response)
      if(response) {
        this.pag3.countItem = response.count
        for(let i = 0; i < response.results.length; i++) {
            this.vebinars3.list.push( response.results[i])
        }
      }
    })
  },
  data() {
    return {
        title: 'Вебінари',
        pag1: {
            countItem: 0,
            activePag: 1,
        },
        pag2: {
            countItem: 0,
            activePag: 1,
        },
        pag3: {
            countItem: 0,
            activePag: 1,
        },
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
            title: 'Всі вебінари',
            list: [
            ]
        },
        vebinars2: {
            title: 'Обрані вебінари',
            list: [
            ]
        },
        vebinars3: {
            title: 'Вебінари',
            list: [
            ]
        },
    }
  },
  computed: {
    tokkent() {
        return this.$store.getters.getToken
    },
    pagination1() {
        let pag = 0
        for( let i = 0; i < this.pag1.countItem; i+=6) {
            pag+=1
        }
        return pag
    },
    pagination2() {
        let pag = 0
        for( let i = 0; i < this.pag2.countItem; i+=6) {
            pag+=1
        }
        return pag
    },
    pagination3() {
        let pag = 0
        for( let i = 0; i < this.pag3.countItem; i+=6) {
            pag+=1
        }
        return pag
    }
  }
}
</script>
<style lang="scss" scoped>

.vebinatStatus {
   margin-bottom: desktop-vw(40); 
   &:last-child {
     margin-bottom: 0;
   }
}

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
    .vebinatStatus {
        margin-bottom: mobile-vw(40); 
        &:last-child {
            margin-bottom: 0;
        }
    }

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