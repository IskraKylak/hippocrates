<template>
    <div class="courses_item" @click="goToCourse(content.id)"> 
        <div class="courses_img">
            <img :src="content.course_image" alt="img">
        </div>
        <div class="courses_content">
            <div class="courses_title">
                {{ content.name }}
            </div>
            <div class="courses_text">
                {{ content.description }}
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
    }
}
</script>
<style lang="scss" scoped>
.courses {
    &_item {
        max-width: desktop-vw(360);
        width: 100%;
        box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
        border-radius: 2px;
        overflow: hidden;
        cursor: pointer;
    }

    &_img {
        width: 100%;
        height: desktop-vw(200);
        position: relative;
        overflow: hidden;

        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    &_title {
        font-size: desktop-vw(16);
        font-weight: 500;
        line-height: 130%;
        margin-bottom: desktop-vw(20);
        color: #1FAEEA;
    }

    &_text {
        font-size: desktop-vw(14);
        font-weight: 400;
        line-height: 130%;
    }

    &_content {
        padding: desktop-vw(20);
    }
}

@media screen and (max-width: $tablet) {

}
@media screen and (max-width: $mobile) {
    .courses {
        &_item {
            max-width: mobile-vw(370);
            min-width: 0;
            width: 100%;
        }

        &_img {
            height: mobile-vw(200);
        }

        &_title {
            font-size: mobile-vw(16);
            margin-bottom: mobile-vw(20);
        }

        &_text {
            font-size: mobile-vw(14);
        }

        &_content {
            padding: mobile-vw(20);
        }
    }
}

</style>