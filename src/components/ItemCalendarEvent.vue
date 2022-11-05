<template>
    <div class="calendar_item">
        <div class="calendar_item_img">
            <img :src="content.image" alt="img">
            <div class="calendar_item_img_data">
                {{ getDateStart }}.{{ getMonthStart }} - {{ getDateEnd }}.{{ getMonthEnd}}
            </div>
        </div>
        <div class="calendar_item_info">
            <div>
                <div class="calendar_item_name">
                    {{ content.name }}
                </div>
                <div class="calendar_item_text" v-html="content.description">
                </div>
            </div>
            
            <div class="calendar_item_wrapLocation">
                <div class="calendar_item_time">
                    {{getHoursStart}}:{{ getMinutesStart}} - {{getHoursEnd}}:{{getMinutesEnd}}
                </div>
                <div class="calendar_item_location">
                    {{ content.place }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    props: ['content'],
    data() {
        return {
        }
    },
    methods: {
        goToCourse(prodId) {
            this.$router.push({
                name: 'courseSingle',
                params: { Pid2: prodId }
            })
        },
    },
    computed: {
        getDateStart() {
            return new Date(this.content.start_date).getDate()
        },
        getMonthStart() {
            let month = new Date(this.content.start_date).getMonth() + 1
            if(month < 10)
                return '0' + month
            else
                return month
        },
        getDateEnd() {
            return new Date(this.content.testing_end_date).getDate()
        },
        getMonthEnd() {
            let month = new Date(this.content.testing_end_date).getMonth() + 1
            if(month < 10)
                return '0' + month
            else
                return month
        },
        getHoursStart() {
            return new Date(this.content.start_date).getHours()
        },
        getMinutesStart() {
            let minutes = new Date(this.content.start_date).getMinutes()
            if(minutes < 10)
                return '0' + minutes
            else
                return minutes
        },
        getHoursEnd() {
            return new Date(this.content.end_date).getHours()
        },
        getMinutesEnd() {
            let minutes = new Date(this.content.end_date).getMinutes()
            if(minutes < 10)
                return '0' + minutes
            else
                return minutes
        }
    }
}
</script>
<style lang="scss" scoped>

