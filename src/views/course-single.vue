<template>
  <div class="courseSingle">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <h2 class="courseSingle_title">
            {{ coursesContent.name }}
        </h2>
        <div class="courseSingle_content">
            <div class="courseSingle_left">
                <div class="courseSingle_lessons" v-if="isLessons">
                    <div class="courseSingle_lessons_item bg">
                        Уроки
                    </div>
                    <div class="courseSingle_lessons_item" v-for="(item, idx) in coursesContent.lessons_set" :key="idx">
                        <div @click="openLesson(item.id)">
                            {{ item.order_number }}. {{ item.name }}
                        </div>
                    </div>
                    <div class="courseSingle_lessons_item">
                        <Button class="btn btn_btnFeedback" @click="isLessons = false; isLessonContent = false">Подивитись Курс</Button>
                    </div>
                </div>
                <div class="courseSingle_wrapImg mob" v-if="coursesContent.course_image && !isLessons">
                    <img :src="coursesContent.course_image" alt="img">
                </div>
                <div class="courseSingle_table" v-if="!isLessons">
                    <div class="courseSingle_row bg">
                        <div class="courseSingle_head">
                            {{ table.head }}
                        </div>
                    </div>
                    <div class="courseSingle_row user">
                        <div class="courseSingle_user">
                            {{ table.user }}
                        </div>
                        <div class="courseSingle_value user" v-for="(item, idx) in specializationCourse" :key="idx">
                            {{ item }}
                        </div>
                    </div>
                    <div class="courseSingle_row">
                        <div class="courseSingle_certifikate">
                            {{ table.certifikat }}
                        </div>
                        <div class="courseSingle_value">
                            {{ courseInfo.cer }}
                        </div>
                    </div>
                    <div class="courseSingle_row">
                        <div class="courseSingle_calend">
                            {{ table.availableIn }}
                        </div>
                        <div class="courseSingle_value">
                            {{ getDateStart }}.{{ getMonthStart }}.{{ getFullYearStart }}
                        </div>
                    </div>
                    <div class="courseSingle_row">
                        <div class="courseSingle_calend">
                            {{ table.availableUpTo }}
                        </div>
                        <div class="courseSingle_value">
                            {{ getDateEnd }}.{{ getMonthEnd }}.{{ getFullYearEnd }}
                        </div>
                    </div>
                    <div class="courseSingle_row">
                        <Button v-if="tokkent === ''" class="btn btn_btnFeedback" @click="openLog()">Авторизуйтесь</Button>
                        <div v-else class="courseSingle_wrapBtn">
                            <Button class="btn btn_btnFeedback" @click="isLessons = !isLessons">Подивитись уроки</Button>
                            <Button v-if="coursesContent.course_test" class="btn btn_btnFeedback" @click="goToTest()">Пройти тест</Button>
                        </div>
                        
                    </div>
                </div>
                <div class="courseSingle_text mob" v-if="!lessons" v-html="coursesContent.text">
                </div>
                <div class="courseSingle_wrapAuthor">
                    <div class="courseSingle_authorTitle">
                        {{ author.name }}
                    </div>
                    <div class="courseSingle_authorImg">
                        <img :src="author.img" alt="img">
                    </div>
                </div>
            </div>
            <div class="courseSingle_right" v-if="!isLessonContent">
                <div class="courseSingle_wrapImg">
                    <img :src="coursesContent.course_image" alt="img">
                </div>
                <div class="courseSingle_text" v-html="coursesContent.text">
                </div>
                <div class="courseSingle_promotion"></div>
            </div>
            <div class="courseSingle_right" v-if="isLessons && isLessonContent">
                <h2 class="courseSingle_lessonTitle">
                    {{ contentLesson.name }}
                </h2>
                <div class="courseSingle_text" v-html="contentLesson.text">
                </div>
                <div class="courseSingle_promotion"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import ItemCourses from '@/components/ItemCourses'
