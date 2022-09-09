<template>
  <div class="home">
    <Poster/> 
    <Instruction :content="instruction" />
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/Poster'
import Instruction from '@/components/Instruction'
export default {
  name: 'Home',
  components: {
    Poster,
    Instruction
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
