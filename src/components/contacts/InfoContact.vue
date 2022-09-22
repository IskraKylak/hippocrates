<template>
    <div class="container">
        <div class="infoContact">
            <div class="infoContact_left">
                <div class="infoContact_title">
                    {{ content.title }}
                </div>
                <div class="infoContact_text">
                    {{ content.text }}
                </div>
                <div class="infoContact_telList">
                    <a :href="'tel:' + item" class="infoContact_tel"  v-for="(item, idx) in content.tel" :key="idx">
                        {{ item }}
                    </a>
                </div>
                <div class="infoContact_wrapLocation">
                    <a href="" class="infoContact_email"> {{ content.email }}</a>
                    <a href="" class="infoContact_location"> {{ content.location }}</a>
                </div>
                <div class="infoContact_wrapSoc">
                    <div class="infoContact_wrapSoc_title">
                        {{ content.socTitle }}
                    </div>
                    <div class="infoContact_listSoc">
                        <a href="#" class="infoContact_fb"></a>
                        <a href="#" class="infoContact_vb"></a>
                        <a href="#" class="infoContact_tg"></a>
                    </div>
                </div>
            </div>
            <Feedback />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Feedback from '@/components/app/Feedback.vue'
export default {
  props: ['content'],
  components: {
        Feedback
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>

.infoContact {
     padding: desktop-vw(50) 0 desktop-vw(109) 0;
     display: flex;
     justify-content: space-between;
     grid-gap: desktop-vw(50);

     &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(24);
        line-height: 130%;
        /* identical to box height */
        color: #1FAEEA;
        margin-bottom: desktop-vw(20);
     }

     &_text {
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(16);
        line-height: 130%;
        color: #383838;
        margin-bottom: desktop-vw(50);
     }

     &_telList {
        display: grid;
        width: max-content;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: desktop-vw(10) desktop-vw(30);
        padding: 0 0 0 desktop-vw(38);
        position: relative;
        margin-bottom: desktop-vw(50);

        &:before {
            content: "";
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_8_161)'%3e%3cpath d='M19.6116 15.9032L17.3944 14.425L15.4233 13.1112C15.043 12.8581 14.5317 12.9411 14.2509 13.3015L13.0313 14.8694C12.7693 15.2097 12.298 15.3074 11.9223 15.0994C11.0948 14.6391 10.1161 14.2057 7.95686 12.0436C5.79759 9.88157 5.36138 8.90572 4.90104 8.07815C4.69303 7.70245 4.7908 7.23117 5.13104 6.96922L6.69895 5.74958C7.05937 5.4688 7.14238 4.9576 6.8893 4.57717L5.61587 2.66685L4.09726 0.388903C3.83878 0.00117267 3.32137 -0.115232 2.92176 0.124413L1.17038 1.1751C0.697063 1.45397 0.349137 1.90428 0.19867 2.43267C-0.28027 4.17886 -0.376831 8.03088 5.79654 14.2042C11.9699 20.3776 15.8216 20.2807 17.5678 19.8018C18.0962 19.6513 18.5465 19.3034 18.8253 18.8301L19.876 17.0787C20.1157 16.6791 19.9993 16.1617 19.6116 15.9032Z' fill='%238BCD20'/%3e%3cpath d='M11.3791 3.10334C14.6151 3.10693 17.2375 5.72932 17.2411 8.96534C17.2411 9.15577 17.3955 9.31018 17.5859 9.31018C17.7764 9.31018 17.9308 9.15581 17.9308 8.96534C17.9268 5.34862 14.9959 2.41768 11.3791 2.4137C11.1887 2.4137 11.0343 2.56807 11.0343 2.75854C11.0343 2.94892 11.1886 3.10334 11.3791 3.10334Z' fill='%238BCD20'/%3e%3cpath d='M11.3791 5.17235C13.473 5.17481 15.1697 6.87158 15.1722 8.96539C15.1722 9.15582 15.3266 9.31023 15.517 9.31023C15.7074 9.31023 15.8619 9.15585 15.8619 8.96539C15.859 6.49085 13.8537 4.48552 11.3791 4.48267C11.1887 4.48267 11.0343 4.63704 11.0343 4.82751C11.0343 5.01797 11.1887 5.17235 11.3791 5.17235Z' fill='%238BCD20'/%3e%3cpath d='M11.3791 7.24128C12.3308 7.24241 13.1021 8.01365 13.1032 8.9654C13.1032 9.15582 13.2576 9.31024 13.4481 9.31024C13.6385 9.31024 13.7929 9.15586 13.7929 8.9654C13.7914 7.63295 12.7116 6.55316 11.3791 6.55164C11.1887 6.55164 11.0343 6.70601 11.0343 6.89648C11.0343 7.0869 11.1886 7.24128 11.3791 7.24128Z' fill='%238BCD20'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_8_161'%3e%3crect width='20' height='20' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: block;
            max-width: desktop-vw(20);
            min-width: desktop-vw(20);
            height: desktop-vw(20);
            position: absolute;
            top: 0;
            left: 0;
        }
     }

     &_tel {
        width: max-content;
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(16);
        line-height: 130%;
        /* identical to box height */
        color: #1FAEEA;
        text-decoration: none;
     }

     &_wrapLocation {
        display: flex;
        grid-gap: desktop-vw(54);
        margin-bottom: desktop-vw(29);
     }

     &_email,
     &_location {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(16);
        line-height: 130%;
        color: #383838;
        display: flex;
        grid-gap: desktop-vw(18);
        text-decoration: none;
     }

     &_email {
        &:before {
            content: "";
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.2575 10.1025L20 14.365V5.65997L13.2575 10.1025Z' fill='%238BCD20'/%3e%3cpath d='M0 5.65997V14.365L6.7425 10.1025L0 5.65997Z' fill='%238BCD20'/%3e%3cpath d='M18.75 3.125H1.24998C0.626226 3.125 0.131226 3.59 0.0374756 4.18875L9.99998 10.7525L19.9625 4.18875C19.8687 3.59 19.3737 3.125 18.75 3.125Z' fill='%238BCD20'/%3e%3cpath d='M12.1125 10.8575L10.3438 12.0225C10.2388 12.0912 10.12 12.125 10 12.125C9.88004 12.125 9.76129 12.0912 9.65629 12.0225L7.88754 10.8562L0.0400391 15.82C0.136289 16.4137 0.628789 16.875 1.25004 16.875H18.75C19.3713 16.875 19.8638 16.4137 19.96 15.82L12.1125 10.8575Z' fill='%238BCD20'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: block;
            max-width: desktop-vw(20);
            min-width: desktop-vw(20);
            height: desktop-vw(20);
        }
     }

     &_location {
        max-width: desktop-vw(260);

        &:before {
            content: "";
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M16.6387 3.47738C15.1118 1.26762 12.692 0 10.0002 0C7.30834 0 4.88854 1.26762 3.3617 3.47738C1.84236 5.67598 1.49154 8.45945 2.42139 10.9186C2.6701 11.5902 3.06545 12.2427 3.59365 12.8541L9.4678 19.7538C9.60065 19.91 9.7953 20 10.0002 20C10.2051 20 10.3997 19.91 10.5326 19.7538L16.4051 12.8559C16.9356 12.241 17.3305 11.5893 17.5771 10.9231C18.5088 8.45945 18.158 5.67598 16.6387 3.47738ZM16.2676 10.4333C16.0774 10.9473 15.7669 11.4555 15.3452 11.9443C15.344 11.9454 15.3428 11.9466 15.3419 11.948L10.0002 18.2221L4.65518 11.9441C4.23373 11.4557 3.92322 10.9476 3.73115 10.4287C2.96217 8.39488 3.25401 6.09348 4.51205 4.27273C5.77404 2.44617 7.77451 1.39859 10.0002 1.39859C12.2258 1.39859 14.226 2.44613 15.4881 4.27273C16.7464 6.09348 17.0384 8.39488 16.2676 10.4333Z' fill='%238BCD20'/%3e%3cpath d='M10.0002 4.14917C7.84098 4.14917 6.08411 5.90581 6.08411 8.06526C6.08411 10.2247 7.84075 11.9814 10.0002 11.9814C12.1597 11.9814 13.9163 10.2247 13.9163 8.06526C13.9163 5.90604 12.1594 4.14917 10.0002 4.14917Z' fill='%238BCD20'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: block;
            max-width: desktop-vw(20);
            min-width: desktop-vw(20);
            height: desktop-vw(20);
        }
     }

     &_wrapSoc_title {
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(16);
        line-height: 130%;
        /* identical to box height */
        color: #383838;
        margin-bottom: desktop-vw(20);
     }

     &_listSoc {
        display: flex;
        grid-gap: desktop-vw(26);
     }

     &_fb {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_8_182)'%3e%3cpath d='M25.508 0.000976562H1.49017C0.667731 0.000976562 0 0.667385 0 1.49117V25.5094C0 26.3332 0.667731 27.0005 1.49017 27.0005H14.4207V16.5447H10.9024V12.4694H14.4207V9.46407C14.4207 5.97732 16.5497 4.07767 19.6607 4.07767C21.1522 4.07767 22.4312 4.18926 22.8042 4.23772V7.88229L20.6463 7.88318C18.9548 7.88318 18.6285 8.68741 18.6285 9.86685V12.468H22.6642L22.1365 16.5429H18.628V26.9992H25.5076C26.3309 26.9992 26.9991 26.331 26.9991 25.5094V1.49028C26.9987 0.667385 26.3314 0.000976562 25.508 0.000976562Z' fill='%233B5998'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_8_182'%3e%3crect width='27' height='27' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: no-repeat;
        display: block;
        max-width: desktop-vw(27);
        min-width: desktop-vw(27);
        height: desktop-vw(27);
     }

     &_vb {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_8_185)'%3e%3cpath d='M26.0494 15.6302C26.8549 8.84983 25.6624 4.5692 23.5114 2.63308L23.5125 2.63195C20.0408 -0.674423 8.31603 -1.1638 4.16253 2.78045C2.29728 4.70983 1.64028 7.54145 1.56828 11.047C1.49628 14.5536 1.41078 21.1225 7.53191 22.9045H7.53753L7.53191 25.6258C7.53191 25.6258 7.49028 26.7283 8.19453 26.95C9.00003 27.211 9.36453 26.6991 11.8699 23.7066C16.0594 24.07 19.2769 23.2375 19.6425 23.116C20.4885 22.8325 25.2754 22.1991 26.0494 15.6302ZM12.2828 21.7918C12.2828 21.7918 9.63116 25.0982 8.80653 25.9566C8.53653 26.2356 8.24066 26.2097 8.24516 25.6562C8.24516 25.2928 8.26541 21.1382 8.26541 21.1382C3.07578 19.651 3.38178 14.0575 3.43803 11.1313C3.49428 8.20408 4.02978 5.8067 5.60928 4.19233C9.25316 0.775702 19.5323 1.53958 22.1513 4.00108C25.353 6.83945 24.2134 14.8585 24.2202 15.1318C23.562 20.6151 19.683 20.9627 18.9698 21.2001C18.6649 21.3013 15.8355 22.0292 12.2828 21.7918Z' fill='%238E24AA'/%3e%3cpath d='M13.7497 4.83417C13.3166 4.83417 13.3166 5.50917 13.7497 5.51479C17.1101 5.54067 19.8776 7.88292 19.9079 12.1793C19.9079 12.6327 20.5717 12.627 20.5661 12.1737H20.5649C20.5289 7.54429 17.5072 4.86004 13.7497 4.83417Z' fill='%238E24AA'/%3e%3cpath d='M18.1699 11.4672C18.1598 11.9149 18.8224 11.9363 18.828 11.4829C18.8831 8.93029 17.3093 6.82767 14.3516 6.60604C13.9185 6.57454 13.8735 7.25517 14.3055 7.28667C16.8705 7.48129 18.2216 9.23179 18.1699 11.4672Z' fill='%238E24AA'/%3e%3cpath d='M17.4612 14.3707C16.9054 14.049 16.3396 14.2492 16.1056 14.5654L15.6162 15.1987C15.3676 15.5205 14.9029 15.4777 14.9029 15.4777C11.5122 14.5811 10.6054 11.0329 10.6054 11.0329C10.6054 11.0329 10.5638 10.5525 10.8743 10.2949L11.4863 9.78862C11.7923 9.54562 11.9858 8.96062 11.6742 8.38574C10.8417 6.88162 10.2826 6.36299 9.99794 5.96474C9.69869 5.59012 9.24869 5.50574 8.78068 5.75887H8.77056C7.79743 6.32812 6.73206 7.39349 7.07293 8.49037C7.65456 9.64687 8.72331 13.3335 12.1298 16.119C13.7307 17.4364 16.2642 18.7864 17.3397 19.098L17.3498 19.1137C18.4096 19.467 19.4401 18.36 19.9902 17.3576V17.3497C20.2343 16.8649 20.1533 16.4059 19.7967 16.1055C19.1645 15.489 18.2105 14.8084 17.4612 14.3707Z' fill='%238E24AA'/%3e%3cpath d='M14.8151 9.11702C15.8963 9.18002 16.4205 9.74477 16.4768 10.9046C16.497 11.358 17.1551 11.3265 17.1349 10.8731C17.0629 9.35889 16.2731 8.51514 14.8511 8.43639C14.418 8.41051 14.3775 9.09114 14.8151 9.11702Z' fill='%238E24AA'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_8_185'%3e%3crect width='27' height='27' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: no-repeat;
        display: block;
        max-width: desktop-vw(27);
        min-width: desktop-vw(27);
        height: desktop-vw(27);
     }

     &_tg {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 26 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_8_191)'%3e%3cpath d='M10.2017 17.0786L9.77161 23.3606C10.3869 23.3606 10.6534 23.0861 10.973 22.7565L13.8579 19.8933L19.8358 24.4395C20.9321 25.074 21.7045 24.7398 22.0003 23.3921L25.9241 4.29859L25.9252 4.29747C26.2729 2.61447 25.3391 1.95634 24.2709 2.36922L1.20678 11.5391C-0.367301 12.1736 -0.343468 13.0848 0.939198 13.4977L6.83578 15.4023L20.5324 6.50247C21.1769 6.05922 21.763 6.30447 21.2809 6.74772L10.2017 17.0786Z' fill='%23039BE5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_8_191'%3e%3crect width='26' height='27' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: no-repeat;
        display: block;
        max-width: desktop-vw(27);
        min-width: desktop-vw(27);
        height: desktop-vw(27);
     }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
}

</style>