<template lang="pug">
  .main-footer
    .main-footer-container
      .main-footer-body
        .main-footer-widget
          .main-footer-widget__title Design Assets
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Icons
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Pichon Icons
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Moose Photos
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Moose Editor
              span.label.label_new New
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Fugue Music
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Ouch! Illustrations
              span.label.label_new New

        .main-footer-widget
          .main-footer-widget__title Downloads
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Lunacy
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Pichon Icons
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") All Photos
          .main-footer-widget__title Licenses
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Free License
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Paid License
              span.label.label_upgrage Upgrade

        .main-footer-widget
          .main-footer-widget__title Community
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Blog
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Forums
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") ProductHunt
          .main-footer-widget__socials
            .main-footer-widget__social.main-footer-widget__social_1
              a.main-footer-widget__link(href="#")
            .main-footer-widget__social.main-footer-widget__social_2
              a.main-footer-widget__link(href="#")
            .main-footer-widget__social.main-footer-widget__social_3
              a.main-footer-widget__link(href="#")
            .main-footer-widget__social.main-footer-widget__social_4
              a.main-footer-widget__link(href="#")
          button.main-footer-widget__subscribe Subscribe Newsletter
            
        .main-footer-widget
          .main-footer-widget__title About
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Mission
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Business Model
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Labs
          .main-footer-widget__title Request
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Icon
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Photo Shooting
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Lunacy feature


        .main-footer-widget
          .main-footer-widget__title For Developers
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Icons API
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Omg-Img
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Photos API
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Music API
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Icons for Open Source

        .main-footer-widget
          .main-footer-widget__title Support
          .main-footer-widget__items
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Forums
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") FAQ
            .main-footer-widget__item
              a.main-footer-widget__link(href="#") Contact us

      .main-footer-foot
        .main-footer-llc © Icons8 LLC
        .main-footer-pp
          a.main-footer-pp__link(href="#") Privacy Policy
        .main-footer-tc
          a.main-footer-tc__link(href="#") Terms and Conditions
        .main-footer-cdn
          | Accelerated by 
          a.main-footer-cdn__link(href="#") KeyCDN
</template>

<script>
  export default {
    name: 'MainFooter'
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col {
    position: relative;
    width: 100%;
    min-height: 1px;
  }

  .label {
    display: inline-block;
    vertical-align: middle;
    line-height: 14px;
    background-color: #919191;
    font-size: 10px;
    margin: 0 5px;
    padding: 0 5px;
    border-radius: 7px;
    color: #fff;
    cursor: default;
    user-select: none;
    
    &_new {
      background-color: #0ca940;
      color: #fff;
    }
    &_upgrage {
      background-color: #4c64de;
      color: #fff;
    }
  }

  .main-footer {
    position: relative;
    background-color: #232323;
    color: #919191;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    padding: 24px 0;

    &-container {
      max-width: 1600px;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      margin-right: auto;
      margin-left: auto;
    }

    &-head,
    &-body,
    &-foot {
      display: flex;
      flex-wrap: wrap;
      margin-right: -16px;
      margin-left: -16px;
    }

    &-foot {
      padding-top: 10px;
    }

    &-widget {
      position: relative;
      width: 100%;
      min-height: 1px;
      padding-left: 16px;
      padding-right: 16px;

      &__title {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        padding-top: 24px;
        margin-bottom: 16px;
      }
      &__items {
        margin: 0 -6px 16px;
      }
      &__item {
        display: inline-block;
        padding: 0 6px;
        margin-bottom: 10px;
      }
      &__link {
        color: rgba(255,255,255,.5);
        text-decoration: none;
        transition: color 200ms ease;
        &:hover {
          color: rgba(255,255,255,.3);
        }
      }
      &__socials {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px 16px;
      }
      &__social {
        position: relative;
        min-height: 1px;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
        .main-footer-widget__link {
          display: block;
          width: 40px;
          height: 40px;
          opacity: .5;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          &:hover {
            opacity: .3;
          }
        }
        &_1 {
          .main-footer-widget__link {
            background-image: url(/img/social-1.svg);
          }
        }
        &_2 {
          .main-footer-widget__link {
            background-image: url(/img/social-2.svg);
          }
        }
        &_3 {
          .main-footer-widget__link {
            background-image: url(/img/social-3.svg);
          }
        }
        &_4 {
          .main-footer-widget__link {
            background-image: url(/img/social-4.svg);
          }
        }
      }

      &__subscribe {
        position: relative;
        display: block;
        width: 100%;
        max-width: 200px;
        margin-bottom: 16px;
        cursor: pointer;
        font-size: 14px;
        line-height: 20px;
        color: rgba(255,255,255,.5);
        background-color: transparent;
        padding: 4px 24px 4px 8px;
        border: 1px solid rgba(255,255,255,.5);
        text-align: left;
        transition: color 200ms ease, border-color 200ms ease;
        user-select: none;
        &:hover {
          color: rgba(255,255,255,.3);
          border-color: rgba(255,255,255,.3);
          &::after {
            opacity: .3;
          }
        }
        &:focus {
          outline: none;
        }
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 8px;
          background: url(/img/arrow-left.svg) no-repeat 0 0;
          width: 13px;
          height: 7px;
          opacity: .5;
          margin-top: -3px;
          transition: opacity 200ms ease;
        }
      }
    }

    &-llc,
    &-pp,
    &-tc,
    &-cdn {
      position: relative;
      min-height: 1px;
      padding-left: 16px;
      padding-right: 16px;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
      margin-bottom: 10px;
      &__link {
        color: #919191;
        text-decoration: none;
        transition: color 200ms ease;
        &:hover {
          color: #646464;
        }
      }
    }
    &-cdn {
      &__link {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    .main-footer {
      &-container {
        padding-left: 40px;
        padding-right: 40px;
      }

      &-widget {
        width: (100% / 3);
      }
      &-cdn {
        width: (100% / 3);
        max-width: 100%;
        margin-left: auto;
      }
    }
  }

  @media (min-width: 1200px) {
    .main-footer {
      &-widget {
        width: (100% / 6);
        &__items {
          margin-right: 0;
          margin-left: 0;
        }
        &__item {
          display: block;
          padding-right: 0;
          padding-left: 0;
        }
      }

      &-llc {
        width: (100% / 6);
        max-width: 100%;
      }
      &-cdn {
        width: (100% / 6);
      }
    }
  }
</style>
