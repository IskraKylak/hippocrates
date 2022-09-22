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

export default {
  name: 'Contacts',
  components: {
    PosterContacts,
    Breadcrumbs,
    InfoContact
  },
  data() {
    return {
        breadcrumbs: [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'Контакти'
            }
        ],
        poster: {
            title: 'Якщо виникли питання чи пропозиції щодо нашої освітньої програми, ми з радістю Вам допоможемо!',
            img: require('../assets/img/contacts/posterContact.png'),
        },
        infoContact: {
            title: 'Залишилися питання?',
            text: 'Скористайтеся формою зворотнього зв’язку, щоб наші спеціалісти Вам зателефонували, або зв’яжіться з нами одним із способів, що наведені нижче:',
            tel: [
                '+38 (073) 838-34-34',
                '+38 (073) 838-34-34',
                '+38 (073) 838-34-34',
                '+38 (073) 838-34-34',
                '+38 (073) 838-34-34',
                '+38 (073) 838-34-34'
            ],
            email: 'hippocrates@zdr.kiev.ua',
            location: 'вул. Деміївська, 13, м. Київ',
            socTitle: 'Зв’язатися через соціальні мережі:',
        }
    }
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