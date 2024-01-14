<template>
  <div class="home">
    <Poster :content="poster" /> 
    <Instruction :content="instruction" />
    <Events :content="events" />
    <Courses :content="courses" />
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
        'GET_EVENT_FROM_API',
        'GET_VEBINAR_FROM_API'
    ]),
  },
  data() {
    return {
      instruction: {
        // title: 'як користуватися платформою гіппократ',
        // btn: 'Особистий кабінет',
        list: [
          {
            video: '',
            // title: 'підвищуйте свою професійну кваліфікацію',
            text: ''
          }
        ]
      },
      poster: {
        text: ''
      },
      // portfolio: {
      //   title: 'освітнє портфоліо',
      //   text: 'Навіщо потрібне освітнє портфоліо - офіційні документи МОЗ України, які повинен заповнювати кожен лікар для підготовки до атестації.',
      //   btn: 'Відкрити анкету'
      // },
      calendarEvent: {
        title: '',
        subtitle: 'Найближчі події',
        list: [
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
        ]
      },
      events: {
        title: '',
        btn: 'Переглянути усі',
        list: [
        ]
      }
    }
  },
  mounted() {
    let lang = 'uk'
    if(this.$i18n.locale != 'ua')
      lang = this.$i18n.locale
    this.GET_HOME_FROM_API(lang).then((response) => {
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
    this.GET_SPECIALIZATIONS_FROM_API(lang).then((response) => {
      if(response) {
        for(let i = 0; i < response.length; i++) {
          this.courses.list.push(response[i])
          this.courses.list[i].img = response[i].photo
        }
      }
    })
    this.GET_VEBINAR_FROM_API(lang).then((response) => {
      if(response) {
        this.events.list = response.results
      }
    })
    this.GET_EVENT_FROM_API(lang).then((response) => {
      if(response) {
        this.calendarEvent.list = response.results
      }
    })
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