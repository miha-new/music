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
        h4.main-dialog__title Before you proceed
        p.main-dialog__text Choose format in which you want to download this track
        .main-dialog-row
          .main-dialog-col
            button.main-dialog__btn.main-dialog__btn-download(
              @click.prevent="download = true"
            )
              span.main-dialog__btn-text Download MP3
              span.main-dialog__btn-text 320 kbps
          .main-dialog-col
            button.main-dialog__btn.main-dialog__btn-download(
              :disabled="!paid"
              @click.prevent="download = true"
            )
              span.main-dialog__btn-text Download WAV
              span.main-dialog__btn-text 44,100 Hz
            a.main-dialog__link(
              href="#"
              v-if="!paid"
              @click.prevent="paid = true"
            ) Unlock for $20/month
      .main-dialog-content(v-else)
        button.main-dialog-close(
          @click="handlerClose"
        )
        h4.main-dialog__title Sex!
        p.main-dialog__text
          | Now when we have your attention, please 
          a.main-dialog__link(href="#") set a link
        .main-dialog-row.main-dialog-row_tip
          .main-dialog-col
            .main-dialog__info
              | Music by 
              a.main-dialog__link(href="#") Belair
              |  from 
              a.main-dialog__link(href="#") Fugue
          .main-dialog-col
            button.main-dialog__btn.main-dialog__btn-copy Copy

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
    &-row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -8px;
      margin-left: -8px;
      &_tip {
        background-color: rgba(51,51,51,.05);
        margin-top: 45px;
        margin-bottom: 16px;
      }
    }
    &-col {
      position: relative;
      width: 100%;
      min-height: 1px;
      padding-left: 8px;
      padding-right: 8px;
      text-align: center;
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
      font-size: 18px;
      line-height: 28px;
      color: #333;
      padding: 16px 8px;
    }
    &__link {
      color: #0084E2;
      transition: color 200ms ease;
      user-select: none;
      &:hover {
        color: #20A2FF;
      }
      &_dark {
        color: #333;
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
      margin-bottom: 12px;
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
      &-download {
        background-color: rgba(51,51,51,1);
        color: #fff;
        &:hover {
          background-color: rgba(51,51,51,.9);
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
      &-copy {
        font-size: 16px;
        line-height: 20px;
        padding: 12px 40px;
        height: 44px;
        background-color: rgba(51,51,51,1);
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
        &:hover {
          background-color: rgba(51,51,51,.9);
          color: #fff;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .main-dialog {
      max-width: 542px;
      height: auto;
      min-height: 1px;
      &-row {
        &_tip {
          .main-dialog-col {
            &:first-child {
              text-align: left;
            }
            &:last-child {
              flex: 0 0 auto;
              width: auto;
              max-width: none;
            }
          }
        }
      }
      &-col {
        flex-grow: 1;
        flex-basis: 0px;
        max-width: 100%;
      }
      &-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
