<template>
  <div class="contacts">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <PosterContacts :content="poster" />
    <InfoContact :content="infoContact" />
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import PosterContacts from '@/components/contacts/PosterContacts'
import InfoContact from '@/components/contacts/InfoContact'
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'Contacts',
  components: {
    PosterContacts,
    Breadcrumbs,
    InfoContact
  },
  data() {
    return {
        // breadcrumbs: [
        //     {
        //         name: 'Головна',
        //         link: `/${this.$i18n.locale}/`
        //     },
        //     {
        //         name: 'Контакти'
        //     }
        // ],
        poster: {
            title: '',
            img: '',
        },
        infoContact: {
            title: '',
            text: '',
            tel: [],
            email: '',
            location: 'вул. Деміївська, 13, м. Київ',
            socTitle: 'Зв’язатися через соціальні мережі:',
            facebook_link: '',
            viber_link: '',
            telegram_link: ''
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
            name: this.$t('breadcrumbs.contact'),
        },
      ]
      return breadcrumbs
    }
  },
  methods: {
    ...mapActions([
        'GET_CONTACT_FROM_API'
    ]),
  },
  mounted() {
      this.GET_CONTACT_FROM_API().then((response) => {
        if(response) {
          this.poster.title = response.banner_title
          this.poster.img = response.banner
          this.infoContact.title = response.title
          this.infoContact.text = response.text
          this.infoContact.email = response.email
          this.infoContact.tel = response.phones.split('\r\n')
          this.infoContact.facebook_link = response.facebook_link
          this.infoContact.viber_link = response.viber_link
          this.infoContact.telegram_link = response.telegram_link
        }
      })
  }
}
</script>
<style lang="scss" scoped>

.contacts {
    padding-top: desktop-vw(150);
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
}

</style>