<template>
  <div class="courses">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import VebinarList from '@/components/VebinarList'
export default {
  name: 'Vebinars',
  components: {
    Breadcrumbs
  },
  data() {
    return {
        title: 'Вебінари',
        breadcrumbs: [
            {
                name: 'Головна',
                link: '/'
            },
            {
                name: 'курсы'
            }
        ],
    }
  }
}
</script>
<style lang="scss" scoped>

.courses {
    padding-top: desktop-vw(150);
    padding-bottom: desktop-vw(70);

    &_title {
        font-style: normal;
        font-weight: 700;
        font-size: desktop-vw(32);
        line-height: 130%;
        /* identical to box height */
        text-align: center;
        text-transform: uppercase;
        color: #1FAEEA;
        margin-bottom: desktop-vw(37);
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .courses {
        padding-top: mobile-vw(30);
        padding-bottom: mobile-vw(100);

        &_title {
            font-style: normal;
            font-size: mobile-vw(32);
            margin-bottom: mobile-vw(37);
        }
    }
}

</style>