import Button from '@/components/UI/Controls/Button.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs,
    ItemCourses,
    Button
  },
  data() {
    return {
        contentLesson: {},
        isLessonContent: false,
        isLessons: false,
        coursesContent: false,
        specialization: '',
        allSpecialization: [],
        courseInfo: {
            work: 'Акушер-гінеколог',
            cer: '0 бал',
            dataStart: '20.05.2020',
            dataEnd: '20.05.2020'

        },
        title: this.$route.params.Pid2,
        table: {
            head: 'ПРО КУРС',
            user: 'СПЕЦІАЛЬНОСТІ',
            certifikat: 'СЕРТИФІКАТ',
            availableIn: 'ДОСТУПНИЙ З', 
            availableUpTo: 'ДОСТУПНИЙ ДО'
        },
        author: {
            name: 'Автор курсу',
            img: require('../assets/img/courses.jpg'),
        }
    }
  },
  created () {
  },
  computed: {
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
        if(this.specialization != '')
            breadcrumbs.push({name: this.specialization.name, link:`/courses/${this.specialization.id}`}) 
        if(this.coursesContent.name != '')
            breadcrumbs.push({name: this.coursesContent.name})
        return breadcrumbs;
    },
    getDateStart() {
        if(this.coursesContent) {
            return new Date(this.coursesContent.start_date).getDate()
        }
        return ''
    },
    getMonthStart() {
        if(this.coursesContent) {
            let month = new Date(this.coursesContent.start_date).getMonth() + 1
            if(month < 10)
                return '0' + month
            else
                return month
        }
        return ''
    },
    getFullYearStart() {
        if(this.coursesContent) {
            let year = new Date(this.coursesContent.start_date).getFullYear() + 1
            return year
        }
        return ''
    },
    getDateEnd() {
        if(this.coursesContent) {
            return new Date(this.coursesContent.end_date).getDate()
        }
        return ''
    },
    getMonthEnd() {
        if(this.coursesContent) {
            let month = new Date(this.coursesContent.end_date).getMonth() + 1
            if(month < 10)
                return '0' + month
            else
                return month
        }
        return ''
    },
    getFullYearEnd() {
        if(this.coursesContent) {
            let year = new Date(this.coursesContent.end_date).getFullYear() + 1
            return year
        }
        return ''
    },
    getHoursStart() {
        if(this.coursesContent) {
            return new Date(this.coursesContent.start_date).getHours()
        }
        return ''
    },
    getMinutesStart() {
        if(this.coursesContent) {
            let minutes = new Date(this.coursesContent.start_date).getMinutes()
            if(minutes < 10)
                return '0' + minutes
            else
                return minutes
        }
        return ''
    },
    getHoursEnd() {
        if(this.coursesContent) {
            return new Date(this.coursesContent.end_date).getHours()
        }
        return ''
    },
    getMinutesEnd() {
        if(this.coursesContent) {
            let minutes = new Date(this.coursesContent.end_date).getMinutes()
            if(minutes < 10)
                return '0' + minutes
            else
                return minutes
        }
        return ''
    },
    tokkent() {
        return this.$store.getters.getToken
    },
    specializationCourse () {
        if(this.coursesContent) {
            let tmpSpecialization = []
            if(this.coursesContent.specializations){
                for( let i = 0; i < this.coursesContent.specializations.length; i++) {
                    if(this.allSpecialization) {
                        for( let n = 0; n < this.allSpecialization.length; n++) {
                            if(this.coursesContent.specializations[i] == this.allSpecialization[n].id)
                                tmpSpecialization.push(this.allSpecialization[n].name)
    
                        }
                    }
                    
                }
            }
            return tmpSpecialization
        }
        return ''
    }
  },
  methods: {
    goToTest () {
      // alert(proId)
      this.$router.push({
        name: 'testCourse',
        params: { Pid2: this.title }
      })
    },
    openLesson(id) {
        let obj = {
            course: this.coursesContent.id,
            lesson: id
        }
        this.GET_LESSON_FROM_API(obj).then((response) => {
            if(response) {
                this.contentLesson = response
                this.isLessonContent = true
            }
        })
    },
    openLog() {
        this.$router.push('/login')
    },
    ...mapActions([
        'GET_COURSESITEM_FROM_API',
        'GET_SPECIALIZATIONS_ITEM_FROM_API',
        'GET_SPECIALIZATIONS_FROM_API',
        'GET_COURSESITEM_FROM_API_TOKKEN',
        'GET_LESSON_FROM_API'
    ]),
  },
  mounted() {
    if(this.$route.params.Pid1) {
        let mas = this.$route.params.Pid1.split('&');
        if(mas.length == 2) {
            let numEl = parseInt(this.$route.params.Pid1.match(/\d+/));
            this.GET_SPECIALIZATIONS_ITEM_FROM_API(numEl).then((response) => {
                if(response) {
                    this.specialization = response
                }
            })
        }
    }
    let obj = {
        id: this.$route.params.Pid2,
        tokken: this.tokkent
    }
    if(this.tokkent === '') {
        this.GET_COURSESITEM_FROM_API(obj).then((response) => {
            if(response) {
                this.coursesContent = response
            }
        })
        
    } else {
        this.GET_COURSESITEM_FROM_API_TOKKEN(obj).then((response) => {
            if(response) {
                this.coursesContent = response
            }
        })
        console.log(this.coursesContent)
    }
    
    this.GET_SPECIALIZATIONS_FROM_API().then((response) => {
      if(response) {
        this.allSpecialization = response
      }
    })
  }
}
</script>

