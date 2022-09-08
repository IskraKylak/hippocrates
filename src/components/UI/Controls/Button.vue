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

<style lang="scss">
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

  &_btnBorder {
    border: 1px solid #1FAEEA;
    border-radius: 3px;
    color: #1FAEEA;
    background: #fff;
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
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #1FAEEA;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
  }
}

</style>
