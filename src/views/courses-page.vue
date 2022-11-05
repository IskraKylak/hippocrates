<template>
  <div class="courses-page">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <!-- <div class="courses-page_wrapList">
            <div class="courses-page_type">
                {{ coursesType1.name }}
            </div>
            <div class="courses-page_list">
                <ItemCourses v-for="(item, idx) in coursesType1Sort" :key="idx" :content="item" />
            </div>
            <div class="box_pagination" v-if="pag1 > 1">
                <ul class="pagination">
                    <li><a href="#" class="prev" @click.prevent="prevPage"></a></li>
                    <li v-for="(tmpPag, idx) in pag1"
                        :key="idx">
                    <a
                        href="#"
                        :class="active === (idx + 1) ? 'active' : ''"
                        @click.prevent="openPage(idx + 1)"
                    >
                        {{ idx + 1 }}
                    </a>
                    </li>
                    <li>
                    <a href="#" class="next" @click.prevent="nextPage"></a>
                    </li>
                </ul>
            </div>
        </div> -->
        <div class="courses-page_wrapList">
            <div class="courses-page_type">
                {{ coursesType2.name }}
            </div>
            <div class="courses-page_list">
                <ItemCourses v-for="(item, idx) in coursesType2.courses" :key="idx" :content="item" />
            </div>
            <Pagination v-if="pagination > 1" :content="pagination" :activePag="activePag" @openPage="openPage"/>
            <!-- <div class="box_pagination" v-if="pag2 > 1">
                <ul class="pagination">
                    <li><a href="#" class="prev" @click.prevent="prevPage"></a></li>
                    <li v-for="(tmpPag, idx) in pag2"
                        :key="idx">
                    <a
                        href="#"
                        :class="active === (idx + 1) ? 'active' : ''"
                        @click.prevent="openPage(idx + 1)"
                    >
                        {{ idx + 1 }}
                    </a>
                    </li>
                    <li>
                    <a href="#" class="next" @click.prevent="nextPage"></a>
                    </li>
                </ul>
            </div> -->
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import ItemCourses from '@/components/ItemCourses'
import Pagination from '@/components/Pagination'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs,
    ItemCourses,
    Pagination
  },
  mounted() {
    this.GET_COURSES_SPECIAL_FROM_API(this.$route.params.Pid1).then((response) => {
      if(response) {
        this.countItem = response.count
        for(let i = 0; i < response.results.length; i++) {
            this.coursesType2.courses.push(response.results[i])
        }
      }
    })
    this.GET_SPECIALIZATIONS_ITEM_FROM_API(this.$route.params.Pid1).then((response) => {
      if(response) {
        this.nameCat = response.name
        this.idCat = response.id
        
      }
    })
    if(this.coursesType2.courses.length !== 0) {
        this.pag2 = Math.ceil(this.coursesType2.courses.length / this.page.length)
    }
  },
  data() {
    return {
        // page: {
        //     current: 1,
        //     length: 6,
        // },
        nameCat: '',
        idCat: '',
        // active: 1,
        // pag1: [],
        // pag2: [],
        countItem: 0,
        activePag: 1,
        coursesType2: {
            name: 'Всі курси',
            courses: [
                // {
                //     img: require('../assets/img/coursesImg/1.jpg'),
                //     title: 'Вірус папіломи людини',
                //     text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                // },
                // {
                //     img: require('../assets/img/coursesImg/2.jpg'),
                //     title: 'Кесарський розтин',
                //     text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                // },
                // {
                //     img: require('../assets/img/coursesImg/1.jpg'),
                //     title: 'Вірус папіломи людини',
                //     text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                // },
                // {
                //     img: require('../assets/img/coursesImg/2.jpg'),
                //     title: 'Кесарський розтин',
                //     text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                // },
                // {
                //     img: require('../assets/img/coursesImg/1.jpg'),
                //     title: 'Вірус папіломи людини',
                //     text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                // },
                // {
                //     img: require('../assets/img/coursesImg/2.jpg'),
                //     title: 'Кесарський розтин',
                //     text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                // },
                // {
                //     img: require('../assets/img/coursesImg/2.jpg'),
                //     title: 'Кесарський розтин',
                //     text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                // },
                // {
                //     img: require('../assets/img/coursesImg/1.jpg'),
                //     title: 'Вірус папіломи людини',
                //     text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                // },
                // {
                //     img: require('../assets/img/coursesImg/2.jpg'),
                //     title: 'Кесарський розтин',
                //     text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                // },
            ]
        },
        // breadcrumbs: [
        //     {
        //         name: 'Головна',
        //         link: '/'
        //     },
        //     {
        //         name: 'курсы',
        //         link: '/courses'
        //     },
        //     {
        //         name: this.$route.params.Pid1
        //     }
        // ],
    }
  },
  computed: {
    ...mapGetters([
      'SPECIALIZATIONSITEM',
    ]),
    pagination() {
        let pag = 0
        for( let i = 0; i < this.countItem; i+=6) {
            pag+=1
        }
        return pag
    },
    // coursesType1Sort () {
    //   return this.coursesType1.courses
    //     .filter((row, index) => {
    //       let start = (this.page.current - 1) * this.page.length
    //       let end = this.page.current * this.page.length
    //       if (index >= start && index < end) return true
    //     })
    // },
    breadcrumbs() {
        let breadcrumbs = [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'Курсы',
                link: '/courses'
            },
        ] 
        if(this.nameCat != '')
            breadcrumbs.push({name: this.nameCat})
        return breadcrumbs;
    },
    // coursesType2Sort () {
    //     if(this.coursesType2.courses.length !== 0) {
    //         return this.coursesType2.courses
    //             .filter((row, index) => {
    //             let start = (this.page.current - 1) * this.page.length
    //             let end = this.page.current * this.page.length
    //             if (index >= start && index < end) return true
    //             })
    //     }
    //     return []
    // }
  },
  methods: {
    ...mapActions([
        'GET_COURSES_SPECIAL_FROM_API',
        'GET_SPECIALIZATIONS_ITEM_FROM_API',
        'GET_COURSES_FROM_API_PAGE'
    ]),
    openPage(idx) {
        this.activePag = idx
        this.coursesType2.courses = []
        let obj = {
            page: this.activePag,
            spec: this.SPECIALIZATIONSITEM.id
        }
        console.log(this.SPECIALIZATIONSITEM.id)
        this.GET_COURSES_FROM_API_PAGE(obj).then((response) => {
            // console.log(response)
            if(response) {
                this.countItem = response.count
                for(let i = 0; i < response.results.length; i++) {
                    this.coursesType2.courses.push( response.results[i])
                }
            }
        })
    }
    // openPage (idx) {
    //   this.active = idx
    //   this.page.current = idx
    // },
    // prevPage () {
    //     if (this.page.current > 1) {
    //         this.page.current -= 1
    //         this.active = this.page.current
    //     }
    // },
    // nextPage () {
    //     if (this.page.current * this.page.length < this.info1.length) {
    //         this.page.current += 1
    //         this.active = this.page.current
    //     }
    // }
  }
}
</script>

