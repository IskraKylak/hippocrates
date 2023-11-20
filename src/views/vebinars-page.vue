<template>
  <div class="courses-page">
        <div class="container">
            <Breadcrumbs :content="breadcrumbs" /> 
        </div>
        <div class="container">
            <div class="courses_content">
                <div class="courses_filter" v-if="courses.list.length !== 0">
                    <div class="courses_filter_title" :class="{'active' : activeFilter}" @click="activeFilter = !activeFilter">
                        {{ filterTitle }}
                    </div>
                    <slide-up-down class="courses_filter_list" v-model="activeFilter" :duration="300">
                        <CheckBox v-for="(item, idx) in courses.list" :key="idx" :idx="idx" :content="item" @addSpec="addSpec" @removeSpec="removeSpec"/>
                        <div class="mt"></div>
                    </slide-up-down>
                </div>
                <div class="courses-page_wrapList">
                    <!-- <div class="courses-page_type">
                        {{ coursesType2.name }}
                    </div> -->
                    <div class="courses-page_list">
                        <ItemVebinar v-for="(item, idx) in coursesType2.vebinars" :key="idx" :content="item" />
                    </div>
                    <Pagination v-if="pagination.count > 1" :content="pagination" @openPage="openPage" />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import Pagination from '@/components/Pagination'
import ItemVebinar from '@/components/ItemVebinar'
import CheckBox from '@/components/UI/Controls/CheckBox.vue'
import SlideUpDown from 'vue3-slide-up-down'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Courses',
  components: {
    Breadcrumbs,
    ItemVebinar,
    Pagination,
    CheckBox,
    SlideUpDown
  },
  data() {
    return {
        filterTitle: 'Вебінари по спеціальностям',
        activeFilter: true,
        filter: [],
        courses: {
            list: []
        },
        options: {
            page: 1,
            spec: ''
        },
        nameCat: '',
        idCat: '',
        countItem: 0,
        pagination: {
            elementPage: 6,
            count: 0,
            next: null,
            prev: null
        },
        coursesType2: {
            vebinars: [
            ]
        },
    }
  },
  mounted() {
    // console.log('this.$route.query', this.$route.query)
    const currentQuery = { ...this.$route.query };
    this.GET_SPECIALIZATIONS_FROM_API().then((response) => {
      if(response) {
        for(let i = 0; i < response.length; i++) {
          this.courses.list.push(response[i])
          this.courses.list[i].img = response[i].photo
          this.courses.list[i].checked = false
        }
        if(currentQuery.specializations) {
            this.courses.list.forEach(item => {
                if (currentQuery.specializations.includes(item.id.toString())) {
                    item.checked = true;
                    this.options.spec += `&specializations=${item.id}`
                    
                }
            });
        }
        if(currentQuery.page)
            this.options.page = currentQuery.page
      }
    }).finally(()=>{
        this.initApi()
    })
    
  },
  computed: {
    ...mapGetters([
      'SPECIALIZATIONSITEM',
    ]),
    breadcrumbs() {
        let breadcrumbs = [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'Вебінари',
            },
        ] 
        if(this.nameCat != '') {
            breadcrumbs = [
                {
                    name: 'Головна',
                    link: '/'
                },
                {
                    name: 'Вебінари',
                    link: '/vebinars'
                },
            ] 
            breadcrumbs.push({name: this.nameCat})
        }
            
        return breadcrumbs;
    },
  },
  methods: {
    ...mapActions([
        'GET_VEBINAR_FROM_API',
        'GET_SPECIALIZATIONS_FROM_API',
        'GET_VEBINAR_FROM_API_PAGE'
    ]),
    initApi () {
        this.GET_VEBINAR_FROM_API_PAGE(this.options).then((response) => {
            if(response) {
                this.pagination.count = response.count
                let urlParams = ''
                if(response.previous) {
                    urlParams = new URLSearchParams(response.previous);
                    if(parseInt(urlParams.get('page')))
                        this.pagination.prev = parseInt(urlParams.get('page'));
                    else 
                        this.pagination.prev = 1
                } else {
                    this.pagination.prev = null
                }
                if(response.next) {
                    urlParams = new URLSearchParams(response.next);
                    this.pagination.next = parseInt(urlParams.get('page'));
                } else {
                    this.pagination.next = null
                } 
                this.coursesType2.vebinars = response.results;
            }
        })
    },
    openPage(data) {
        this.options.page = data
        this.addQueryToUrl(false, data)
    },
    addSpec(data) {
        this.options.spec += `&specializations=${data}`
        this.options.page = 1
        this.addQueryToUrl(data)
        
    },
    removeSpec(data) {
        let myIndex = this.options.spec.indexOf(`&specializations=${data}`);
        this.options.page = 1
        if (myIndex !== -1) {
            this.options.spec = this.options.spec.slice(0, myIndex) + this.options.spec.slice(myIndex + (`&specializations=${data}`).length);
        }
        this.removeQueryToUrl(data)
    },
    addQueryToUrl(sp = null, page = null) {
        // Получаем текущий путь и параметры запроса
        const currentPath = this.$route.path;
        const currentQuery = JSON.parse(JSON.stringify(this.$route.query));

        // Инициализируем массив specializations, если он еще не существует
        

        // Добавляем новое значение в массив specializations
        if (sp) {
            currentQuery.specializations = currentQuery.specializations || [];
            if (typeof currentQuery.specializations === 'string') {
                let tmp = currentQuery.specializations
                currentQuery.specializations = []
                currentQuery.specializations.push(tmp);
                currentQuery.specializations.push(sp.toString());
            } else {
                currentQuery.specializations.push(sp.toString());
            }
            currentQuery.page = []
        }

        if (page) {
            currentQuery.page = currentQuery.page || [];
            currentQuery.page = page
        }

        // Создаем новый маршрут с обновленными параметрами запроса
        const newRoute = { path: currentPath, query: currentQuery };

        // Используем $router.push для обновления URL с новым маршрутом
        this.$router.push(newRoute);

        // Принудительно вызываем повторный рендер текущего маршрута
        this.initApi()
        this.componentKey += 1;
    },
    removeQueryToUrl(sp = null, page = null) {
      // Получаем текущий путь и параметры запроса
      const currentPath = this.$route.path;
      const currentQuery = JSON.parse(JSON.stringify(this.$route.query));


      // Удаляем значение из массива specializations
        if (sp) {
            if (typeof currentQuery.specializations === 'string') {
                currentQuery.specializations = [] 
            } else {
                const index = currentQuery.specializations.indexOf(sp.toString());
                if (index !== -1) {
                    currentQuery.specializations.splice(index, 1);
                }
            }
            currentQuery.page = []
        }

        // Создаем новый маршрут с обновленными параметрами запроса
        const newRoute = { path: currentPath, query: currentQuery };

        // Используем $router.push для обновления URL с новым маршрутом
        this.$router.push(newRoute);

        // Принудительно вызываем повторный рендер текущего маршрута
        this.initApi()
        this.componentKey -= 1;

    },
  }
}
</script>

