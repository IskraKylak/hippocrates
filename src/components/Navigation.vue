<template>
  <div class="nav">
    <div class="container">
      <div class="nav_content">
        <div class="nav_left">
          <a href="#" class="nav_mail">
            {{ email }}
          </a>
          <div class="nav_wrapPhone"> 
            <div class="nav_phone" @click="active = !active">
              {{ phones[0] }}
            </div>
            <div class="nav_arrPhone" :class="{'active' : active}" @click="active = !active"></div>
            <div class="nav_wrapListPhone">
              <slide-up-down class="nav_listPhone" v-model="active" :duration="300">
                <div class="nav_listPhone">
                  <a :href="'tel:' + item" class="nav_itemPhone" v-for="(item, idx) in phones" :key="idx">
                    {{ item }}
                  </a>
                  <div class="pb"></div>
                </div>
              </slide-up-down>
            </div>
          </div>
          <div class="nav_time">
            {{$t('time')}}
          </div>
        </div>
        <div class="nav_soc">
          <a :href="soc.facebook_link" class="link_fb"></a>
          <a :href="soc.viber_link" class="link_viber"></a>
          <a :href="soc.telegram_link" class="link_tg"></a>
        </div>
        <div class="nav_right">
          <a href="#" class="nav_search" @click.prevent="activeSearch = !activeSearch" :class="{'close' : activeSearch}"></a>
          <div class="nav_wrapLang">
            <div class="nav_lang" @click="openLang = !openLang">
                {{ activeLang }}
            </div>
            <div class="nav_arrPhone" :class="{'active' : openLang}" @click="activeLang = !activeLang"></div>
            <div class="nav_wrapListLang">
              <slide-up-down class="nav_listPhone" v-model="openLang" :duration="300">
                <div class="nav_listLang">
                  <a href="#" v-for="(item, idx) in lang" :key="idx" @click="switchLang(item.slag)" class="nav_lang" >
                    {{ item.name }}
                  </a>
                </div>
              </slide-up-down>
            </div>
          </div>
        </div>
        <div v-if="tokkent === ''" class="loginMb" @click="openLogin()">
          {{$t('btns.Вхід')}}
        </div>
        <div class="wrap_user" v-else>
          <div class="nav_user">
            <div class="nav_userName" @click.prevent="openMenu, lcMenu = !lcMenu" :class="[lcMenu ? 'active' : '']">{{ ACC.first_name }} {{ ACC.last_name }}</div>
          </div>
          <div class="accPanel_menu" :class="[lcMenu ? 'active' : '']">
              <div class="accPanel_item" @click="redirect()">
                  {{$t('btns.Особистий_кабінет')}}
              </div>
              <div class="accPanel_item" @click="logout()">
                  {{$t('btns.Вихід')}}
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav_searchInput" v-if="activeSearch">
      <div class="container">
        <input type="text" v-model="search"  :placeholder="$t('register.palaceHolder.search')">
      </div>
    </div>
    <div class="nav_result" v-if="activeSearch && result.length > 0">
      <div class="container">
        <div class="nav_itemResult" v-for="(item, idx) in result" :key="idx">
          <div @click="goToCourse(item.id)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideUpDown from 'vue3-slide-up-down'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    SlideUpDown
  },
  data() {
    return {
      lcMenu: false,
      search: '',
      result: [],
      active: false,
      openLang: false,
      activeSearch: false,
      userName: 'Татьяна Мал',
      email: '',
      phones: [],
      soc: {
        facebook_link: '',
        viber_link: '',
        telegram_link: '',
      },
      lang: [
        {
          name: 'UA',
          slag: 'ua'
        },
        {
          name: 'RU',
          slag: 'ru'
        },
        {
          name: 'EN',
          slag: 'en'
        }]
    }
  },
  methods: {
    switchLang(lang) {
      this.$router.push({ params: { lang: lang } });
      localStorage.setItem('lang', lang);
      this.$i18n.locale = lang;
      this.openLang = false
      this.$emit('reloadCommponents')
    },
    redirect() {
        window.open(`https://hippocrates-fe.azurewebsites.net/another_domen_auth/${this.tokkent}`);
    },
    openLogin() {
        this.$router.push(`/${this.$i18n.locale}/login`)
    },
    async logout () {
        this.$store.dispatch('logout')
            .then(() => {
                this.$router.push(`/${this.$i18n.locale}/`)
            })
    },
    goToCourse(prodId) {
        this.activeSearch = false
        this.search = ''
        this.$router.push({
            name: 'courseSingle',
            params: { Pid2: prodId}
        }).catch({})
    },
    ...mapActions([
        'GET_CONTACT_FROM_API',
        'GET_SEARCH_FROM_API'
    ]),
  },
  computed: {
      tokkent() {
          return this.$store.getters.getToken
      },
      ...mapGetters([
        'ACC',
      ]),
      activeLang() {
        let lang = this.lang.find (item => item.slag == this.$i18n.locale)
        return lang.name
      }
  },   
  mounted() {
      let lang = "uk"
      if(this.$i18n.locale != 'ua')
        lang = this.$i18n.locale
      this.GET_CONTACT_FROM_API(lang).then((response) => {
        if(response) {
          this.email = response.email
          this.phones = response.phones.split('\r\n')
          this.soc.facebook_link = response.facebook_link
          this.soc.viber_link = response.viber_link
          this.soc.telegram_link = response.telegram_link
        }
      })
  },
  watch: {
    // whenever question changes, this function will run
    search(newSearch, oldSearch) {
      if (newSearch.length > 0 ) {
        this.result = []
        let obj = {
          search: newSearch,
          lang: "uk"
        }
        if(this.$i18n.locale != 'ua') {
          obj.lang = this.$i18n.locale
        }
        this.GET_SEARCH_FROM_API(obj).then((response) => {
            if(response.count != 0) {
              this.result = []
              // console.log(response.results)
              for(let i = 0; i < response.results.length; i++) {
                  this.result.push(response.results[i])
              }
            } else {
              this.result = []
            }
        })
      } else {
        this.result = []
      }
      // console.log('this.result', this.result)
    }
  }
}
</script>

