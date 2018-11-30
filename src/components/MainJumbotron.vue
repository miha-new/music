<template lang="pug">
  .main-jumbotron
    .main-jumbotron-container
      .main-jumbotron__layout
        h1.main-jumbotron__title
          | Music for
          br
          | your videos.
          br
          | Free.
        p.main-jumbotron__text
          | Much, much more picky than other marketplaces. Much, much cheaper than Hans Zimmer, In fact, it's 
          a.main-jumbotron__link(href="#") free for a link.
        button.main-jumbotron__btn Play Tracks
</template>

<script>
  export default {
    name: 'MainJumbotron'
  }
</script>

<style scoped lang="scss">
  .main-jumbotron {
    position: relative;
    background-image: linear-gradient(180deg, #E4E2E3 0%, #E9E5E4 100%);
    text-align: left;
    padding-top: 80px;
    padding-bottom: 40px;
    overflow: hidden;
    margin-top: -57px;
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: url(/img/bg-jumbotron.png) no-repeat 100% 100%;
      background-size: contain;
      opacity: .6;
    }
    
    &-container {
      max-width: 1600px;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      margin-right: auto;
      margin-left: auto;

    }

    &__layout {
      position: relative;
      width: 270px;
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
      transition: color 200ms ease;
      &:hover {
        color: #4c64de;
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
      transition: color 200ms ease;
      color: #333;
      cursor: pointer;
      &:hover {
        color: #4c64de;
      }
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
    }
  }

  @media (min-width: 768px) {
    .main-jumbotron {
      padding-top: 120px;
      padding-bottom: 60px;

      &__layout {
        width: 420px;
      }
    }
  }

  @media (min-width: 1200px) {
    .main-jumbotron {
      padding-top: 158px;
      padding-bottom: 74px;
      &::before {
        opacity: 1;
      }

      &-container {
        padding-left: 40px;
        padding-right: 40px;
      }

      &__layout {
        width: 560px;
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
  }

  @media (min-width: 1600px) {
    .main-jumbotron {
      &::before {
        left: 350px;
        background-position: 50% 100%;
      }
      &__btn {
        position: absolute;
        right: -210px;
        bottom: 8px;
      }
    }
  }
</style>