<style lang="scss" scoped>

.mt {
    height: desktop-vw(15);
    width: 100%;
}

.courses {
    padding-top: desktop-vw(150);
    padding-bottom: desktop-vw(70);

    .coursesCat_item {
        max-width: desktop-vw(177);
        width: 100%;
        height: desktop-vw(177);
    }

    &_wrapCarusel {
        display: none;
    }

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

    &_list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: desktop-vw(22) desktop-vw(46);
        justify-content: space-between;
        width: 100%;
        height: max-content;
    }

    

    &_content {
        display: flex;
        grid-gap: desktop-vw(40);
    }

    &_filter {
        max-width: desktop-vw(240);
        
        &_list {
            display: flex;
            flex-direction: column;
            grid-gap: desktop-vw(15);
        }

        &_title {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(18);
            line-height: 130%;
            text-transform: uppercase;
            color: #1FAEEA;
            display: flex;
            justify-content: space-between;
            margin-bottom: desktop-vw(20);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:after {
                content: '';
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.3186 10.2527L9.65932 1.59338L1.00004 10.2527' stroke='%231FAEEA' stroke-width='2'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                display: block;
                width: desktop-vw(20);
                height: desktop-vw(11);
                transform: rotate(180deg);
                transition: all 0.3s ease;
            }

            &.active {
                &:after {
                    content: '';
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.3186 10.2527L9.65932 1.59338L1.00004 10.2527' stroke='%231FAEEA' stroke-width='2'/%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    display: block;
                    width: desktop-vw(20);
                    height: desktop-vw(11);
                    transform: rotate(0);
                }
            }
        }
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .mt {
        height: mobile-vw(15);
        width: 100%;
    }

    .carousel__prev, .carousel__next {
        background-color: #1FAEEA;
        height: mobile-vw(50);
        width: mobile-vw(50);
        border-radius: 3px;
        svg {
            height: 60%;
            width: 60%;
        }
    }

    .courses {
        padding-top: mobile-vw(35);
        padding-bottom: mobile-vw(60);

        .coursesCat_item {
            max-width: mobile-vw(230);
            width: 100%;
            height: mobile-vw(230);
        }

        &_wrapCarusel {
            display: block;
        }

        &_title {
            font-size: mobile-vw(32);
            margin-bottom: mobile-vw(37);
        }

        &_list {
            display: none;
        }

        &_content {
            display: flex;
            flex-direction: column-reverse;
        }

        &_filter {
            max-width: 100%;
            margin-top: mobile-vw(50);
            
            &_list {
                grid-gap: mobile-vw(15);
                width: max-content;
                margin: 0 auto;
            }

            &_title {
                font-size: mobile-vw(18);
                width: max-content;
                grid-gap: mobile-vw(15);
                margin: 0 auto mobile-vw(20) auto;

                &:after {
                    width: mobile-vw(20);
                    height: mobile-vw(11);
                }

                &.active {
                    &:after {
                        width: mobile-vw(20);
                        height: mobile-vw(11);
                    }
                }
            }
        }
    }
}

</style>

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


.courses {
    padding-top: desktop-vw(150);
    padding-bottom: desktop-vw(70);

    &_content {
        display: flex;
        grid-gap: desktop-vw(40);
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