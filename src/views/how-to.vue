<template>
  <div class="home">
    <Poster :content="poster" /> 
    <Instruction :content="instruction" />
    <Events :content="events" />
    <Courses v-if="courses.list.length !== 0" :content="courses" />
    <CalendarEvent :content="calendarEvent" />
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/Poster'
import Events from '@/components/Events'
import Courses from '@/components/Courses'
import CalendarEvent from '@/components/CalendarEvent'
import Instruction from '@/components/Instruction'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Home',
  components: {
    Poster,
    Events,
    Courses,
    CalendarEvent,
    Instruction
  },
  methods: {
    ...mapActions([
        'GET_HOME_FROM_API',
        'GET_SPECIALIZATIONS_FROM_API',
        'GET_EVENT_FROM_API'
    ]),
  },
  mounted() {
    this.GET_HOME_FROM_API().then((response) => {
      // console.log(response)
      if(response) {
        this.poster.img = response.banner
        this.poster.text = response.banner_text
        this.poster.title = 'Hippocrates'
        this.instruction.title = response.text_over_video
        this.instruction.list[0].video = response.help_video
        this.instruction.list[0].text = ''
        this.instruction.list[0].title = response.text_under_video
        this.events.title = response.events_block_title
        this.calendarEvent.title = response.calendar_block_title
      }
    })
    this.GET_SPECIALIZATIONS_FROM_API().then((response) => {
      if(response) {
        for(let i = 0; i < response.length; i++) {
          this.courses.list.push(response[i])
          this.courses.list[i].img = response[i].photo
        }
      }
    })
    this.GET_EVENT_FROM_API().then((response) => {
      if(response) {
        this.calendarEvent.list = response.results
      }
    })
  },
  data() {
    return {
      instruction: {
        title: 'як користуватися платформою гіппократ',
        btn: 'Особистий кабінет',
        list: [
          {
            video: '',
            title: 'підвищуйте свою професійну кваліфікацію',
            text: ''
          }
        ]
      },
      poster: {
        text: 'БЕЗПЕРЕРВНА МЕДИЧНА ОСВІТА ЛІКАРІВ І ФАРМАЦЕВТІВ'
      },
      portfolio: {
        title: 'освітнє портфоліо',
        text: 'Навіщо потрібне освітнє портфоліо - офіційні документи МОЗ України, які повинен заповнювати кожен лікар для підготовки до атестації.',
        btn: 'Відкрити анкету'
      },
      calendarEvent: {
        title: 'календар наукових заходів',
        subtitle: 'Найближчі події',
        list: [
          {
            img: require('../assets/img/calendarImg.png'),
            data: '9.07 - 10.07',
            time: '17:00 - 19:00',
            location: 'Київ - Черкаси - Житомир',
            name: 'Кардіо-Метаболічна Академія, частина четверта.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......'
          },
          {
            img: require('../assets/img/calendarImg.png'),
            data: '9.07 - 10.07',
            time: '17:00 - 19:00',
            location: 'Київ - Черкаси - Житомир',
            name: 'Кардіо-Метаболічна Академія, частина четверта.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......'
          },
          {
            img: require('../assets/img/calendarImg.png'),
            data: '9.07 - 10.07',
            time: '17:00 - 19:00',
            location: 'Київ - Черкаси - Житомир',
            name: 'Кардіо-Метаболічна Академія, частина четверта.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......'
          }
        ]
      },
      courses: {
        title: 'Основні курси',
        btn: 'Переглянути усі',
        list: [
          // {
          //   img: require('../assets/img/courses/1.png'),
          //   name: 'хірургія'
          // },
          // {
          //   img: require('../assets/img/courses/2.png'),
          //   name: 'сімейна медицина'
          // },
          // {
          //   img: require('../assets/img/courses/3.png'),
          //   name: 'кардіологія'
          // },
          // {
          //   img: require('../assets/img/courses/4.png'),
          //   name: 'неврологія'
          // },
          // {
          //   img: require('../assets/img/courses/1.png'),
          //   name: 'хірургія'
          // },
          // {
          //   img: require('../assets/img/courses/2.png'),
          //   name: 'сімейна медицина'
          // },
          // {
          //   img: require('../assets/img/courses/3.png'),
          //   name: 'кардіологія'
          // },
          // {
          //   img: require('../assets/img/courses/4.png'),
          //   name: 'неврологія'
          // }
        ]
      },
      events: {
        title: 'нові освітні події',
        btn: 'Переглянути усі',
        list: [
          {
            img: require('../assets/img/imageEvents.png'),
            name: 'Фетальне програмування та інтегральний інтервал',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.',
            data: '08.07.2020',
            time: '16:00'
          },
          {
            img: require('../assets/img/imageEvents.png'),
            name: 'цикл вебінарів “кардіо-метаболічна академія”',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.',
            data: '09.07.2020',
            time: '17:00'
          },
          {
            img: require('../assets/img/imageEvents.png'),
            name: 'Фетальне програмування та інтегральний інтервал',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.',
            data: '08.07.2020',
            time: '16:00'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-top: desktop-vw(150);
}
.howTo {
    padding: desktop-vw(50) 0;

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(24);
        line-height: 130%;
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(50);
    }

    &_video {
        height: 70vh;
        width: 100%;
        display: flex;
        justify-content: center;

        video {
            height: 100%;
            width: auto;
            margin: 0 auto;
        }
    }
}


@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  .home {
    padding-top: 0;
  }

  .howTo {
        padding: mobile-vw(50) 0;

        &_title {
            font-style: normal;
            font-weight: 700;
            font-size: mobile-vw(24);
            line-height: 130%;
            text-align: center;
            text-transform: uppercase;
            color: #1FAEEA;
            margin-bottom: mobile-vw(50);
        }

        &_video {
            height: auto;
            width: 100%;
            display: flex;
            justify-content: center;

            video {
                height: auto;
                width: 100%;
                margin: 0 auto;
            }
        }
    }
}

</style>