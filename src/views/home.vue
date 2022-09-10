<template>
  <div class="home">
    <Poster/> 
    <Instruction :content="instruction" />
    <Events :content="events" />
    <Courses :content="courses" />
    <CalendarEvent :content="calendarevent" />
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/Poster'
import Instruction from '@/components/Instruction'
import Events from '@/components/Events'
import Courses from '@/components/Courses'
import CalendarEvent from '@/components/CalendarEvent'
export default {
  name: 'Home',
  components: {
    Poster,
    Instruction,
    Events,
    Courses,
    CalendarEvent
  },
  data() {
    return {
      calendarevent: {
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
      },
      instruction: {
        title: 'як користуватися платформою гіппократ',
        btn: 'Особистий кабінет',
        list: [
          {
            video: '',
            title: 'підвищуйте свою професійну кваліфікацію',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque.'
          },
          {
            video: '',
            title: 'як зареєструватися на обраний курс?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris.'
          },
          {
            video: '',
            title: 'освітнє портфоліо - що це?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris.'
          }
        ]
        
      }
    }
  }
}
</script>