<style lang="scss" scoped>

.pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: desktop-vw(10);
    font-size: desktop-vw(16);
    margin-top: desktop-vw(20);

    li {
        a {
            text-decoration: none;
            color: #383838;
            font-weight: 500;

            &:hover {
                color: #1faeea;
            }

            &.active {
                color: #1faeea;
            }
        } 
    }

    .prev {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        display: block;
        width:  desktop-vw(10);
        height:  desktop-vw(12);
        transform: rotate(180deg);
    }

    .next {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        display: block;
        width:  desktop-vw(10);
        height:  desktop-vw(12);
    }
}

.courses-page {
    padding-top: desktop-vw(150);

    &_wrapList {
        padding-bottom: desktop-vw(50);
    }

    &_type {
        display: flex;
        font-size: desktop-vw(16);
        font-weight: 500;
        color: #383838;
        align-items: center;
        grid-gap: desktop-vw(15);
        margin-bottom: desktop-vw(25);

        &:before {
            content: "";
            width: desktop-vw(14);
            height: desktop-vw(14);
            background: #1faeea;
            border-radius: 3px;
        }

        &:after {
            content: "";
            flex: 1 1 auto;
            height: 2px;
            background: #f8f8f8;
            border-radius: 3px;
        }
    }

    &_list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        grid-gap: desktop-vw(30) desktop-vw(30);
        justify-content: space-between;
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
   .pagination {
        grid-gap: mobile-vw(10);
        font-size: mobile-vw(16);
        margin-top: mobile-vw(20);

        .prev {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: block;
            width:  mobile-vw(10);
            height:  mobile-vw(12);
            transform: mobile(180deg);
        }

        .next {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: block;
            width:  mobile-vw(10);
            height:  mobile-vw(12);
        }
    }

    .courses-page {
        padding-top: mobile-vw(20);

        &_wrapList {
            padding-bottom: mobile-vw(50);
        }

        &_type {
            font-size: mobile-vw(16);
            grid-gap: mobile-vw(15);
            margin-bottom: mobile-vw(25);

            &:before {
                width: mobile-vw(14);
                height: mobile-vw(14);
            }

        }

        &_list {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            grid-gap: mobile-vw(30) mobile-vw(60);
            justify-content: center;
        }
    }
}

</style>