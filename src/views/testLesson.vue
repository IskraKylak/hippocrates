<template>
    <div class="wrapTesting">
        <div class="container content_vebinar ">
            <h1 class="title_test">
                Тест уроку
            </h1>
            <TestingCourse  :content="product" @goToCourse="goToCourse"/>
        </div>
    </div>
</template>

<script>
import TestingCourse from '@/components/TestingCourse'
export default {
    components: {
        TestingCourse
    },
    data () {
    return {
            product: {
                idCourse: 'courses/'+this.$route.params.courseId,
                idLesson: 'lessons/'+this.$route.params.Pid3,
                type: 'lessons'
            }
        }
    },
    methods: {
        goToCourse() {
            this.$router.push({
                name: 'courseSingle',
                params: { Pid2: this.$route.params.courseId }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapTesting {
    padding-top: desktop-vw(180);
    padding-bottom: desktop-vw(40);
}

@media screen and (max-width: $mobile) {
    .wrapTesting {
        padding-top: mobile-vw(40);
        padding-bottom: mobile-vw(40);
    }
}
</style>