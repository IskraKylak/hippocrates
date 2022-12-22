<template>
  <div class="courses-page">
    <div class="courses-page_list">
        <ItemCourses v-for="(item, idx) in coursesType2.courses" :key="idx" :content="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import ItemCourses from '@/components/ItemCourses'

export default {
  name: 'Search',
  components: {
    ItemCourses
  },
  methods: {
    ...mapActions([
        'GET_SEARCH_FROM_API',
    ]),
  },
  mounted() {
    this.GET_SEARCH_FROM_API().then((response) => {
      if(response) {
        this.countItem = response.count
        for(let i = 0; i < response.results.length; i++) {
            this.coursesType2.courses.push(response.results[i])
        }
      }
    })
  },
  data() {
    return {
       coursesType2: {
            name: 'Знайдені курси',
            courses: [
            ]
        },
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