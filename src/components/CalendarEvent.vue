<template>
    <div class="calendar">
        <div class="container">
            <div class="calendar_content">
                <div class="calendar_title">
                    {{$t('Calendar.title')}}
                </div>
                <div class="calendar_wrapList" >
                    <Calendar @dataSelect='dataSelect' :content="content.list" />
                    <div class="calendar_calendarList">
                        <div class="calendar_calendarList_title">
                            {{$t('calendarEvent.subtitle')}}
                        </div>
                        <div class="calendar_list" v-if="!clickCalendar">
                            <ItemCalendarEvent v-for="(item, idx) in calendarList" :key="idx" :content="item" />
                        </div>
                        <div class="calendar_list" v-else>
                            <ItemCalendarEvent v-for="(item, idx) in filterCalendarList" :key="idx" :content="item" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue'
import ItemCalendarEvent from '@/components/ItemCalendarEvent.vue'
export default {
    props: ['content'],
    components: {
        Calendar,
        ItemCalendarEvent
    },
    data() {
        return {
           clickCalendar: false,
           filterCalendarList: []
        }
    },
    computed: {
        calendarList() {
            if(this.content.list) {
                this.content.list.sort(function(a, b){
                    return (Date.parse(b.start_date)/1000) - (Date.parse(a.start_date)/1000)
                });
                return this.content.list.slice(0, 3)
            }
        }
    },
    methods: {
        dataSelect (data) {
            this.filterCalendarList = []
            for (let i = 0; i < this.content.list.length; i++) {
                let normData = new Date(this.content.list[i].start_date)
                normData = normData.getDate() + "-" + (normData.getMonth() + 1) + "-" + normData.getFullYear()
                if(normData === data) {
                    this.filterCalendarList.push(this.content.list[i])
                }
            }
            if(this.filterCalendarList.length > 0)
                this.clickCalendar = true
            else
                this.clickCalendar = false
        },
    }
}
</script>

<style lang="scss">

.calendar {
    &_content {
        padding: desktop-vw(50) 0;
    }

    &_wrapList {
        display: flex;
        grid-gap: desktop-vw(77);
    }

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(24);
        line-height: 130%;
        /* identical to box height */
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(70);
    }

    &_calendarList {
        flex: 1 1 auto;

        &_title {
            font-style: normal;
            font-weight: 700;
            font-size: desktop-vw(16);
            line-height: 130%;
            /* identical to box height */
            text-transform: uppercase;
            color: #383838;
            margin-bottom: desktop-vw(17);
        }
    }

    &_list {
        display: flex;
        flex-direction: column;
        grid-gap: desktop-vw(30);
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .calendar {
        &_content {
            padding: mobile-vw(50) 0;
            
        }

        &_wrapList {
            display: flex;
            flex-direction: column;
            grid-gap: mobile-vw(77);
        }

        &_title {
            font-size: mobile-vw(24);
            margin-bottom: desktop-vw(70);
        }

        &_calendarList {
            &_title {
                font-size: mobile-vw(18);
                margin-bottom: mobile-vw(17);
                text-align: center;
            }
        }

        &_list {
            grid-gap: mobile-vw(30);
        }
    }
}

</style>