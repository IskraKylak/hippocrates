<template>
  <div class="footer">
    <div class="container">
      <div class="footer_content">
        <div class="footer_top">
          <div class="footer_logo">
            <router-link :to="`/${this.$i18n.locale}/`">
              <img src="@/assets/img/logoFooter.svg" alt="img">
            </router-link>
          </div>
          <div class="footer_wrapSoc">
            <a href="#" class="footer_email">
              {{ email }}
            </a>
            <div class="footer_listSoc">
              <a :href="soc.facebook_link" class="footer_fb"></a>
              <a :href="soc.viber_link" class="footer_viber"></a>
              <a :href="soc.telegram_link" class="footer_tg"></a>
            </div>
          </div>
          <div class="footerLocation">
            <a href="#" class="footer_location">
              {{ location }}
            </a>
          </div>
          <div class="footerTelefon">
            <div class="footer_listTel">
              <a href="#" class="footer_linkTel" v-for="(item, idx) in listTel" :key="idx">
                {{ item }}
              </a>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="footer_copirait">
            {{$t('footer.copirait')}}
          </div>
          <!-- <div class="footer_develop">
            {{ develop }}
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      email: '',
      location: 'вул. Деміївська, 13 м. Київ',
      listTel: [],
      soc: {
        facebook_link:'',
        viber_link:'',
        telegram_link:'',
      },
      copirait: '© ГО “Всеукраїнська асоціація безперервної професійної освіти лікарів і фармацевтів”. All Rights Reserved',
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
          this.email = response.email
          this.listTel = response.phones.split('\r\n')
          this.soc.facebook_link = response.facebook_link
          this.soc.viber_link = response.viber_link
          this.soc.telegram_link = response.telegram_link
        }
      })
  }
}
</script>

<style lang="scss">