<style lang="scss" scoped>

.courseSingle {
    padding: desktop-vw(150) 0 0;
    
    &_title {
        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(24);
        line-height: 130%;
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(50);
    }

    &_wrapBtn {
        display: flex;
        width: 100%;
        flex-direction: column;
        grid-gap: desktop-vw(10);
    }

    &_right {
        flex: 1 1 auto;
    }

    &_wrapImg {
        height: desktop-vw(400);
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
        border-radius: 3px;
        margin-bottom: desktop-vw(30);

        &.mob {
            display: none;
        }

        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    &_text {
        color: #383838;
        line-height: 130%;
        font-size: desktop-vw(16);
        
        &.mob {
            display: none;
        }
    }

    &_content {
        display: flex;
        justify-content: space-between;
        grid-gap: desktop-vw(30);
        padding-bottom: desktop-vw(60);
    }

    &_table, &_lessons {
        width: desktop-vw(350);
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 3px;
        overflow: hidden;
    }

    &_lessonTitle {
        color: #383838;
        margin-bottom: desktop-vw(15);
    }

    &_lessons_item {
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: #1FAEEA;
        }
        
        &.bg {
            font-weight: bold;
            text-transform: uppercase;
            cursor: auto;

            &:hover {
                color: #383838;
            }
        }
    }

    &_row, &_lessons_item {
        min-height: desktop-vw(50);
        padding: desktop-vw(15) desktop-vw(20);
        border-bottom: 1px solid rgba(0,0,0,.1);
        display: flex;
        justify-content: space-between;

        &:last-child {
            border-bottom: 0;
        }

        &.user {
            flex-direction: column;
        }

        &.bg {
            background: #f8f8f8;
        }
    }

    &_head {
        line-height: 130%;
        color: #383838;
        font-weight: 700;
        font-size: desktop-vw(16);
        text-transform: uppercase;
    }

    &_user,
    &_certifikate,
    &_calend,
    &_value {
        text-transform: uppercase;
        line-height: 130%;
        color: #383838;
        font-weight: 400;
        font-size: desktop-vw(16);
        text-transform: uppercase;
        display: flex;
        grid-gap: desktop-vw(16);
    }

    &_value {
        display: flex;
        text-transform: none;

        &.user {
            font-weight: 400;
            color: #1FAEEA;
            margin-top: desktop-vw(10);

            &:before {
                content:"";
                display: flex;
                width: desktop-vw(20);
                height: desktop-vw(20);
            }
        }
    }

    &_user {
        &:before {
            content:"";
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.071 12.929a9.963 9.963 0 00-3.8-2.384 5.78 5.78 0 002.51-4.764A5.788 5.788 0 0010 0a5.788 5.788 0 00-5.781 5.781 5.78 5.78 0 002.51 4.764 9.962 9.962 0 00-3.8 2.384A9.935 9.935 0 000 20h1.563c0-4.652 3.785-8.438 8.437-8.438 4.652 0 8.438 3.786 8.438 8.438H20a9.935 9.935 0 00-2.929-7.071zM10 10a4.224 4.224 0 01-4.219-4.219A4.224 4.224 0 0110 1.563a4.224 4.224 0 014.219 4.218A4.224 4.224 0 0110 10z' fill='%231FAEEA'%3e%3c/path%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: flex;
            width: desktop-vw(20);
            height: desktop-vw(20);
        }
    }

    &_certifikate {
        &:before {
            content:"";
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.998 13.17l-.173.144a1.226 1.226 0 01-1.198.236 1.25 1.25 0 01-.84-.898l-.369-1.492-1.486.104-2.833 6.72 2.885-1.26.029-.012c.3-.115.628.034.743.334l1.111 2.948 2.505-5.937-.374-.887zM10 3.346A2.888 2.888 0 007.11 6.23 2.891 2.891 0 0010 9.116a2.883 2.883 0 002.89-2.88A2.893 2.893 0 0010 3.347z' fill='%231FAEEA'%3e%3c/path%3e%3cpath d='M16.49 6.139l-1.71-1.071a.575.575 0 01-.23-.703l.754-1.872c.005-.017.005-.028.005-.046a.103.103 0 00-.115-.103l-2.015.138a.583.583 0 01-.6-.438L12.097.086a.118.118 0 00-.075-.08.114.114 0 00-.103.023l-1.55 1.301a.582.582 0 01-.742 0L8.082.03A.1.1 0 007.98.006c-.04.011-.07.04-.075.08L7.42 2.044a.583.583 0 01-.599.438l-2.015-.138c-.018 0-.03 0-.047.005a.11.11 0 00-.063.144l.755 1.872a.577.577 0 01-.23.703L3.51 6.138c-.035.018-.052.052-.052.093 0 .04.017.075.052.098l1.71 1.065a.575.575 0 01.23.703l-.754 1.865a.112.112 0 000 .087.125.125 0 00.063.057l.012.006h.04l2.01-.144h.04c.265 0 .496.179.559.438l.484 1.958c.011.04.04.069.075.08.034.018.074.006.103-.017l1.55-1.301a.582.582 0 01.742 0l1.544 1.301a.1.1 0 00.103.023c.04-.011.064-.04.075-.08l.484-1.958a.573.573 0 01.599-.438l2.01.144c.017.006.028.006.04 0l.011-.006a.09.09 0 00.064-.057.112.112 0 000-.087l-.76-1.871a.578.578 0 01.23-.703L16.49 6.33a.113.113 0 00.052-.098c0-.04-.017-.075-.052-.092zM10 10.274a4.036 4.036 0 01-4.043-4.037A4.044 4.044 0 0110 2.194a4.036 4.036 0 014.043 4.037A4.055 4.055 0 0110 10.274z' fill='%231FAEEA'%3e%3c/path%3e%3cpath d='M15.068 11.258l-1.486-.103-.369 1.491a1.261 1.261 0 01-2.039.662L10 12.335l-.08.063.633 1.504L13.127 20l1.111-2.948c.006-.012.006-.018.012-.03a.577.577 0 01.76-.299l2.89 1.25-2.832-6.715z' fill='%231FAEEA'%3e%3c/path%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: flex;
            width: desktop-vw(20);
            height: desktop-vw(20);
        }
    }

    &_calend {
        &:before {
            content:"";
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.656 1.563h-.937V0h-1.563v1.563H4.844V0H3.28v1.563h-.937A2.346 2.346 0 000 3.905v13.75A2.346 2.346 0 002.344 20h15.312A2.346 2.346 0 0020 17.656V3.906a2.346 2.346 0 00-2.344-2.344zm.782 16.093c0 .431-.351.782-.782.782H2.344a.782.782 0 01-.781-.782V7.344h16.875v10.312zm0-11.875H1.563V3.906c0-.43.35-.781.78-.781h.938v1.563h1.563V3.125h10.312v1.563h1.563V3.125h.937c.431 0 .782.35.782.781v1.875z' fill='%231FAEEA'%3e%3c/path%3e%3cpath d='M4.531 8.984H2.97v1.563H4.53V8.984zM7.656 8.984H6.094v1.563h1.562V8.984zM10.781 8.984H9.22v1.563h1.562V8.984zM13.906 8.984h-1.562v1.563h1.562V8.984zM17.031 8.984H15.47v1.563h1.562V8.984zM4.531 12.11H2.97v1.562H4.53v-1.563zM7.656 12.11H6.094v1.562h1.562v-1.563zM10.781 12.11H9.22v1.562h1.562v-1.563zM13.906 12.11h-1.562v1.562h1.562v-1.563zM4.531 15.234H2.97v1.563H4.53v-1.563zM7.656 15.234H6.094v1.563h1.562v-1.563zM10.781 15.234H9.22v1.563h1.562v-1.563zM13.906 15.234h-1.562v1.563h1.562v-1.563zM17.031 12.11H15.47v1.562h1.562v-1.563z' fill='%231FAEEA'%3e%3c/path%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: flex;
            width: desktop-vw(20);
            height: desktop-vw(20);
        }
    }

    &_wrapAuthor {
        padding: desktop-vw(30) 0 desktop-vw(20) 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &_authorTitle {
        margin-bottom: desktop-vw(20);
        font-size: desktop-vw(16);
        font-weight: 500;
        color: #383838;
    }

    &_authorImg {
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        width: desktop-vw(176);
        height: desktop-vw(176);

        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .courseSingle {
        padding: mobile-vw(40) 0 0;

        &_wrapBtn {
            grid-gap: mobile-vw(10);
        }
        
        &_title {
            font-size: mobile-vw(24);
            margin-bottom: mobile-vw(20);
        }

        &_right {
            flex: 1 1 auto;
            display: none;
        }

        &_wrapImg {
            height: mobile-vw(200);
            margin-bottom: mobile-vw(30);

            &.mob {
                display: block;
            }
        }

        &_text {
            font-size: mobile-vw(16);
            &.mob {
                display: block;
            }
        }

        &_content {
            grid-gap: mobile-vw(30);
            padding-bottom: mobile-vw(60);
        }

        &_left {
            width: 100%;
        }

        &_table {
            width: 100%;
            margin-bottom: mobile-vw(20);
        }

        &_row {
            min-height: mobile-vw(50);
            padding: mobile-vw(15) mobile-vw(20);
        }

        &_head {
            font-size: mobile-vw(16);
        }

        &_user,
        &_certifikate,
        &_calend,
        &_value {
            font-size: mobile-vw(16);
            grid-gap: mobile-vw(16);
        }

        &_value {
            display: flex;
            text-transform: none;

            &.user {
                margin-top: mobile-vw(10);

                &:before {
                    width: mobile-vw(20);
                    height: mobile-vw(20);
                }
            }
        }

        &_user {
            &:before {
                width: mobile-vw(20);
                height: mobile-vw(20);
            }
        }

        &_certifikate {
            &:before {
                width: mobile-vw(20);
                height: mobile-vw(20);
            }
        }

        &_calend {
            &:before {
                width: mobile-vw(20);
                height: mobile-vw(20);
            }
        }

        &_wrapAuthor {
            padding: mobile-vw(30) 0 mobile-vw(20) 0;
        }

        &_authorTitle {
            margin-bottom: mobile-vw(20);
            font-size: mobile-vw(16);
        }

        &_authorImg {
            width: mobile-vw(176);
            height: mobile-vw(176);
        }
    }
}

</style>