<template>
  <button
    class="btn"
    :class="btnClass ? 'btn_'+btnClass : ''"
    v-bind="$attrs">

    <!-- slot -->
    <slot />

  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'btnPrimary'
    },
  }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: 0;
  font-family: 'OpenSans';
  background: #8BCD20;
  border-radius: 3px;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: desktop-vw(16);
  color: #FFFFFF;
  max-width: desktop-vw(134);
  padding: 0 desktop-vw(25);
  height: desktop-vw(40);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.3s ease;
  &:disabled,
  &[disabled]{
    background-color: #cccccc;
    color: #666666;
     &:hover  {
      background-color: #cccccc;
      color: #666666;
      cursor: auto;
     }
  }

  &:hover {
    background: #93d922;
  }
  
  &_mobMenu {
    border: 2px solid #fff;
    color: #fff;
    background: #1FAEEA;
    max-width: desktop-vw(220);
    width: 100%;

    &:hover {
      background: #25d1ff;
    }
  }

  &_btnLink {
    max-width: desktop-vw(279);
    width: 100%;
    height: desktop-vw(48);

    &.reg {
      background: #1FAEEA;
      &:hover {
        background: #25d1ff;
      }
    }
  }

  &_btnBorder {
    border: 1px solid #1FAEEA;
    border-radius: 3px;
    color: #1FAEEA;
    background: #fff;

    &:hover {
      background: #1FAEEA;
      color: #fff
    }
  }

  &_btnPoster {
    height: desktop-vw(48);
    max-width: desktop-vw(251);
    width: 100%;
  }

  &_btnFeedback {
    height: desktop-vw(50);
    max-width: 100%;
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: desktop-vw(16);
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #1FAEEA;
    border: 1px solid #FFFFFF;
    border-radius: 5px;

    &:hover {
      background: #25d1ff;
    }
  }
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  .btn {
    font-size: mobile-vw(16);
    max-width: mobile-vw(134);
    padding: 0 mobile-vw(25);
    height: mobile-vw(40);

    &_btnLink {
      max-width: mobile-vw(279);
      width: auto;
      height: mobile-vw(48);
    }

    &_btnPoster {
      height: mobile-vw(48);
      max-width: mobile-vw(251);
      width: auto;
    }

    &_btnFeedback {
      max-width: 100%;
      height: mobile-vw(50);
      font-size: mobile-vw(16);
    }

    &_mobMenu {
      max-width: mobile-vw(220);
    }
  }
}

</style>