.calendar {
    &_item {
        display: flex;
        grid-gap: desktop-vw(32);
        max-width: desktop-vw(723);

        &_info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1 1 auto;
        }

        &_wrapLocation {
            display: flex;
            grid-gap: desktop-vw(58);
            margin-top: auto;
        }

        &_time {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(14);
            line-height: 130%;
            text-transform: uppercase;
            color: #1FAEEA;
            display: flex;
            align-items: center;
            grid-gap: desktop-vw(8);

            &:before {
                content: "";
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 0.47168C3.13393 0.47168 0 3.60561 0 7.47168C0 11.3377 3.13393 14.4717 7 14.4717C10.8661 14.4717 14 11.3377 14 7.47168C13.9962 3.60737 10.8643 0.475781 7 0.47168ZM7.5001 7.47168C7.5001 7.74795 7.27627 7.97178 7 7.97178H3.00004C2.72377 7.97178 2.49994 7.74795 2.49994 7.47168C2.49994 7.19541 2.72377 6.97158 3.00004 6.97158H6.50019V3.47172C6.50019 3.19545 6.72402 2.97162 7.00029 2.97162C7.27657 2.97162 7.5001 3.19545 7.5001 3.47172V7.47168Z' fill='%231FAEEA'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                display: block;
                max-width: desktop-vw(14);
                min-width: desktop-vw(14);
                height: desktop-vw(14);
            }
        }

        &_location {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(14);
            line-height: 130%;
            text-transform: uppercase;
            color: #1FAEEA;
            display: flex;
            align-items: center;
            grid-gap: desktop-vw(8);

            &:before {
                content: "";
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 13 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.25586 0.221802C2.94744 0.221802 0.255859 2.90247 0.255859 6.19745C0.255859 10.2866 5.62527 16.2898 5.85388 16.5433C6.06861 16.7815 6.4435 16.7811 6.65784 16.5433C6.88645 16.2898 12.2559 10.2866 12.2559 6.19745C12.2558 2.90247 9.56425 0.221802 6.25586 0.221802ZM6.25586 9.20397C4.59131 9.20397 3.23714 7.85525 3.23714 6.19745C3.23714 4.53965 4.59134 3.19097 6.25586 3.19097C7.92037 3.19097 9.27455 4.53968 9.27455 6.19748C9.27455 7.85528 7.92037 9.20397 6.25586 9.20397Z' fill='%231FAEEA'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                display: block;
                max-width: desktop-vw(14);
                min-width: desktop-vw(14);
                height: desktop-vw(14);
            }
        }

        &_name {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(16);
            line-height: 130%;
            text-transform: uppercase;
            margin-bottom: desktop-vw(10);
            color: #1FAEEA;
        }

        &_text {
            font-style: normal;
            font-weight: 400;
            font-size: desktop-vw(14);
            line-height: 130%;
            color: #383838;
            margin-bottom: desktop-vw(22);
        }

        &_img {
            height: desktop-vw(150);
            max-width: desktop-vw(250);
            min-width: desktop-vw(250);
            width: 100%;
            position: relative;

            img {
                position: absolute;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            &_data {
                height: desktop-vw(39);
                position: absolute;
                bottom: 0;
                left: 0;
                background: #1FAEEA;
                padding: 0 desktop-vw(14);
                width: 100%;
                display: flex;
                align-items: center;
                grid-gap: desktop-vw(15);
                font-style: normal;
                font-weight: 700;
                font-size: desktop-vw(18);
                line-height: 130%;
                /* identical to box height */
                text-transform: uppercase;
                color: #FFFFFF;

                &:before {
                    content: "";
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.14083 10.1697C6.14083 9.95691 5.96418 9.78418 5.74622 9.78418H4.36935C4.15175 9.78418 3.9751 9.95657 3.9751 10.1697V11.516C3.9751 11.7292 4.15175 11.9019 4.36935 11.9019H5.74658C5.96454 11.9019 6.14119 11.7292 6.14119 11.516L6.14083 10.1697Z' fill='white'/%3e%3cpath d='M9.58224 10.1697C9.58224 9.95691 9.40559 9.78418 9.18798 9.78418H7.81076C7.59315 9.78418 7.4165 9.95657 7.4165 10.1697V11.516C7.4165 11.7292 7.59315 11.9019 7.81076 11.9019H9.18798C9.40559 11.9019 9.58224 11.7292 9.58224 11.516V10.1697Z' fill='white'/%3e%3cpath d='M13.024 10.1697C13.024 9.95691 12.8474 9.78418 12.6297 9.78418H11.2525C11.0346 9.78418 10.8579 9.95657 10.8579 10.1697V11.516C10.8579 11.7292 11.0346 11.9019 11.2525 11.9019H12.6297C12.8474 11.9019 13.024 11.7292 13.024 11.516V10.1697Z' fill='white'/%3e%3cpath d='M6.14083 13.535C6.14083 13.3219 5.96418 13.1492 5.74622 13.1492H4.36935C4.15175 13.1492 3.9751 13.3216 3.9751 13.535V14.881C3.9751 15.0942 4.15175 15.2666 4.36935 15.2666H5.74658C5.96454 15.2666 6.14119 15.0938 6.14119 14.881L6.14083 13.535Z' fill='white'/%3e%3cpath d='M9.58224 13.535C9.58224 13.3219 9.40559 13.1492 9.18798 13.1492H7.81076C7.59315 13.1492 7.4165 13.3216 7.4165 13.535V14.881C7.4165 15.0942 7.59315 15.2666 7.81076 15.2666H9.18798C9.40559 15.2666 9.58224 15.0938 9.58224 14.881V13.535Z' fill='white'/%3e%3cpath d='M13.024 13.535C13.024 13.3219 12.8474 13.1492 12.6297 13.1492H11.2525C11.0346 13.1492 10.8579 13.3216 10.8579 13.535V14.881C10.8579 15.0942 11.0346 15.2666 11.2525 15.2666H12.6297C12.8474 15.2666 13.024 15.0938 13.024 14.881V13.535Z' fill='white'/%3e%3cpath d='M15.4862 2.68358V4.74002C15.4862 5.66951 14.7152 6.41861 13.7646 6.41861H12.6787C11.7282 6.41861 10.9468 5.66951 10.9468 4.74002V2.67627H6.05189V4.74002C6.05189 5.66951 5.2705 6.41861 4.3203 6.41861H3.23405C2.28384 6.41861 1.51243 5.66951 1.51243 4.74002V2.68358C0.682247 2.70831 -0.000488281 3.38044 -0.000488281 4.2065V16.2582C-0.000488281 17.0999 0.697205 17.7912 1.55801 17.7912H15.4414C16.3007 17.7912 16.9999 17.0985 16.9999 16.2582V4.2065C16.9995 3.38044 16.3171 2.70831 15.4862 2.68358ZM14.9819 15.5077C14.9819 15.8713 14.6803 16.1666 14.3081 16.1666H2.661C2.28883 16.1666 1.98717 15.8716 1.98717 15.5077V9.28264C1.98717 8.91872 2.28883 8.62375 2.661 8.62375H14.3081C14.6803 8.62375 14.9819 8.91872 14.9819 9.28264V15.5077Z' fill='white'/%3e%3cpath d='M3.23063 5.31633H4.30477C4.631 5.31633 4.89527 5.05827 4.89527 4.73927V1.36783C4.89527 1.04883 4.631 0.790771 4.30477 0.790771H3.23063C2.9044 0.790771 2.64014 1.04918 2.64014 1.36783V4.73927C2.64014 5.05792 2.9044 5.31633 3.23063 5.31633Z' fill='white'/%3e%3cpath d='M12.6647 5.31633H13.7389C14.0647 5.31633 14.329 5.05827 14.329 4.73927V1.36783C14.329 1.04883 14.0647 0.790771 13.7389 0.790771H12.6647C12.3388 0.790771 12.0742 1.04918 12.0742 1.36783V4.73927C12.0746 5.05792 12.3388 5.31633 12.6647 5.31633Z' fill='white'/%3e%3c/svg%3e");
                    display: block;
                    max-width: desktop-vw(17);
                    width: 100%;
                    height: desktop-vw(18);
                }
            }
        }
    }
}


