<template>
  <div class="home">
    <Poster/> 
    <Instruction :content="instruction" />
    <Events :content="events" />
    <Courses :content="courses" />
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/Poster'
import Instruction from '@/components/Instruction'
import Events from '@/components/Events'
import Courses from '@/components/Courses'
export default {
  name: 'Home',
  components: {
    Poster,
    Instruction,
    Events,
    Courses
  },
  data() {
    return {
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
