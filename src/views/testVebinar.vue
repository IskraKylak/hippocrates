<template>
    <div v-if="idVebinar" class="wrapTesting">
        <Testing  :proId="idVebinar" :type="type"  />
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
        idVebinar: this.$route.params.Pid4,
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