<style lang="scss">
.loginMb {
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: desktop-vw(16);
  line-height: 130%;
  text-decoration: none;
  display: none;
}

.wrap_user {
  display: none;
  position: relative;
}

.accPanel_menu {
    display: none;
    position: absolute;
    top: desktop-vw(25);
    right: 0;
    background: #1FAEEA;
    box-shadow: 0px 4px 4px rgb(36 36 36 / 15%);
    border-radius: 5px;
    color: #fff;
    min-width: desktop-vw(180);
    padding: desktop-vw(10);
    flex-direction: column;
    grid-gap: desktop-vw(10);

    &.active {
        display: flex;
    }

    .accPanel_item {
        cursor: pointer;
    }
}

.pb {
  height: desktop-vw(5);
  width: 100%;
}

.nav {
  background: #1FAEEA;
  position: relative;
  z-index: 11;

  // &_user {
  //   display: none;
  //   position: relative;
  // }

  & > .container {
    position: relative;
    z-index: 11;
  }

  &_result {
    position: absolute;
    top: desktop-vw(100);
    left: 0;
    width: 100%;
    background: #f8f8f8;
    border-bottom: 2px solid #1FAEEA;
    padding: desktop-vw(5) 0;
    z-index: 10;
    max-height: 60vh;
    overflow: auto;
  }

  &_itemResult {
    border-bottom: 1px solid #DCDCDC;
    cursor: pointer;
    padding: desktop-vw(5);


    &:last-child {
      border-bottom: 0;
    }
  }

  &_searchInput {
    position: absolute;
    top: desktop-vw(50);
    left: 0;
    height: desktop-vw(50);
    width: 100%;
    background: #f8f8f8;
    border-bottom: 2px solid #1FAEEA;
    padding: desktop-vw(5) 0;
    z-index: 10;

    input {
      display: block;
      height: 100%;
      width: 100%;
      border: 0;
      // padding: 0 desktop-vw(10);
      background: #f8f8f8;
      outline: none;
      font-size: desktop-vw(16);

      &::placeholder {
        font-size: desktop-vw(16);
        color: #d5ced0;
      }
    }
  }

  &_wrapLang {
    padding-right: desktop-vw(15);
    position: relative;
  }

  &_listLang {
    display: flex;
    flex-direction: column;
    grid: desktop-vw(5);
  }

  &_wrapListLang {
    position: absolute;
    background: #1FAEEA;
    left: desktop-vw(-4);
    top: desktop-vw(22);
    border-radius: 5px;
  }

  &_content {
    padding: desktop-vw(5) 0;
    height: desktop-vw(50);
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: desktop-vw(20);
    width: 100%;
  }

  &_left {
    display: flex;
    align-items: center;
    grid-gap: desktop-vw(18);
    height: 100%;
  }

  &_right {
    display: flex;
    align-items: center;
    grid-gap: desktop-vw(18);
    height: 100%;
  }

  &_soc {
    display: flex;
    align-items: center;
    grid-gap: desktop-vw(20);
  }

  &_wrapPhone {
    position: relative;
    padding-right: desktop-vw(20);
  }

  &_arrPhone {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5 6L0.669873 0.75L9.33013 0.750001L5 6Z' fill='white'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    width: desktop-vw(10);
    height: desktop-vw(6);
    position: absolute;
    right: 0;
    top: desktop-vw(7);
    cursor: pointer;

    &.active {
      transform: rotate(180deg)
    }
    
  }

  &_wrapListPhone {
    position: absolute;
    right: desktop-vw(10);
    top: desktop-vw(25);
  }

  &_listPhone {
    display: flex;
    flex-direction: column;
    background: #1FAEEA;
    padding: 0 desktop-vw(5);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    grid-gap: desktop-vw(5);
  }

  &_mail,
  &_phone,
  &_time,
  &_lang,
  &_itemPhone,
  &_userName  {
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: desktop-vw(16);
    line-height: 130%;
    text-decoration: none;
  }

  &_lang {
    cursor: pointer;
  }

  &_time {
    margin-left: desktop-vw(10);
  }

  &_mail {
    display: flex;
    align-items: center;
    grid-gap: desktop-vw(12);
    

    &:before {
      content: "";
      display: block;
      width: desktop-vw(20);
      height: desktop-vw(20);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.2573 10.1025L19.9998 14.365V5.66003L13.2573 10.1025Z' fill='white'/%3e%3cpath d='M0 5.66003V14.365L6.7425 10.1025L0 5.66003Z' fill='white'/%3e%3cpath d='M18.7501 3.125H1.2501C0.626348 3.125 0.131348 3.59 0.0375977 4.18875L10.0001 10.7525L19.9626 4.18875C19.8688 3.59 19.3738 3.125 18.7501 3.125Z' fill='white'/%3e%3cpath d='M12.1125 10.8575L10.3438 12.0225C10.2388 12.0912 10.12 12.125 10 12.125C9.88004 12.125 9.76129 12.0912 9.65629 12.0225L7.88754 10.8562L0.0400391 15.82C0.136289 16.4137 0.628789 16.875 1.25004 16.875H18.75C19.3713 16.875 19.8638 16.4137 19.96 15.82L12.1125 10.8575Z' fill='white'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
    }
  }

  &_phone {
    display: flex;
    align-items: center;
    grid-gap: desktop-vw(12);
    cursor: pointer;

    &:before {
      content: "";
      display: block;
      width: desktop-vw(20);
      height: desktop-vw(20);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.6505 14.3129L15.655 12.9825L13.8811 11.8001C13.5387 11.5723 13.0786 11.647 12.8259 11.9714L11.7282 13.3825C11.4924 13.6887 11.0683 13.7767 10.7301 13.5895C9.98533 13.1752 9.10457 12.7851 7.16122 10.8393C5.21788 8.89341 4.82529 8.01515 4.41098 7.27033C4.22378 6.93221 4.31177 6.50805 4.61798 6.2723L6.0291 5.17462C6.35348 4.92192 6.42819 4.46184 6.20042 4.11946L5.05433 2.40016L3.68758 0.350012C3.45495 0.0010554 2.98928 -0.103709 2.62964 0.111972L1.05339 1.05759C0.627405 1.30857 0.314272 1.71385 0.178852 2.1894C-0.252194 3.76097 -0.339099 7.2278 5.21693 12.7838C10.773 18.3399 14.2395 18.2527 15.811 17.8216C16.2866 17.6862 16.6919 17.3731 16.9428 16.9471L17.8885 15.3708C18.1042 15.0112 17.9994 14.5455 17.6505 14.3129Z' fill='white'/%3e%3cpath d='M10.241 2.79304C13.1534 2.79627 15.5136 5.15643 15.5168 8.06884C15.5168 8.24023 15.6557 8.3792 15.8271 8.3792C15.9985 8.3792 16.1375 8.24026 16.1375 8.06884C16.1339 4.8138 13.4961 2.17595 10.241 2.17236C10.0696 2.17236 9.93066 2.3113 9.93066 2.48272C9.93063 2.65407 10.0696 2.79304 10.241 2.79304Z' fill='white'/%3e%3cpath d='M10.241 4.65514C12.1255 4.65735 13.6525 6.18445 13.6548 8.06887C13.6548 8.24026 13.7937 8.37923 13.9651 8.37923C14.1365 8.37923 14.2755 8.24029 14.2755 8.06887C14.2729 5.84179 12.4681 4.03699 10.241 4.03442C10.0696 4.03442 9.93066 4.17336 9.93066 4.34478C9.93066 4.5162 10.0696 4.65514 10.241 4.65514Z' fill='white'/%3e%3cpath d='M10.241 6.51716C11.0976 6.51818 11.7917 7.2123 11.7927 8.06887C11.7927 8.24025 11.9316 8.37923 12.103 8.37923C12.2744 8.37923 12.4134 8.24029 12.4134 8.06887C12.412 6.86967 11.4402 5.89786 10.241 5.89648C10.0696 5.89648 9.93066 6.03542 9.93066 6.20684C9.93063 6.37822 10.0696 6.51716 10.241 6.51716Z' fill='white'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
    }
  }

  &_search {
    padding-right: desktop-vw(20);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    height: 100%;
    display: flex;
    align-items: center;

    &:before {
      content: "";
      display: block;
      width: desktop-vw(18);
      height: desktop-vw(18);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.8901 16.8296L12.6613 11.6007C13.653 10.3764 14.25 8.81977 14.25 7.12503C14.25 3.19631 11.0537 0 7.12499 0C3.19627 0 0 3.19631 0 7.12503C0 11.0537 3.19631 14.2501 7.12503 14.2501C8.81977 14.2501 10.3764 13.653 11.6007 12.6613L16.8296 17.8902C16.9761 18.0366 17.2135 18.0366 17.36 17.8902L17.8902 17.3599C18.0366 17.2135 18.0366 16.976 17.8901 16.8296ZM7.12503 12.75C4.02322 12.75 1.50001 10.2268 1.50001 7.12503C1.50001 4.02322 4.02322 1.50001 7.12503 1.50001C10.2268 1.50001 12.75 4.02322 12.75 7.12503C12.75 10.2268 10.2268 12.75 7.12503 12.75Z' fill='white'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
    }

    &.close {
      &:before {
        content: "";
        display: block;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.466 8.013l6.23-6.23A1.035 1.035 0 1014.23.317L8 6.547 1.77.317A1.036 1.036 0 10.304 1.783l6.23 6.23-6.23 6.23A1.035 1.035 0 101.77 15.71L8 9.48l6.23 6.23a1.034 1.034 0 001.466 0 1.035 1.035 0 000-1.466l-6.23-6.23z' fill='%23fff'%3e%3c/path%3e%3c/svg%3e");
        width: desktop-vw(18);
        height: desktop-vw(18);
        background-repeat: no-repeat;
      }
      
    }
  }

}

