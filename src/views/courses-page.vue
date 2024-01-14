<template>
  <div class="courses-page">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <div class="courses-page_wrapList">
            <div class="courses-page_type">
                {{ coursesType2.name }}
            </div>
            <div class="courses-page_list">
                <ItemCourses v-for="(item, idx) in coursesType2.courses" :key="idx" :content="item" />
            </div>
            <Pagination v-if="pagination.count > 1" :content="pagination" @openPage="openPage" />
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
  name: 'Courses',
  components: {
    Breadcrumbs,
    ItemCourses,
    Pagination
  },
    data() {
    return {
        nameCat: '',
        idCat: '',
        options: {
            page: 1,
            spec: '',
            lang: 'uk'
        },
        pagination: {
            elementPage: 6,
            count: 0,
            next: null,
            prev: null
        },
        coursesType2: {
            name: 'Всі курси',
            courses: [
                // {
                //     img: require('../assets/img/coursesImg/1.jpg'),
                //     title: 'Вірус папіломи людини',
                //     text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                // },
            ]
        },
    }
  },
  computed: {
    ...mapGetters([
      'SPECIALIZATIONSITEM',
    ]),
    breadcrumbs() {
        let breadcrumbs = [
            {
                name: this.$t('breadcrumbs.home'),
                link: `/${this.$i18n.locale}/`
            },
            {
                name: this.$t('breadcrumbs.courses'),
            },
        ] 
        if(this.nameCat != '') {
            breadcrumbs = [
                {
                    name: this.$t('breadcrumbs.home'),
                    link: `/${this.$i18n.locale}/`
                },
                {
                    name: this.$t('breadcrumbs.courses'),
                    link: `/${this.$i18n.locale}/courses`
                },
            ] 
            breadcrumbs.push({name: this.nameCat})
        }
            
        return breadcrumbs;
    },
  },
  mounted() {
    const currentQuery = { ...this.$route.query };
    let lang = 'uk'
    if(this.$i18n.locale != 'ua')
      lang = this.$i18n.locale
    this.options.lang = lang
    if(currentQuery.specializations) {
        this.options.spec += `&specializations=${currentQuery.specializations}`
        this.GET_SPECIALIZATIONS_FROM_API(lang).then((response) => {
        if(response) {
            response.forEach(item => {
                if (item.id == currentQuery.specializations) {
                    this.nameCat = item.name
                }
            });
        }
        }).finally(()=>{
            this.initApi()
        })
    }  
    if(currentQuery.page)
        this.options.page = currentQuery.page
    this.initApi()
  },
  methods: {
    ...mapActions([
        'GET_COURSES_SPECIAL_FROM_API',
        'GET_SPECIALIZATIONS_ITEM_FROM_API',
        'GET_COURSES_FROM_API_PAGE',
        'GET_SPECIALIZATIONS_FROM_API'
    ]),
    initApi () {
        this.GET_COURSES_FROM_API_PAGE(this.options).then((response) => {
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
                this.coursesType2.courses = response.results;
            }
        })
    },
    openPage(data) {
        this.options.page = data
        this.addQueryToUrl(false, data)
    },
    addQueryToUrl(sp = null, page = null) {
        // Получаем текущий путь и параметры запроса
        const currentPath = this.$route.path;
        const currentQuery = JSON.parse(JSON.stringify(this.$route.query));

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