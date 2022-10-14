<template>
  <div class="about">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="about_poster">
        <img :src="poster.img" alt="img">
    </div>
    <div class="container">
        <div class="about_content">
            <h2 class="about_title">
                {{ aboutContent.title }}
            </h2>
            <div class="about_text" v-html="aboutContent.text">
            </div>
            <div class="about_brends">
                <img :src="aboutContent.bernds.img1" alt="img">
                <img :src="aboutContent.bernds.img2" alt="img">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import PosterContacts from '@/components/contacts/PosterContacts'
import InfoContact from '@/components/contacts/InfoContact'

export default {
  name: 'About',
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
                name: 'ПРОЕКТ'
            }
        ],
        poster: {
            img: require('../assets/img/about/project.png'),
        },
        aboutContent: {
            title: 'МЕДИЧНА ОСВІТНЯ ПЛАТФОРМА',
            text: '«ГІППОКРАТ» – сучасна електронна платформа післядипломної медичної освіти для лікарів, яка заснована ГО «Всеукраїнська асоціація безперервної професійної освіти лікарів і фармацевтів» та Національним університетом охорони здоров‘я України імені П.Л. Шупика. <br> Головна мета «Гіппократа» – підготовка фахівців у рамках безперервної післядипломної освіти лікарів і фармацевтів. <br> Багаторічний досвід співробітників Національного університету охорони здоров‘я України імені П.Л. Шупика та інших відомих викладачів медицини України, а також іноземних спеціалістів, знання новітніх технологій допоможе кожному лікарю шляхом активного самонавчання і самоосвіти досягти необхідного успіху і професійного рівня володіння знаннями і навичками, а отже – покращити якість надання медичної допомоги пацієнту. <br> Усі онлайн курси підготовлені на основі курсів тематичного удосконалення лікарів і передатестаційних циклів Національного університету охорони здоров‘я України імені П.Л. Шупика. <br> Наприкінці кожного курсу після успішного проходження тестування (не менше 80% правильних відповідей) будуть надіслані сертифікати Національного університету охорони здоров‘я України імені П.Л. Шупика та ГО «Всеукраїнська асоціація безперервної професійної освіти лікарів і фармацевтів» – від 1 до 2 балів.',
            bernds: {
                img1: require('../assets/img/about/logo1.png'),
                img2: require('../assets/img/about/logo2.png')
            }
        }
    }
  }
}
</script>
<style lang="scss" scoped>

.about {
    padding-top: desktop-vw(150);

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(32);
        line-height: 130%;
        /* identical to box height */
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(37);
    }

    &_text {
        color: #383838;
        line-height: 130%;
        font-size: desktop-vw(16);
    }

    &_content {
        padding: desktop-vw(50) 0;
    }

    &_poster {
        height: desktop-vw(300);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img {
            position: absolute;
            object-fit: contain;
        }
    }

    &_brends {
        padding: desktop-vw(50) 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        grid-gap: desktop-vw(20);
        width: 100%;

        img {
            // width: desktop-vw(400);
            // height: auto;
        }
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .about {
        padding-top: mobile-vw(40);

        &_title {
            font-style: normal;
            font-weight: 700;
            font-size: mobile-vw(32);
            line-height: 130%;
            /* identical to box height */
            text-align: center;
            text-transform: uppercase;
            color: #1FAEEA;
            margin-bottom: mobile-vw(37);
        }

        &_text {
            color: #383838;
            line-height: 130%;
            font-size: mobile-vw(16);
        }

        &_content {
            padding: mobile-vw(50) 0;
        }

        &_poster {
            height: mobile-vw(300);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            img {
                position: absolute;
                object-fit: contain;
            }
        }

        &_brends {
            padding: mobile-vw(50) 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            grid-gap: mobile-vw(20);
            width: 100%;

            img {
                width: 90%;
                // width: desktop-vw(400);
                // height: auto;
            }
        }
    }
}

</style>