<template>
    <div class="wrapCustomCheckBox">
        <input type="checkbox" :id="'input'+idx" :name="content.id" v-model="checked">
        <label :for="'input'+idx" class="customCheckBox"></label>
        <label :for="'input'+idx" class="customCheckBoxText">
            {{ content.name }}
        </label>
    </div>
</template>

<script>
export default {
    props: ['idx', 'content'],
    data() {
        return {
            checked: false
        }
    },
    methods: {
    },
    watch: {
        checked: {
            handler(val, oldVal) {
                if(val) {
                    this.$emit('addSpec', this.content.id)
                } else {
                    this.$emit('removeSpec', this.content.id)
                }
                
            },
        },
    }
}
</script>

<style lang="scss" scoped>

.wrapCustomCheckBox {
    display: flex;
    align-items: center;
    grid-gap: desktop-vw(11);

    .customCheckBox {
        max-width: desktop-vw(22);
        min-width: desktop-vw(22);
        height: desktop-vw(22);
        border: 1px solid #C4C4C4;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .customCheckBoxText {
        font-style: normal;
        font-weight: 400;
        font-size: desktop-vw(16);
        line-height: 130%;
        /* identical to box height */
        text-align: center;
        color: #383838;
        cursor: pointer;
        
    }

    input {
        display: none;
    }

    input:checked ~ .customCheckBoxText {
        color: #1FAEEA;
    }

    input:checked ~ .customCheckBox {
        &:before {
            content: '';
            display: block;
            max-width: desktop-vw(9);
            min-width: desktop-vw(9);
            height: desktop-vw(9);
            border-radius: 50%;
            background: #1FAEEA;
        }
    }
}


@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .wrapCustomCheckBox {
        grid-gap: mobile-vw(11);

        .customCheckBox {
            max-width: mobile-vw(22);
            min-width: mobile-vw(22);
            height: mobile-vw(22);
        }

        .customCheckBoxText {
            font-size: mobile-vw(16);
        }

        input:checked ~ .customCheckBox {
            &:before {
                max-width: mobile-vw(9);
                min-width: mobile-vw(9);
                height: mobile-vw(9);
            }
        }
    }
}

</style>
