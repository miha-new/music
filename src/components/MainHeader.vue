<template lang="pug">
  .main-header
    .main-header-container
      .main-header-brand
        a.main-header-brand__link(href="#")
          img(src="/img/logo.svg" alt="")
      .main-header-navbar.main-header-navbar_left
        a.main-header-navbar__link(href="#") About
        a.main-header-navbar__link(href="#") Buy
      .main-header-navbar.main-header-navbar_right
        a.main-header-navbar__link(
          href="#"
          @click.prevent="dialog.login = !dialog.login"
        ) Login
        a.main-header-navbar__link(href="#") Register
    main-dialog-login(v-model="dialog.login")
</template>

<script>
  import MainDialogLogin from '@/components/MainDialogLogin';

  export default {
    name: 'MainHeader',
    components: {
      MainDialogLogin
    },
    data: function () {
      return {
        dialog: {
          login: false,
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .main-header {
    position: relative;
    text-align: left;
    padding-top: 12px;
    padding-bottom: 12px;
    z-index: 300;
    overflow: hidden;
    
    &-container {
      display: flex;
      flex-wrap: wrap;
      max-width: 1600px;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      margin-right: auto;
      margin-left: auto;
    }

    &-brand {
      position: relative;
      min-height: 1px;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
    &-navbar {
      position: relative;
      min-height: 1px;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
      &_left {
        padding-left: 16px;
      }
      &_right {
        padding-left: 8px;
        margin-left: auto;
      }
      &__link {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        color: #333;
        text-decoration: none;
        margin-right: 8px;
        padding: 6px 6px 3px;
        border-bottom: 4px solid transparent;
        transition: border-color 200ms ease;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          border-color: rgba(0,0,0,.15);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .main-header {
      &-navbar {
        &_left {
          padding-left: 40px;
        }
        &_right {
          padding-left: 16px;
        }
        &__link {
          margin-right: 16px;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .main-header {
      &-container {
        padding-left: 40px;
        padding-right: 40px;
      }
      &-navbar {
        &_left {
          padding-left: 90px;
        }
        &_right {
          padding-left: 20px;
        }
        &__link {
          margin-right: 20px;
        }
      }
    }
  }
</style>
