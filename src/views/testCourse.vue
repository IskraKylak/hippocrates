<template>
    <div v-if="idCourse" class="wrapTesting">
        <div class="container content_vebinar ">
            <h1 class="title_test">
            Тестовий вебінар
            </h1>
            <Testing  :proId="idCourse" :type="type"  />
        </div>
    </div>
</template>

<script>
import Testing from '@/components/Testing'
export default {
    components: {
        Testing
    },
    data () {
    return {
        idCourse: 'courses/'+this.$route.params.Pid2,
        type: 'courses'

    }
  },
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