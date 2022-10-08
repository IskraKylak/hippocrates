<template>
    <div class="vebinarPage">
        <Breadcrumbs :content="breadcrumbs" /> 
        <div class="vebinarPage_content">
            <h2 class="vebinarPage_title">
                {{ title }}
            </h2>
        </div>
        <div class="vebinarPage_wrapVideo">
            <div id="stream-container">
                <!-- stream -->
                <div id="stream-embed-wrapper">
                    <iframe id="stream-embed-iframe" width="100%" height="100%" src="https://www.youtube.com/embed/dAv0Tyxu8-M" frameborder="0" allowfullscreen></iframe>
                </div>
                
                <!-- chat -->
                <div id="chat-embed-wrapper"></div>
                
                <div class="clear_both"></div>
            </div>
            <p class="vebinarPage_textVideo">
                {{ textVideo }}
            </p>
            <Button :btnClass="'btnLink'"> Аторизуйтесь </Button>
        </div>
        <div class="vebinarPage_spicers">
            <h2 class="vebinarPage_title">
                {{ titleSpikers }}
            </h2>
            <div class="vebinarPage_content">
                <p style='font-size:20px; color: #383838; font-weight: 700;'>Селюк Мар'яна Миколаївна</p>
                <p>кандидат медичних наук, професор кафедри терапії УВМА</p> 
                <p style='text-transform: uppercase; color: #1FAEEA; font-weight: 700;'>
                    «Силіконові гелі в профілактиці і лікуванні рубців. Практичне застосування в сімейній медицині»
                </p>
                <p style='text-transform: uppercase; color: #1FAEEA; font-weight: 700;'>
                    «Сучасні стандарти лікування інфекцій дихальних шляхів.
                    Комплекс діючих речовин рослинного походження і вітамінів -  перевірено часом.»
                </p>
                <p style='text-transform: uppercase; color: #1FAEEA; font-weight: 700;'>
                    «Спати мені не хочеться, І сон мене не бере…» Раціональний вибір препарату для усуненням стресових станів із супутніми порушеннями сну -  запорука ефективної роботи лікаря в сучасних умовах»
                </p>
                <br>
                <br>
                <p style='font-size:20px; color: #383838; font-weight: 700;'>Кочуєва Марина Миколаївна</p>
                <p>доктор медичних наук, професор, завідувач кафедри фтизіатрії, пульмонології та сімейної медицини ХМАПО</p> 
                <p style='text-transform: uppercase; color: #1FAEEA; font-weight: 700;'>
                    «Раціональний вибір терапевта для симптоматичної терапії захворювань верхніх дихальних шляхів»
                </p>
            </div>
        </div>
    </div>
    <div class="vebinarPage_surpriseWrap">
        <div class="vebinarPage_surprise">
            <div class="vebinarPage_surpriseTop">
                <div class="vebinarPage_surpriseLeft">
                    <p class="vebinarPage_surpriseText1">
                        {{ surprise.text1 }}
                    </p>
                    <p class="vebinarPage_surpriseText">
                        {{ surprise.text2 }}
                    </p>
                    <p class="vebinarPage_surpriseText2">
                        {{ surprise.text3 }}
                    </p>
                </div>
                <div class="vebinarPage_surpriseRight">
                    <div class="vebinarPage_wrapImg">
                        <img :src="surprise.img" alt="img"/>
                    </div>
                </div>
            </div>
            <div class="vebinarPage_surpriseBottom">
                <div class="vebinarPage_surpriseLeft">
                    <p class="vebinarPage_surpriseText3">
                        {{ terms.text1 }}
                    </p>
                    <p 
                        class="vebinarPage_surpriseText" 
                        v-for="(item, idx) in terms.list"
                        :key="idx"   
                        v-html="item"
                    >
                    </p>
                </div>
                <div class="vebinarPage_surpriseRight">
                    <p class="vebinarPage_surpriseText3">
                        {{ terms.attention.title }}
                    </p>
                    <p class="vebinarPage_surpriseText" v-html="terms.attention.text">
                    </p>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import Button from '@/components/UI/Controls/Button.vue'
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs,
    Button,
  },
  data() {
    return {
        title: this.$route.params.Pid,
        textVideo: 'Шановлі лікарі! Щоб мати змогу подивитися вебінар, ви маєте аторизуватися або зареєструватися на даному сайті',
        titleSpikers: 'Спікери',
        textSpikers: "",
        surprise: {
            text1: 'Шановні, лікарі!',
            text2: 'Сьогодні, під час прямого ефіру, буде проведено',
            text3: 'розіграш трьох смартфонів + 250 подарунків.',
            img: require('../assets/img/imageEvents2.png')
        },
        terms: {
            text1: 'Для участі у розіграші необхідно:',
            list: [
                '1) Зареєструватися на вебінарі',
                '2) Приєднатися до прослуховування вебінару <br> <span style="color: #9D1006; font-weight: 700; margin-left: 25px;">2 лютого о 16:00</span>',
                '3) І залишатися з нами протягом всього вебінару.'
            ],
            attention: { 
                title: 'Увага! У розіграші приймають участь лише лікарі України.',
                text: 'Повідомлення про перемогу прийде на пошту лікарю, та додатково буде опубліковано список переможців в соціальній мережі ФБ, на сторінці <a href="#" style="font-weight: 700; color: #1FAEEA; text-decoration: none;"  >https://www.facebook.com/hippocrates.org.ua</a>'
            }
        },
        breadcrumbs: [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'Вебінари'
            }
        ] 
    }
  },
  mounted() {
    const VIDEO_ID = "dAv0Tyxu8-M"; // for live chat
    /*
    code from:
    https://stackoverflow.com/questions/52468303/how-to-embed-youtube-livestream-chat
    */
    let chat_embed_wrapper = document.getElementById("chat-embed-wrapper");  
    let chat_embed_iframe = document.createElement("iframe");  
    chat_embed_iframe.referrerPolicy = "origin";  
    chat_embed_iframe.src = `https://www.youtube.com/live_chat?v=${VIDEO_ID}&embed_domain=${window.location.hostname}&dark_theme=1`;  
    chat_embed_iframe.frameBorder = "0";  
    chat_embed_iframe.id = "chat-embed-iframe";  
    chat_embed_iframe.style.height = "100%";
    chat_embed_iframe.style.width = "100%";
    chat_embed_wrapper.appendChild(chat_embed_iframe);

    let change_stream_embed_iframe_size = function(){
    let stream_container = document.getElementById("stream-container");
    let stream_embed_wrapper = document.getElementById("stream-embed-wrapper");
    let stream_embed_iframe = document.getElementById("stream-embed-iframe");

        if(typeof window.orientation !== 'undefined'){ //on phone
            chat_embed_wrapper.style.display = 'none';
            stream_embed_iframe.width = stream_container.clientWidth;
        }else{ // on pc (desktop browsers == 'undefined')
            stream_embed_iframe.width = stream_embed_wrapper.clientWidth;
        }
    };
    change_stream_embed_iframe_size();

    window.onresize = function(event) {
        //console.log("[window.onresize]");
        change_stream_embed_iframe_size();
    };
  }
}
</script>
<style lang="scss" scoped>

