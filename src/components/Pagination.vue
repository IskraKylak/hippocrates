<template>
  <div class="box_pagination">
        <ul class="pagination">
            <li><a href="#" class="prev" @click.prevent="prevPage"></a></li>
            <li v-for="(item, idx) in content"
                :key="idx">
            <a
                href="#"
                :class="activePag === item ? 'active' : ''"
                @click.prevent="openPage(item)"
            >
                {{ item }}
            </a>
            </li>
            <li>
            <a href="#" class="next" @click.prevent="nextPage"></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['content', 'activePag'],
    data() {
        return {
        }
    },
    methods: {
        openPage (idx) {
            this.$emit('openPage', idx)
        },
        prevPage () {
            let activePag = this.activePag - 1
            if(activePag >= 1)
                this.$emit('openPage', activePag)
        },
        nextPage () {
            let activePag = this.activePag + 1
            if(activePag <= this.content)
                this.$emit('openPage', activePag)
        }
    }
};
</script>

<style lang="scss" scoped>
.pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: desktop-vw(10);
    font-size: desktop-vw(16);
    margin-top: desktop-vw(20);

    li {
        a {
            text-decoration: none;
            color: #383838;
            font-weight: 500;

            &:hover {
                color: #1faeea;
            }

            &.active {
                color: #1faeea;
            }
        } 
    }

    .prev {
        margin-top: 1px;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        display: block;
        width:  desktop-vw(10);
        height:  desktop-vw(12);
        transform: rotate(180deg);
    }

    .next {
        margin-top: 1px;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        display: block;
        width:  desktop-vw(10);
        height:  desktop-vw(12);
    }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .pagination {
        grid-gap: mobile-vw(10);
        font-size: mobile-vw(16);
        margin-top: mobile-vw(20);

        .prev {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: block;
            width:  mobile-vw(10);
            height:  mobile-vw(12);
            transform: mobile(180deg);
        }

        .next {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 14 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.17578 23.4126L12.1758 12.4126L1.17578 1.4126' stroke='%23000' stroke-width='2'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            display: block;
            width:  mobile-vw(10);
            height:  mobile-vw(12);
        }
    }
}

</style>
