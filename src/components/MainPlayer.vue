<template lang="pug">
  .main-player
    .main-player-container
      .main-player__cover
        img(src="/img/cover-1.png" alt="")
      .main-player__control
        button.main-player__control-prev
        button.main-player__control-play
        button.main-player__control-next
      .main-player__layout
        a.main-player__layout-name(href="#") Indie
        a.main-player__layout-author(href="#") Denis Stelmach
        .main-player__layout-timeline
        .main-player__layout-time 4:14
      .main-player__download
        button.main-player__download-btn Download
</template>

<script>
  export default {
    name: 'MainPlayer',
  }
</script>

<style scoped lang="scss">
  .main-player {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    z-index: 200;
    overflow: hidden;
    height: 80px;
    background-color: #232323;
    border-top: 1px solid rgba(255, 255, 255, .5);
    @media (min-width: 768px){
      right: calc(-1 * (100vw - 100%));
    }
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

    &__cover {
      position: relative;
      width: 100%;
      min-height: 1px;
      flex: 0 0 54px;
      max-width: 54px;
      height: 54px;
      background: #F5F5F5 url(/img/bg-cover.svg) no-repeat 50%;
      user-select: none;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }

    &__control {
      position: relative;
      width: 100%;
      min-height: 1px;
      flex: 0 0 178px;
      max-width: 178px;
      padding: 0 32px;
      height: 54px;
      margin-left: auto;
      margin-right: auto;
      &-play {
        width: 36px;
        height: 36px;
        margin: 9px 1px;
        background: url(/img/play-ctrl.svg) no-repeat 50%;
        border: none;
        cursor: pointer;
      }
      &-prev {
        width: 36px;
        height: 36px;
        margin: 9px 1px;
        background: url(/img/prev-ctrl.svg) no-repeat 50%;
        border: none;
        cursor: pointer;
      }
      &-next {
        width: 36px;
        height: 36px;
        margin: 9px 1px;
        background: url(/img/next-ctrl.svg) no-repeat 50%;
        border: none;
        cursor: pointer;
      }
    }

    &__layout {
      display: none;
    }

    &__download {
      position: relative;
      width: 100%;
      min-height: 1px;
      flex: 0 0 40px;
      max-width: 40px;
      height: 54px;
      text-align: right;
      &-btn {
        display: inline-block;
        width: 40px;
        vertical-align: middle;
        border: none;
        background-color: #fff;
        background: #fff url(/img/arrow-down.svg) no-repeat 16px 50%;
        font-size: 16px;
        line-height: 24px;
        padding: 8px 0 8px 40px;
        margin-top: 7px;
        margin-bottom: 7px;
        border-radius: 20px;
        cursor: pointer;
        user-select: none;
        transition: background-color 200ms ease;
        overflow: hidden;
        &:hover {
          background-color: #FFD370;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .main-player {
      &-container {
        padding-left: 40px;
        padding-right: 40px;
      }
      &__layout {
        position: relative;
        display: block;
        width: 100%;
        min-height: 1px;
        flex-grow: 1;
        flex-basis: 0px;
        height: 54px;
        line-height: 14px;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 40px;
        user-select: none;
        &-name {
          display: inline-block;
          height: 20px;
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          transition: color 200ms ease;
          &:hover {
            color: #4c64de;
          }
        }
        &-author {
          display: inline-block;
          height: 20px;
          color: #919191;
          text-decoration: none;
          transition: color 200ms ease;
          margin-left: 8px;
          &:hover {
            color: #4c64de;
          }
        }
        &-timeline {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 32px;
          background: repeating-linear-gradient(90deg, #FFD370, #FFD370 2px, #232323 2px, #232323 4px);
        }
        &-time {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 12px;
          line-height: 14px;
          height: 20px;
          color: #919191;
          background-color: #232323;
        }
      }
      &__download {
        flex: 0 0 150px;
        max-width: 150px;
        &-btn {
          width: 120px;
          padding: 8px 16px 8px 32px;
        }
      }
    }
  }
</style>
