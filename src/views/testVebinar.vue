<template>
    <div v-if="idVebinar" class="wrapTesting">
        <div class="container content_vebinar ">
            <h1 class="title_test">
            Тестовий вебінар
            </h1>
            <Testing  :proId="idVebinar" :type="type"  />
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
        idVebinar: 'webinars/'+this.$route.params.Pid4,
        type: 'webinars'

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