@media screen and (max-width: $tablet) {

}
@media screen and (max-width: $mobile) {
    .calendar {
        &_item {
            flex-direction: column;

            grid-gap: 0;
            max-width: 100%;

            &_wrapLocation {
                grid-gap: mobile-vw(10);
                width: 100%;
                justify-content: space-between;
            }

            &_time {
                font-size: mobile-vw(14);
                grid-gap: mobile-vw(8);

                &:before {
                    max-width: mobile-vw(14);
                    min-width: mobile-vw(14);
                    height: mobile-vw(14);
                }
            }

            &_location {
                font-size: mobile-vw(13);
                grid-gap: mobile-vw(8);

                &:before {
                    max-width: mobile-vw(14);
                    min-width: mobile-vw(14);
                    height: mobile-vw(14);
                }
            }

            &_name {
                margin-top: mobile-vw(24);
                font-size: mobile-vw(16);
                text-transform: uppercase;
                margin-bottom: mobile-vw(10);
            }

            &_text {
                font-size: mobile-vw(16);
                margin-bottom: mobile-vw(22);
            }

            &_img {
                height: mobile-vw(200);
                max-width: 100%;

                &_data {
                    height: mobile-vw(50);
                    padding: 0 mobile-vw(14);
                    grid-gap: mobile-vw(15);
                    font-size: mobile-vw(18);

                    &:before {
                        max-width: mobile-vw(17);
                        height: mobile-vw(18);
                    }
                }
            }
        }
    }
}

</style>