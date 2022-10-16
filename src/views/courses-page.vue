<template>
  <div class="courses-page">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <div class="courses-page_wrapList">
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
        </div>
        <div class="courses-page_wrapList">
            <div class="courses-page_type">
                {{ coursesType2.name }}
            </div>
            <div class="courses-page_list">
                <ItemCourses v-for="(item, idx) in coursesType2Sort" :key="idx" :content="item" />
            </div>
            {{ pag2.length }}
            <div class="box_pagination" v-if="pag2 > 1">
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
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import ItemCourses from '@/components/ItemCourses'
export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs,
    ItemCourses
  },
  data() {
    return {
        page: {
            current: 1,
            length: 6,
        },
        active: 1,
        pag1: [],
        pag2: [],
        coursesType1: {
            name: 'Обрані курси',
            courses: [
                {
                    img: require('../assets/img/coursesImg/1.jpg'),
                    title: 'Вірус папіломи людини',
                    text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                },   
            ]
        },
        coursesType2: {
            name: 'Всі курси',
            courses: [
                {
                    img: require('../assets/img/coursesImg/1.jpg'),
                    title: 'Вірус папіломи людини',
                    text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                },
                {
                    img: require('../assets/img/coursesImg/2.jpg'),
                    title: 'Кесарський розтин',
                    text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                },
                {
                    img: require('../assets/img/coursesImg/1.jpg'),
                    title: 'Вірус папіломи людини',
                    text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                },
                {
                    img: require('../assets/img/coursesImg/2.jpg'),
                    title: 'Кесарський розтин',
                    text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                },
                {
                    img: require('../assets/img/coursesImg/1.jpg'),
                    title: 'Вірус папіломи людини',
                    text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                },
                {
                    img: require('../assets/img/coursesImg/2.jpg'),
                    title: 'Кесарський розтин',
                    text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                },
                {
                    img: require('../assets/img/coursesImg/2.jpg'),
                    title: 'Кесарський розтин',
                    text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                },
                {
                    img: require('../assets/img/coursesImg/1.jpg'),
                    title: 'Вірус папіломи людини',
                    text: 'Курс направлений на сприяння формуванню у лікаря сучасних уявлень про папіломавірусну інфекцію (ПВ).'
                },
                {
                    img: require('../assets/img/coursesImg/2.jpg'),
                    title: 'Кесарський розтин',
                    text: 'Курс присвячений питанням передопераційного огляду, визначенню ступеню анестезіологічного ризику та технології анестезіологічного забезпечення при плановій та ургентній операції кесарського розтину.' 
                },
            ]
        },
        breadcrumbs: [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'курсы'
            }
        ],
    }
  },
  created () {
        this.pag1 = Math.ceil(this.coursesType1.courses.length / this.page.length)
        this.pag2 = Math.ceil(this.coursesType2.courses.length / this.page.length)
        console.log(this.pag2)
  },
  computed: {
    coursesType1Sort () {
      return this.coursesType1.courses
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length
          let end = this.page.current * this.page.length
          if (index >= start && index < end) return true
        })
    },
    coursesType2Sort () {
      return this.coursesType2.courses
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length
          let end = this.page.current * this.page.length
          if (index >= start && index < end) return true
        })
    }
  },
  methods: {
    openPage (idx) {
      this.active = idx
      this.page.current = idx
    },
    prevPage () {
        if (this.page.current > 1) {
            this.page.current -= 1
            this.active = this.page.current
        }
    },
    nextPage () {
        if (this.page.current * this.page.length < this.info1.length) {
            this.page.current += 1
            this.active = this.page.current
        }
    }
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
        grid-gap: desktop-vw(30) desktop-vw(60);
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