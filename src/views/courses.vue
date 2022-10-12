<template>
  <div class="courses">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <h1 class="courses_title">{{ title }}</h1>
        <div class="courses_content">
            <div class="courses_filter">
                <div class="courses_filter_title">
                    {{ filterTitle }}
                </div>
                <div class="courses_filter_list">
                    <CheckBox v-for="(item, idx) in CheckBox" :key="idx" :idx="idx" :content="item" />
                </div>
            </div>
            <div class="courses_list">
                <ItemCourses v-for="(item, idx) in courses.list" :key="idx" :content="item" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import CheckBox from '@/components/UI/Controls/CheckBox.vue'
import ItemCourses from '@/components/ItemCourses.vue'
export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs,
    CheckBox,
    ItemCourses
  },
  data() {
    return {
        title: 'Курси',
        filterTitle: 'Курси по спеціальностям',
        courses: {
            list: [
                {
                    img: require('../assets/img/courses/1.png'),
                    name: 'хірургія'
                },
                {
                    img: require('../assets/img/courses/2.png'),
                    name: 'сімейна медицина'
                },
                {
                    img: require('../assets/img/courses/3.png'),
                    name: 'кардіологія'
                },
                {
                    img: require('../assets/img/courses/4.png'),
                    name: 'неврологія'
                },
                {
                    img: require('../assets/img/courses/1.png'),
                    name: 'хірургія'
                },
                {
                    img: require('../assets/img/courses/2.png'),
                    name: 'сімейна медицина'
                },
                {
                    img: require('../assets/img/courses/3.png'),
                    name: 'кардіологія'
                },
                {
                    img: require('../assets/img/courses/4.png'),
                    name: 'неврологія'
                }
            ]
        },
        CheckBox: [
            'Акушер-гінеколог',
            'Алерголог-імунолог',
            'Анестезіолог',
            'Біолог',
            'Гастроентеролог',
            'Гематолог',
            'Дерматолог',
            'Ендокринолог',
            'Епідеміолог',
        ],
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
  }
}
</script>
<style lang="scss" scoped>

.courses {
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

    &_list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: desktop-vw(22) desktop-vw(46);
        justify-content: space-between;
        width: 100%;
    }

    &_item {
        max-width: desktop-vw(177);
        width: 100%;
        height: desktop-vw(177);
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
        }
    }


}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .courses {
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