.link {
  &_fb:before {
    content: "";
    display: block;
    width: desktop-vw(20);
    height: desktop-vw(20);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.8949 0.000976562H1.10383C0.494616 0.000976562 0 0.494604 0 1.10481V18.8958C0 19.506 0.494616 20.0003 1.10383 20.0003H10.682V12.2554H8.07587V9.23666H10.682V7.01056C10.682 4.42782 12.259 3.0207 14.5635 3.0207C15.6683 3.0207 16.6157 3.10336 16.892 3.13925V5.83889L15.2936 5.83955C14.0406 5.83955 13.7989 6.43526 13.7989 7.30891V9.23567H16.7883L16.3974 12.2541H13.7985V19.9993H18.8945C19.5044 19.9993 19.9993 19.5044 19.9993 18.8958V1.10415C19.999 0.494605 19.5047 0.000976562 18.8949 0.000976562Z' fill='white'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
  }

  &_viber:before {
    content: "";
    display: block;
    width: desktop-vw(20);
    height: desktop-vw(20);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_702_920)'%3e%3cpath d='M19.2959 11.5775C19.8926 6.55502 19.0092 3.38419 17.4159 1.95002L17.4167 1.94919C14.8451 -0.499979 6.16007 -0.86248 3.0834 2.05919C1.70173 3.48835 1.21507 5.58585 1.16173 8.18252C1.1084 10.78 1.04507 15.6459 5.57923 16.9659H5.5834L5.57923 18.9817C5.57923 18.9817 5.5484 19.7984 6.07007 19.9625C6.66673 20.1559 6.93673 19.7767 8.79257 17.56C11.8959 17.8292 14.2792 17.2125 14.5501 17.1225C15.1767 16.9125 18.7226 16.4434 19.2959 11.5775ZM9.0984 16.1417C9.0984 16.1417 7.13423 18.5909 6.5234 19.2267C6.3234 19.4334 6.10423 19.4142 6.10757 19.0042C6.10757 18.735 6.12257 15.6575 6.12257 15.6575C2.2784 14.5559 2.50507 10.4125 2.54673 8.24502C2.5884 6.07669 2.98507 4.30085 4.15507 3.10502C6.85424 0.574187 14.4684 1.14002 16.4084 2.96335C18.7801 5.06585 17.9359 11.0059 17.9409 11.2084C17.4534 15.27 14.5801 15.5275 14.0517 15.7034C13.8259 15.7784 11.7301 16.3175 9.0984 16.1417Z' fill='white'/%3e%3cpath d='M10.185 3.58081C9.86413 3.58081 9.86413 4.08081 10.185 4.08498C12.6741 4.10414 14.7241 5.83914 14.7466 9.02164C14.7466 9.35748 15.2383 9.35331 15.2341 9.01748H15.2333C15.2066 5.58831 12.9683 3.59998 10.185 3.58081Z' fill='white'/%3e%3cpath d='M13.459 8.4942C13.4515 8.82586 13.9423 8.8417 13.9465 8.50586C13.9873 6.61503 12.8215 5.05753 10.6306 4.89336C10.3098 4.87003 10.2765 5.3742 10.5965 5.39753C12.4965 5.5417 13.4973 6.83836 13.459 8.4942Z' fill='white'/%3e%3cpath d='M12.934 10.645C12.5224 10.4067 12.1032 10.555 11.9299 10.7892L11.5674 11.2583C11.3832 11.4967 11.039 11.465 11.039 11.465C8.52736 10.8008 7.85569 8.17251 7.85569 8.17251C7.85569 8.17251 7.82486 7.81667 8.05486 7.62584L8.50819 7.25084C8.73486 7.07084 8.87819 6.63751 8.64736 6.21167C8.03069 5.09751 7.61652 4.71334 7.40569 4.41834C7.18402 4.14084 6.85069 4.07834 6.50402 4.26584H6.49652C5.77569 4.68751 4.98652 5.47667 5.23902 6.28917C5.66985 7.14584 6.46152 9.87667 8.98486 11.94C10.1707 12.9158 12.0474 13.9158 12.844 14.1467L12.8515 14.1583C13.6365 14.42 14.3999 13.6 14.8074 12.8575V12.8517C14.9882 12.4925 14.9282 12.1525 14.664 11.93C14.1957 11.4733 13.489 10.9692 12.934 10.645Z' fill='white'/%3e%3cpath d='M10.9741 6.75336C11.775 6.80003 12.1633 7.21836 12.2049 8.07753C12.2199 8.41336 12.7074 8.39003 12.6924 8.0542C12.6391 6.93253 12.0541 6.30752 11.0008 6.24919C10.68 6.23002 10.65 6.73419 10.9741 6.75336Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_702_920'%3e%3crect width='20' height='20' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
  }

  &_tg:before {
    content: "";
    display: block;
    width: desktop-vw(20);
    height: desktop-vw(20);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_702_926)'%3e%3cpath d='M7.84764 12.6508L7.51681 17.3041C7.99014 17.3041 8.19514 17.1008 8.44098 16.8566L10.6601 14.7358L15.2585 18.1033C16.1018 18.5733 16.696 18.3258 16.9235 17.3274L19.9418 3.1841L19.9426 3.18326C20.2101 1.9366 19.4918 1.4491 18.6701 1.75493L0.928481 8.54743C-0.282352 9.01743 -0.264018 9.69243 0.722648 9.99826L5.25848 11.4091L15.7943 4.8166C16.2901 4.48826 16.741 4.66993 16.3701 4.99826L7.84764 12.6508Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_702_926'%3e%3crect width='20' height='20' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
  }


}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {

  .loginMb {
    font-size: mobile-vw(16);
    display: block;
  }

  .accPanel_menu {
    top: mobile-vw(25);
    min-width: mobile-vw(180);
    padding: mobile-vw(10);
    grid-gap: mobile-vw(10);
    font-size: mobile-vw(16);

    .accPanel_item {
        cursor: pointer;
        font-size: mobile-vw(16);
    }
  }

  .pb {
    height: mobile-vw(5);
  }

  .wrap_user {
    display: block;
    position: relative;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    &_user {
      position: relative;
      padding: 0 mobile-vw(20) 0 0;
      display: flex;

      &:before {
        content: '';
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z' fill='white'/%3e%3c/svg%3e");
        display: block;
        background-repeat: no-repeat;
        max-width: mobile-vw(20);
        min-width: mobile-vw(20);
        height: mobile-vw(20);
        margin-right: mobile-vw(5);
      }
    }

    &_userName {
      color: #fff;
    }

    &_userName {
      position: relative;
      padding-right: mobile-vw(16);

      &:after {
          content: "";
          display: block;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5 6L0.669873 0.75L9.33013 0.750001L5 6Z' fill='white'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          width: mobile-vw(10);
          height: mobile-vw(6);
          position: absolute;
          right: 0;
          top: mobile-vw(7);
          cursor: pointer;
      }

      &.active {
          &:after {
              transform: rotate(180deg)
          }
      }
    }

    &_itemResult {
      padding: mobile-vw(5);
    }

    &_result {
      top: mobile-vw(100);
      padding: mobile-vw(5) 0;
    }

    &_searchInput {
      top: mobile-vw(50);
      left: 0;
      height: mobile-vw(50);
      padding: mobile-vw(5) 0;

      input {
        font-size: mobile-vw(16);

        &::placeholder {
          font-size: mobile-vw(16);
        }
      }
    }

    &_wrapLang {
      padding-right: mobile-vw(15);
    }

    &_listLang {
      grid: mobile-vw(5);
    }

    &_wrapListLang {
      left: mobile-vw(-4);
      top: mobile-vw(22);
    }

    &_content {
      padding: mobile-vw(5) 0;
      height: mobile-vw(50);
      grid-gap: mobile-vw(20);
    }

    &_left {
      grid-gap: mobile-vw(18);
      display: none;
    }

    &_right {
      grid-gap: mobile-vw(18);
    }

    &_soc {
      grid-gap: mobile-vw(20);
      display: none;
    }

    &_wrapPhone {
      padding-right: mobile-vw(20);
    }

    &_arrPhone {
      width: mobile-vw(10);
      height: mobile-vw(6);
      top: mobile-vw(7);    
    }

    &_wrapListPhone {
      right: mobile-vw(10);
      top: mobile-vw(25);
    }

    &_listPhone {
      padding: 0 mobile-vw(5);
      grid-gap: mobile-vw(5);
    }

    &_mail,
    &_phone,
    &_time,
    &_lang,
    &_itemPhone,
    &_userName  {
      font-size: mobile-vw(16);
    }

    &_time {
      margin-left: mobile-vw(10);
    }

    &_mail {
      grid-gap: mobile-vw(12);
      

      &:before {
        width: mobile-vw(20);
        height: mobile-vw(20);
      }
    }

    &_phone {
      grid-gap: mobile-vw(12);

      &:before {
        width: mobile-vw(20);
        height: mobile-vw(20);
      }
    }

    &_search {
      padding-right: mobile-vw(20);

      &:before {
        content: "";
        display: block;
        width: mobile-vw(18);
        height: mobile-vw(18);
      }

      &.close {
        &:before {
          width: mobile-vw(18);
          height: mobile-vw(18);
        }
        
      }
    }

  }

  .link {
    &_fb:before {
      width: mobile-vw(20);
      height: mobile-vw(20);
    }

    &_viber:before {
      width: mobile-vw(20);
      height: mobile-vw(20);
    }

    &_tg:before {
      width: mobile-vw(20);
      height: mobile-vw(20);
    }


  }

}
</style>