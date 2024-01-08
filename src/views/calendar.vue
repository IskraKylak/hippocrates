<template>
  <div class="calendarPage">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <CalendarEvent :content="calendarEvent" />
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import CalendarEvent from '@/components/CalendarEvent'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Calendar',
  components: {
    Breadcrumbs,
    CalendarEvent
  },
  data() {
    return {
        // breadcrumbs: [
        //     {
        //         name: 'Головна',
        //         link: `/${this.$i18n.locale}/`
        //     },
        //     {
        //         name: 'Календар'
        //     }
        // ],
        calendarEvent: {
            title: 'календар наукових заходів',
            list: [
                // {
                //     img: require('../assets/img/calendarImg.png'),
                //     data: '9.07 - 10.07',
                //     time: '17:00 - 19:00',
                //     location: 'Київ - Черкаси - Житомир',
                //     name: 'Кардіо-Метаболічна Академія, частина четверта.',
                //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......'
                // },
            ]
        }
    }
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
          {
              name: this.$t('breadcrumbs.home'),
              link: `/${this.$i18n.locale}/`
          },
          {
              name: this.$t('breadcrumbs.calendar'),
          },
      ]
      return breadcrumbs
    }
  },
  methods: {
    ...mapActions([
        'GET_EVENT_FROM_API'
    ]),
  },
  mounted() {
    this.GET_EVENT_FROM_API().then((response) => {
      if(response) {
        this.calendarEvent.list = response.results
      }
    })
  },
}
</script>
<style lang="scss" scoped>

.calendarPage {
    padding-top: desktop-vw(150);
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
}

</style>