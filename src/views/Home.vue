<template lang="pug">
  section.home-content
    .home-jumbotron
      .home-jumbotron__bg(:class="{ 'home-jumbotron__bg_ready' : imgReady }")
      .home-jumbotron__layout
        .home-jumbotron__wrap
          h1.home-jumbotron__title
            | Music for
            br
            | your videos.
            br
            | Free.
          p.home-jumbotron__text
            | Much, much more picky than other marketplaces. Much, much cheaper than Hans Zimmer, In fact, it's 
            a.home-jumbotron__link(href="#") free for a link.
          a.home-jumbotron__btn(
            href="#"
            role="button"
            click.prevent
          ) Play Tracks
    track-lists
      section.home-banner
        .home-banner__col
          h4.home-banner__title Paid or Free, You Are Our Hero
          p.home-banner__text
            | The icons, sounds, and photos are free for personal use and also free for commercial use, but we require linking to our web site. We distribute them under the license called 
            router-link.home-banner__link(to="/") Creative Commons Attribution-NoDerivs 3.0 Unported.
            |  Alternatively, you could 
            router-link.home-banner__link(to="/") buy a license
            |  that doesn't require any linking.
        .home-banner__col
          router-link.home-banner__link-buy(to="/")
            img.home-banner__img(src="/img/banner.png" alt="")
</template>

<script>
  import TrackLists from '@/components/TrackLists';

  export default {
    name: 'home',
    components: {
      TrackLists,
    },
    data: function () {
      return {
        imgReady: false,
      }
    },
    mounted: function () {
      let self = this;
      let body = document.body;
      let img = document.createElement('img');

      img.src = '/img/bg-jumbotron.png';
      img.classList.add('.img-preload');

      body.appendChild(img);

      img.addEventListener('load', () => {
        self.imgReady = true;
        body.removeChild(img);
      });
    }
  }
</script>

<style scoped lang="scss">
  .home-jumbotron {
    position: relative;
    background-image: linear-gradient(180deg, #E4E2E3 0%, #E9E5E4 100%);
    text-align: left;
    padding-top: 80px;
    padding-bottom: 40px;
    margin-top: -65px;
    &__bg {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      opacity: .6;
      z-index: 10;
      overflow: hidden;
      &::before,
      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-repeat: no-repeat;
        background-position: 100% 100%;
        background-size: contain;
        filter: blur(10px);
      }
      &::before {
        background-image: url(/img/bg-jumbotron-blur.png?v=1);
        opacity: 1;
      }
      &::after {
        background-image: url(/img/bg-jumbotron.png?v=1);
        opacity: 0;
      }
    }
    &__bg_ready {
      &::before {
        animation: before 2s;
        animation-fill-mode: forwards;
        @keyframes before {
          0%{
            filter: blur(10px);
            opacity: 1;
          }
          100%{
            filter: blur(0px);
            opacity: 0;
          }
        }
      }
      &::after {
        animation: after 1s;
        animation-fill-mode: forwards;
        @keyframes after {
          0%{
            filter: blur(10px);
            opacity: 0;
          }
          100%{
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
    &__bg-preload {
      position: absolute;
      top: -9999px;
      left: -9999px;
      visibility: hidden;
      width: 0;
      height: 0;
    }
    &__layout {
      position: relative;
      max-width: 1600px;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      margin-right: auto;
      margin-left: auto;
      z-index: 20;
    }
    &__wrap {
      position: relative;
      max-width: 420px;
    }
    &__title {
      font-size: 32px;
      line-height: 40px;
      color: #333;
      text-transform: uppercase;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    &__text {
      font-size: 16px;
      line-height: 24px;
      color: #999;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    &__link {
      text-decoration: none;
      color: #333;
      white-space: nowrap;
      transition: color 200ms;
      &:hover {
        color: #20A2FF;
      }
    }
    &__btn {
      position: relative;
      background-color: transparent;
      border: none;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      padding: 10px 10px 10px 60px;
      transition: color 200ms;
      color: #333;
      user-select: none;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        background-color: #FFD370;
        border-radius: 50%;
      }
      &::after {
        content: '';
        position: absolute;
        left: 17px;
        top: 16px;
        border: 4px solid transparent;
        border-left: 8px solid #333;
      }
      &:hover {
        color: #20A2FF;
      }
    }
  }
  .home-banner {
    display: flex;
    flex-wrap: wrap;
    background-color: #FFD370;
    &__col {
      position: relative;
      width: 100%;
      min-height: 1px;
      padding: 24px;
      color: #333;
      &:last-child {
        padding-top: 0;
        text-align: center;
      }
    }
    &__title {
      margin: 0 0 20px;
      font-size: 20px;
      line-height: 28px;
    }
    &__text {
      font-size: 14px;
      line-height: 20px;
      margin: 0 0 20px;
      color: rgba(51,51,51,.6);
    }
    &__link {
      color: #333;
      transition: color 200ms; 
      &:hover {
        color: #20A2FF;
      }
    }
    &__link-buy {
      display: inline-block;
      margin-bottom: 24px;
    }
    &__img {
      display: inline-block;
      max-width: 100%;
      min-height: auto;
    }
  }

  @media (min-width: 768px) {
    .home-jumbotron {
      padding-top: 120px;
      padding-bottom: 60px;
      &__wrap {
        max-width: 420px;
      }
    }
    .home-banner {
      &__col {
        flex: 0 0 50%;
        max-width: 50%;
        &:last-child {
          padding-top: 24px;
        }
      }
      &__link-buy {
        margin-top: 48px;
      }
    }
  }

  @media (min-width: 992px) {
    .home-banner {
      &__col {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    .home-jumbotron {
      padding-top: 158px;
      padding-bottom: 74px;
      &__bg {
        opacity: 1;
      }
      &__layout {
        padding-left: 40px;
        padding-right: 40px;
      }
      &__wrap {
        max-width: 560px;
      }
      &__title {
        font-size: 72px;
        line-height: 80px;
      }
      &__text {
        font-size: 20px;
        line-height: 30px;
      }
    }
    .home-banner {
      &__col {
        padding: 48px;
        &:first-child {
          padding-right: 0;
        }
        &:last-child {
          padding-top: 48px;
        }
      }
      &__title {
        font-size: 24px;
        line-height: 34px;
      }
      &__text {
        font-size: 16px;
        line-height: 24px;
      }
      &__link-buy {
        margin-top: 54px;
      }
    }
  }

  @media (min-width: 1600px) {
    .home-jumbotron {
      &__bg {
        max-width: 1600px;
        margin: 0 auto;
      }
      &__btn {
        position: absolute;
        right: -210px;
        bottom: 0;
      }
    }
    .home-banner {
      &__col {
        &:first-child {
          flex-grow: 1;
          flex-basis: 0px;
          max-width: 640px;
        }
        &:last-child {
          flex-grow: 1;
          flex-basis: 0px;
          max-width: 100%;
        }
      }
    }
  }
</style>