.footer {
  background: #1FAEEA;

  &_content {
    padding: desktop-vw(30) 0;
  }

  &_top {
    display: flex;
    justify-content: space-between;
    grid-gap: desktop-vw(20);
  }

  &_bottom {
    margin-top: desktop-vw(30);
    display: flex;
    justify-content: space-between;
  }

  &_copirait,
  &_develop {
    font-style: normal;
    font-weight: 400;
    font-size: desktop-vw(14);
    line-height: 130%;
    /* identical to box height */
    color: #FFFFFF;
  }

  &_logo {
    max-width:  desktop-vw(200);
    width: 100%;
    img {
      width: 100%;
    }
  }

  &_wrapSoc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_email {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: desktop-vw(14);
    line-height: 130%;
    color: #FFFFFF;
    grid-gap: desktop-vw(10);
    text-decoration: none;

    &:before {
      content: "";
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.2573 7.89343L19.9998 12.1559V3.45093L13.2573 7.89343Z' fill='white'/%3e%3cpath d='M0 3.45093V12.1559L6.7425 7.89343L0 3.45093Z' fill='white'/%3e%3cpath d='M18.7501 0.916016H1.2501C0.626348 0.916016 0.131348 1.38102 0.0375977 1.97977L10.0001 8.54352L19.9626 1.97977C19.8688 1.38102 19.3738 0.916016 18.7501 0.916016Z' fill='white'/%3e%3cpath d='M12.1125 8.64847L10.3438 9.81347C10.2388 9.88222 10.12 9.91597 10 9.91597C9.88004 9.91597 9.76129 9.88222 9.65629 9.81347L7.88754 8.64722L0.0400391 13.611C0.136289 14.2047 0.628789 14.666 1.25004 14.666H18.75C19.3713 14.666 19.8638 14.2047 19.96 13.611L12.1125 8.64847Z' fill='white'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      display: block;
      max-width: desktop-vw(20);
      min-width: desktop-vw(20);
      height: desktop-vw(14);
    }
  }

  &_listSoc {
    display: flex;
    grid-gap: desktop-vw(20);
  }

  &_fb {
    &:before {
      content: "";
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_817_1233)'%3e%3cpath d='M18.8949 0.791992H1.10383C0.494616 0.791992 0 1.28562 0 1.89582V19.6868C0 20.297 0.494616 20.7913 1.10383 20.7913H10.682V13.0464H8.07587V10.0277H10.682V7.80157C10.682 5.21884 12.259 3.81172 14.5635 3.81172C15.6683 3.81172 16.6157 3.89437 16.892 3.93027V6.62991L15.2936 6.63057C14.0406 6.63057 13.7989 7.22628 13.7989 8.09993V10.0267H16.7883L16.3974 13.0451H13.7985V20.7903H18.8945C19.5044 20.7903 19.9993 20.2954 19.9993 19.6868V1.89516C19.999 1.28562 19.5047 0.791992 18.8949 0.791992Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_817_1233'%3e%3crect width='20' height='19.9997' fill='white' transform='translate(0 0.791016)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
      background-repeat: no-repeat;
      display: block;
      max-width: desktop-vw(20);
      min-width: desktop-vw(20);
      height: desktop-vw(20);
    }
  }

  &_viber {
    &:before {
      content: "";
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_817_1236)'%3e%3cpath d='M19.2959 12.3685C19.8926 7.34604 19.0092 4.1752 17.4159 2.74104L17.4167 2.7402C14.8451 0.291036 6.16007 -0.071464 3.0834 2.8502C1.70173 4.27937 1.21507 6.37687 1.16173 8.97354C1.1084 11.571 1.04507 16.4369 5.57923 17.7569H5.5834L5.57923 19.7727C5.57923 19.7727 5.5484 20.5894 6.07007 20.7535C6.66673 20.9469 6.93673 20.5677 8.79257 18.351C11.8959 18.6202 14.2792 18.0035 14.5501 17.9135C15.1767 17.7035 18.7226 17.2344 19.2959 12.3685ZM9.0984 16.9327C9.0984 16.9327 7.13423 19.3819 6.5234 20.0177C6.3234 20.2244 6.10423 20.2052 6.10757 19.7952C6.10757 19.526 6.12257 16.4485 6.12257 16.4485C2.2784 15.3469 2.50507 11.2035 2.54673 9.03604C2.5884 6.8677 2.98507 5.09187 4.15507 3.89604C6.85424 1.3652 14.4684 1.93104 16.4084 3.75437C18.7801 5.85687 17.9359 11.7969 17.9409 11.9994C17.4534 16.061 14.5801 16.3185 14.0517 16.4944C13.8259 16.5694 11.7301 17.1085 9.0984 16.9327Z' fill='white'/%3e%3cpath d='M10.185 4.37183C9.86413 4.37183 9.86413 4.87183 10.185 4.87599C12.6741 4.89516 14.7241 6.63016 14.7466 9.81266C14.7466 10.1485 15.2383 10.1443 15.2341 9.80849H15.2333C15.2066 6.37933 12.9683 4.39099 10.185 4.37183Z' fill='white'/%3e%3cpath d='M13.459 9.28521C13.4515 9.61688 13.9423 9.63271 13.9465 9.29688C13.9873 7.40605 12.8215 5.84855 10.6306 5.68438C10.3098 5.66105 10.2765 6.16521 10.5965 6.18855C12.4965 6.33271 13.4973 7.62938 13.459 9.28521Z' fill='white'/%3e%3cpath d='M12.934 11.436C12.5224 11.1977 12.1032 11.346 11.9299 11.5802L11.5674 12.0494C11.3832 12.2877 11.039 12.256 11.039 12.256C8.52736 11.5919 7.85569 8.96352 7.85569 8.96352C7.85569 8.96352 7.82486 8.60769 8.05486 8.41685L8.50819 8.04185C8.73486 7.86185 8.87819 7.42852 8.64736 7.00269C8.03069 5.88852 7.61652 5.50435 7.40569 5.20935C7.18402 4.93185 6.85069 4.86935 6.50402 5.05685H6.49652C5.77569 5.47852 4.98652 6.26769 5.23902 7.08019C5.66985 7.93685 6.46152 10.6677 8.98486 12.731C10.1707 13.7069 12.0474 14.7069 12.844 14.9377L12.8515 14.9494C13.6365 15.211 14.3999 14.391 14.8074 13.6485V13.6427C14.9882 13.2835 14.9282 12.9435 14.664 12.721C14.1957 12.2644 13.489 11.7602 12.934 11.436Z' fill='white'/%3e%3cpath d='M10.9741 7.54437C11.775 7.59104 12.1633 8.00938 12.2049 8.86855C12.2199 9.20438 12.7074 9.18105 12.6924 8.84521C12.6391 7.72354 12.0541 7.09854 11.0008 7.04021C10.68 7.02104 10.65 7.52521 10.9741 7.54437Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_817_1236'%3e%3crect width='20' height='20' fill='white' transform='translate(0 0.791016)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
      background-repeat: no-repeat;
      display: block;
      max-width: desktop-vw(20);
      min-width: desktop-vw(20);
      height: desktop-vw(20);
    }
  }

  &_tg {
    &:before {
      content: "";
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_859_351)'%3e%3cpath d='M11.7712 18.9761L11.275 25.9561C11.985 25.9561 12.2925 25.6511 12.6612 25.2849L15.99 22.1036L22.8875 27.1549C24.1525 27.8599 25.0437 27.4886 25.385 25.9911L29.9125 4.77615L29.9137 4.7749C30.315 2.9049 29.2375 2.17365 28.005 2.6324L1.39249 12.8211C-0.423756 13.5261 -0.396256 14.5386 1.08374 14.9974L7.88749 17.1136L23.6912 7.2249C24.435 6.7324 25.1112 7.0049 24.555 7.4974L11.7712 18.9761Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_859_351'%3e%3crect width='30' height='30' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e ");
      background-repeat: no-repeat;
      display: block;
      max-width: desktop-vw(20);
      min-width: desktop-vw(20);
      height: desktop-vw(20);
    }
  }

  .footerLocation {
    max-width: desktop-vw(142);
    width: 100%;
  }

  &_location {
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: desktop-vw(14);
    line-height: 130%;
    color: #FFFFFF;
    grid-gap: desktop-vw(10);
    text-decoration: none;

    &:before {
      content: "";
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_817_1225)'%3e%3cpath d='M16.6388 4.2684C15.1119 2.05863 12.6921 0.791016 10.0003 0.791016C7.30846 0.791016 4.88866 2.05863 3.36182 4.2684C1.84249 6.46699 1.49167 9.25047 2.42151 11.7096C2.67022 12.3812 3.06557 13.0337 3.59378 13.6451L9.46792 20.5448C9.60077 20.701 9.79542 20.791 10.0003 20.791C10.2052 20.791 10.3998 20.7011 10.5327 20.5448L16.4052 13.647C16.9357 13.032 17.3306 12.3803 17.5772 11.7141C18.5089 9.25047 18.1581 6.46699 16.6388 4.2684ZM16.2677 11.2243C16.0775 11.7383 15.767 12.2465 15.3453 12.7353C15.3441 12.7364 15.343 12.7376 15.342 12.739L10.0003 19.0132L4.6553 12.7351C4.23385 12.2467 3.92335 11.7386 3.73128 11.2197C2.96229 9.1859 3.25413 6.88449 4.51217 5.06375C5.77417 3.23719 7.77464 2.18961 10.0003 2.18961C12.2259 2.18961 14.2262 3.23715 15.4882 5.06375C16.7465 6.88449 17.0385 9.1859 16.2677 11.2243Z' fill='white'/%3e%3cpath d='M10.0001 4.94019C7.84086 4.94019 6.08398 6.69683 6.08398 8.85628C6.08398 11.0157 7.84063 12.7724 10.0001 12.7724C12.1595 12.7724 13.9162 11.0157 13.9162 8.85628C13.9162 6.69706 12.1593 4.94019 10.0001 4.94019Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_817_1225'%3e%3crect width='20' height='20' fill='white' transform='translate(0 0.791016)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
      background-repeat: no-repeat;
      display: block;
      max-width: desktop-vw(20);
      min-width: desktop-vw(20);
      height: desktop-vw(20);
    }
  }

  &_listTel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: desktop-vw(5) desktop-vw(20);
  }

  &_linkTel {
    font-style: normal;
    font-weight: 400;
    font-size: desktop-vw(14);
    line-height: 130%;
    color: #FFFFFF;
    text-decoration: none;
  }

  .footerTelefon {
    display: flex;
    grid-gap: desktop-vw(10);
    max-width: desktop-vw(316);
    width: 100%;

    &:before {
      content: "";
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_817_1199)'%3e%3cpath d='M17.6505 15.1039L15.655 13.7735L13.8811 12.5911C13.5387 12.3633 13.0786 12.438 12.8259 12.7624L11.7282 14.1735C11.4924 14.4797 11.0683 14.5677 10.7301 14.3805C9.98533 13.9662 9.10457 13.5761 7.16122 11.6303C5.21788 9.68443 4.82529 8.80616 4.41098 8.06135C4.22378 7.72322 4.31177 7.29907 4.61798 7.06331L6.0291 5.96564C6.35348 5.71294 6.42819 5.25286 6.20042 4.91047L5.05433 3.19118L3.68758 1.14103C3.45495 0.792071 2.98928 0.687307 2.62964 0.902988L1.05339 1.84861C0.627405 2.09959 0.314272 2.50486 0.178852 2.98042C-0.252194 4.55199 -0.339099 8.01881 5.21693 13.5748C10.773 19.1309 14.2395 19.0437 15.811 18.6126C16.2866 18.4772 16.6919 18.1641 16.9428 17.7381L17.8885 16.1619C18.1042 15.8022 17.9994 15.3365 17.6505 15.1039Z' fill='white'/%3e%3cpath d='M10.241 3.58406C13.1534 3.58729 15.5136 5.94744 15.5168 8.85986C15.5168 9.03124 15.6557 9.17021 15.8271 9.17021C15.9985 9.17021 16.1375 9.03128 16.1375 8.85986C16.1339 5.60481 13.4961 2.96696 10.241 2.96338C10.0696 2.96338 9.93066 3.10231 9.93066 3.27373C9.93063 3.44508 10.0696 3.58406 10.241 3.58406Z' fill='white'/%3e%3cpath d='M10.241 5.44615C12.1255 5.44837 13.6525 6.97547 13.6548 8.85989C13.6548 9.03127 13.7937 9.17025 13.9651 9.17025C14.1365 9.17025 14.2755 9.03131 14.2755 8.85989C14.2729 6.6328 12.4681 4.82801 10.241 4.82544C10.0696 4.82544 9.93066 4.96438 9.93066 5.1358C9.93066 5.30722 10.0696 5.44615 10.241 5.44615Z' fill='white'/%3e%3cpath d='M10.241 7.30818C11.0976 7.3092 11.7917 8.00331 11.7927 8.85989C11.7927 9.03127 11.9316 9.17024 12.103 9.17024C12.2744 9.17024 12.4134 9.03131 12.4134 8.85989C12.412 7.66068 11.4402 6.68887 10.241 6.6875C10.0696 6.6875 9.93066 6.82644 9.93066 6.99786C9.93063 7.16924 10.0696 7.30818 10.241 7.30818Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_817_1199'%3e%3crect width='18' height='18' fill='white' transform='translate(0 0.791016)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
      background-repeat: no-repeat;
      display: block;
      max-width: desktop-vw(20);
      min-width: desktop-vw(20);
      height: desktop-vw(20);
    }
  }

}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  .footer {
    &_content {
      padding: mobile-vw(30) 0;
    }
    &_top {
      grid-gap: 0;
      flex-direction: column;
      align-items: center;
    }

    &_bottom {
      margin-top: mobile-vw(30);
      flex-direction: column;
    }

    &_wrapSoc {
      flex-direction: column-reverse;
      margin-bottom: mobile-vw(20);
    }

    &_copirait,
    &_develop {
      font-size: mobile-vw(14);
      text-align: center;
    }

    &_copirait {
      margin-bottom: mobile-vw(20);
    }

    &_logo {
      max-width:  mobile-vw(200);
      margin-bottom: mobile-vw(30);
    }

    &_email {
      font-size: mobile-vw(14);
      grid-gap: mobile-vw(10);

      &:before {
        max-width: mobile-vw(20);
        min-width: mobile-vw(20);
        height: mobile-vw(14);
      }
    }

    &_listSoc {
      grid-gap: mobile-vw(20);
      justify-content: center;
      margin-bottom: mobile-vw(40);
    }

    &_fb {
      &:before {
        max-width: mobile-vw(30);
        min-width: mobile-vw(30);
        height: mobile-vw(30);
      }
    }

    &_viber {
      &:before {
        max-width: mobile-vw(30);
        min-width: mobile-vw(30);
        height: mobile-vw(30);
      }
    }

    &_tg {
      &:before {
        max-width: mobile-vw(30);
        min-width: mobile-vw(30);
        height: mobile-vw(30);
      }
    }

    .footerLocation {
      max-width: 100%;
      display: flex;
      justify-content: center;
    }

    &_location {
      font-size: mobile-vw(14);
      grid-gap: mobile-vw(10);

      &:before {
        max-width: mobile-vw(20);
        min-width: mobile-vw(20);
        height: mobile-vw(20);
      }
    }

    &_listTel {
      grid-gap: mobile-vw(5) mobile-vw(20);
    }

    &_linkTel {
      font-size: mobile-vw(14);
    }

    .footerTelefon {
      display: none;
      grid-gap: mobile-vw(10);
      max-width: mobile-vw(316);

      &:before {
        max-width: mobile-vw(20);
        min-width: mobile-vw(20);
        height: mobile-vw(20);
      }
    }

  }
}

</style>