<template lang="pug">
  .main-dialog-wrapper(
    v-if="value"
    @click.self="handlerClose"
  )
    .main-dialog
      .main-dialog-content(v-if="!download")
        button.main-dialog-close(
          @click="handlerClose"
        )
        h4.main-dialog__title Login
        p.main-dialog__text Since you’ve an Icons8 account you’ll able to login into any our product

        button.main-dialog__btn.main-dialog__btn-login Login with Icons8
        p.main-dialog__info
          | Don’t have an account yet? 
          a.main-dialog__link-dark(href="#") Register

</template>

<script>
  export default {
    name: 'MainDialog',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        paid: false,
        download: false
      }
    },
    watch: {
      value: function (newValue) {
        this.paid = false;
        this.download = false;

        var classList = document.documentElement.classList;

        if (newValue) {
          classList.add('main-dialog-open');
        }
        else {
          classList.remove('main-dialog-open');
        }
      }
    },
    methods: {
      handlerClose () {
        this.$emit('input', false);
      }
    }
  }
</script>

<style lang="scss">
  .main-dialog {
    &-open {
      overflow: hidden;
    }
  }
</style>

<style scoped lang="scss">
  .main-dialog {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100%;
    &-content {
      position: relative;
      width: 100%;
      min-height: 100%;
      padding: 24px 32px;
      background: #fff;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.1);
      font-size: 16px;
      line-height: 24px;
      overflow: hidden;
    }
    &-wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      min-height: 100%;
      background-color: rgba(0,0,0,.6);
      z-index: 500;
      overflow: auto;
    }
   
    &-close {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
      background-color: rgba(51,51,51,.03);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      user-select: none;
      transition: background-color 200ms ease;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        right: 0;
        background: url(/img/remove.svg) no-repeat 50%;
        width: 40px;
        height: 40px;
        opacity: .6;
      }
      &:hover {
        background-color: rgba(51,51,51,.09);
      }
    }

    &__title {
      font-size: 32px;
      line-height: 38px;
      font-weight: 700;
      color: #333;
      text-transform: uppercase;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    &__text {
      font-size: 18px;
      line-height: 26px;
      color: #999;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    &__info {
      font-size: 16px;
      line-height: 24px;
      color: #333;
      text-align: center;
    }
    &__link {
      color: #0084E2;
      transition: color 200ms ease;
      user-select: none;
      &:hover {
        color: #20A2FF;
      }
      &-dark {
        font-weight: 700;
        color: #333;
        &:hover {
          color: #20A2FF;
        }
      }
    }
    &__btn {
      display: block;
      width: 100%;
      background-color: #f5f5f5;
      color: #333;
      height: 70px;
      border: none;
      cursor: pointer;
      user-select: none;
      text-align: center;
      padding: 12px 16px;
      transition: color 200ms ease, background-color 200ms ease;
      margin-top: 45px;
      margin-bottom: 16px;
      &:hover {
        color: #333;
        background-color: #e5e5e5;
      }
      &[disabled] {
        opacity: .3;
        cursor: none;
        pointer-events: none;
      }
      &-text {
        vertical-align: middle;
        font-size: 18px;
        line-height: 30px;
      }
      &-login {
        vertical-align: middle;
        font-size: 18px;
        line-height: 30px;
        padding-left: 60px;
        padding-right: 24px;
        background: rgba(74,193,68,1) url(/img/login.svg) no-repeat 24px 50%;
        color: #fff;
        &:hover {
          background-color: rgba(74,193,68,.9);
          color: #fff;
        }
        .main-dialog__btn-text {
          &:last-child {
            display: block;
            font-size: 13px;
            line-height: 16px;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .main-dialog {
      max-width: 542px;
      height: auto;
      min-height: 1px;
     
      &-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      &__btn {
        &-login {
          padding-right: 60px;
        }
      }
    }
  }
</style>
