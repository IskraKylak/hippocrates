<template>
  <div class="home">
    <Poster :content="poster" /> 
    <Instruction :content="instruction" />
    <Events :content="events" />
    <Courses v-if="courses.list.length !== 0" :content="courses" />
    <CalendarEvent :content="calendarEvent" />
    <!-- <Portfolio :content="portfolio" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/Poster'
import Instruction from '@/components/Instruction'
import Events from '@/components/Events'
import Courses from '@/components/Courses'
import CalendarEvent from '@/components/CalendarEvent'
import Portfolio from '@/components/Portfolio'
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'Home',
  components: {
    Poster,
    Instruction,
    Events,
    Courses,
    CalendarEvent,
    Portfolio
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
      poster: {
        title: 'Hippocrates',
        text: '',
        img: '',
      },
      portfolio: {
        title: 'освітнє портфоліо',
        text: 'Навіщо потрібне освітнє портфоліо - офіційні документи МОЗ України, які повинен заповнювати кожен лікар для підготовки до атестації.',
        btn: 'Відкрити анкету'
      },
      calendarEvent: {
        title: '',
        subtitle: 'Найближчі події',
        list: [
          // {
          //   img: require('../assets/img/calendarImg.png'),
          //   data: '9.07 - 10.07',
          //   time: '17:00 - 19:00',
          //   location: 'Київ - Черкаси - Житомир',
          //   name: 'Кардіо-Метаболічна Академія, частина четверта.',
          //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......'
          // },
          // {
          //   img: require('../assets/img/calendarImg.png'),
          //   data: '9.07 - 10.07',
          //   time: '17:00 - 19:00',
          //   location: 'Київ - Черкаси - Житомир',
          //   name: 'Кардіо-Метаболічна Академія, частина четверта.',
          //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......'
          // },
          // {
          //   img: require('../assets/img/calendarImg.png'),
          //   data: '9.07 - 10.07',
          //   time: '17:00 - 19:00',
          //   location: 'Київ - Черкаси - Житомир',
          //   name: 'Кардіо-Метаболічна Академія, частина четверта.',
          //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......'
          // }
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
        title: '',
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
      },
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
        
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-top: desktop-vw(150);
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  .home {
    padding-top: 0;
  }
}

</style>