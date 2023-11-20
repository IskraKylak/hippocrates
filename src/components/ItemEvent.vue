<template>
    <div class="events_item" v-if="content"  @click="goToVebinar(content.id)"> 
        <div class="events_img">
            <img :src="content.image" alt="img">
        </div>
        <div class="events_bottom">
            <div>
                <div class="events_name">
                    {{ content.name }}
                </div>
                <div class="events_text" v-html="content.description">
                </div>
            </div>
            <div class="events_wrapData">
                <div class="events_data">
                    <span>Дата:  {{ getDateStart }}.{{ getMonthStart }}.{{ getYearStart }}</span>
                    <span>Час: {{getHoursStart}}:{{getMinutesStart}} </span>          
                </div>
                <div class="events_more">
                    Детальніше
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
export default {
    props: ['content'],
    data() {
        return {
        }
    },
    methods: {
        goToVebinar(prodId) {
            this.$router.push({
                name: 'vebinarSingle',
                params: { Pid2: prodId }
            })
        },
    },
    computed: {
        getDateStart() {
            return new Date(this.content.start_date).getDate()
        },
        getYearStart() {
            return new Date(this.content.start_date).getFullYear()
        },
        getMonthStart() {
            let month = new Date(this.content.start_date).getMonth() + 1
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
    }
}
</script>