.vebinarPage {
    padding-top: desktop-vw(150);
    max-width: desktop-vw(950);
    width: 100%;
    margin: 0 auto;

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

    &_wrapVideo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &_textVideo {
        margin-bottom: desktop-vw(22);
    }

    &_spicers {
        padding: desktop-vw(62) 0 desktop-vw(89) 0;
    }

    &_content {

        p {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: desktop-vw(16);
            line-height: 130%;
            margin-bottom: desktop-vw(22);
        }
    }

    &_surpriseWrap {
        background: #F8F8F8;
        padding: desktop-vw(27) 0 desktop-vw(67) 0;
    }

    &_surprise {
        max-width: desktop-vw(950);
        margin: 0 auto;
    }

    &_wrapImg {
        position: relative;
        width: 100%;
        height: desktop-vw(231);
        max-width: desktop-vw(440);

        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: auto;
        }
    }

    &_surpriseTop {
        display: flex;
        justify-content: space-between;
        grid-gap: desktop-vw(50);
        margin-bottom: desktop-vw(40);
    }

    &_surpriseBottom {
        display: flex;
        justify-content: space-between;
        grid-gap: desktop-vw(50);
    }

    &_surpriseLeft {
        max-width: 50%;
        width: 100%;
    }

    &_surpriseRight {
        max-width: 50%;
        width: 100%;
    }

    &_surpriseText1 {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(18);
        line-height: 130%;
        color: #383838;
        margin-bottom: desktop-vw(20);
    }

    &_surpriseText {
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(16);
        line-height: 130%;
        color: #383838;
        margin-bottom: desktop-vw(16);

        span {
            color: #9D1006;
            font-weight: 700;
        }
    }

    &_surpriseText2 {
        font-style: italic;
        font-weight: 700;
        font-size:  desktop-vw(24);
        line-height: 150%;
        text-transform: uppercase;
        color: #A32118;
    }

    &_surpriseText3 {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(18);
        line-height: 150%;
        color: #1FAEEA;
        margin-bottom: desktop-vw(20);
    }
}


#stream-container {
    height: desktop-vw(377);
    display: flex;
    width: 100%;
    margin-bottom: desktop-vw(33);
}

#stream-embed-wrapper {
    flex: 1 1 auto;
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .vebinarPage {
        padding-top: mobile-vw(30);
        padding-bottom: mobile-vw(100);

        &_title {
            font-style: normal;
            font-size: mobile-vw(32);
            margin-bottom: mobile-vw(37);
        }
    }
}

</style>