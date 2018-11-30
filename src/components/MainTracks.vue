<template lang="pug">
  section.main-tracks
    aside.main-tracks-nav
      .main-tracks-nav__search
        input.main-tracks-nav__search-input(
          type="text"
          v-model="search"
        )
      .main-tracks-nav__items
        .main-tracks-nav__tabs
          .main-tracks-nav__item
            a.main-tracks-nav__link.main-tracks-nav__link_active(href="#") Themes
            sup.main-tracks-nav__sup 42
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Genres
            sup.main-tracks-nav__sup 28
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Genres
            sup.main-tracks-nav__sup 30
        .main-tracks-nav__content
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Action
            sup.main-tracks-nav__sup 42
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Adventure
            sup.main-tracks-nav__sup 42
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Battle
            sup.main-tracks-nav__sup 42
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Business
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Cartoons
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") City
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Comedy
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Commercial
          .main-tracks-nav__item
            a.main-tracks-nav__link(href="#") Corporate
    main.main-tracks-content
      .main-tracks-list
        .main-tracks-list__title Action

        template(
          v-if="!tracksList.length"
        )
          .main-tracks-list__skeletons
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
            .main-tracks-list__skeleton
              .main-tracks-list__skeleton-wrap
                .main-tracks-list__skeleton-cover
                .main-tracks-list__skeleton-layout
                  .main-tracks-list__skeleton-name
                  .main-tracks-list__skeleton-timeline
                .main-tracks-list__skeleton-tags
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag
                  .main-tracks-list__skeleton-tag

        template(
          v-if="tracksList.length && filteredList.length"
        )
          .main-tracks-list__items
            .main-tracks-list__item(
              v-for="(item,index) in filteredList"
              :key="index"
            )
              .main-tracks-list__item-wrap
                .main-tracks-list__item-cover(
                  @click="playTrack(item)"
                  :class="{ 'main-tracks-list__item-cover_active' : item.play }"
                )
                  img(:src="item.img" alt="")
                .main-tracks-list__item-layout
                  .main-tracks-list__item-name
                    a(href="#") {{ item.name }}
                  .main-tracks-list__item-author
                    a(href="#") {{ item.author }}
                  .main-tracks-list__item-download(
                    @click="dialog.download = true"
                  )
                  .main-tracks-list__item-timeline
                  .main-tracks-list__item-time {{ item.time }}
                .main-tracks-list__item-tags
                  .main-tracks-list__item-tag.main-tracks-list__item-tag_special Content Id
                  .main-tracks-list__item-tag Atmospheric
                  .main-tracks-list__item-tag.main-tracks-list__item-tag_more


        template(
          v-if="tracksList.length && !filteredList.length"
        )
          .main-tracks-list__oops
            .main-tracks-list__oops-text
              | Oops... Seems that we don't have Action category yet.
              br
              | If you think that category is important, 
              a.main-tracks-list__oops-link(href="#") please let us know
            a.main-tracks-list__oops-btn(href="#") Back to all categories

      .main-tracks-banner
        .main-tracks-banner__col
          h4 Paid or Free, You Are Our Hero
          p
            | The icons, sounds, and photos are free for personal use and also free for commercial use, but we require linking to our web site. We distribute them under the license called 
            a(href="#") Creative Commons Attribution-NoDerivs 3.0 Unported.
            | Alternatively, you could 
            a(href="#") buy a license
            | that doesn't require any linking.
        .main-tracks-banner__col
          a(href="#")
            img(src="/img/banner.png" alt="")
    main-dialog(v-model="dialog.download")
</template>

<script>
  import MainDialog from '@/components/MainDialog';

  export default {
    name: 'TracksList',
    components: {
      MainDialog
    },
    data: function () {
      return {
        currentTrack: null,
        tracksList: [],
        search: '',
        dialog: {
          download: false
        }
      }
    },
    watch: {
      currentTrack: function (newTrack, oldTrack) {
        if (oldTrack) oldTrack.play = false;
      }
    },
    computed: {
      filteredList () {
        var search = this.search;
        return this.tracksList.filter(function (item) {
          if(search === '') {
            return true;
          }
          else {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          }
        });
      }
    },
    methods: {
      playTrack (track) {
        this.currentTrack = track;
        this.currentTrack.play = !track.play;
      }
    },
    mounted: function () {
      var self = this;
      setTimeout(function () {
        self.tracksList = [
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            img: '/img/cover-1.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            img: '/img/cover-1.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            img: '/img/cover-1.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            img: '/img/cover-1.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            img: '/img/cover-1.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            img: '/img/cover-1.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
          {
            play: false,
            name: 'Inside',
            author: 'Denis Stelmach',
            time: '4:14',
          },
          {
            play: false,
            name: 'Bad king of mongrel',
            author: 'Junkyard Storytellaz',
            img: '/img/cover-2.png',
            time: '4:14',
          },
        ];
        self.currentTrack = self.tracksList[0];
      },10000);

    }
  }
</script>

<style scoped lang="scss">
  .main-tracks {
    display: flex;
    flex-wrap: wrap;

    &-nav {
      position: relative;
      width: 100%;
      min-height: 1px;
      background-color: #F5F5F5;
      &__search {
        border-bottom: 1px solid #e2e2e2;
        &-input {
          height: 54px;
          padding: 16px 24px 16px 48px;
          font-size: 16px;
          line-height: 20px;
          color: #333;
          border: 1px solid transparent;
          background: transparent url(/img/search.svg) no-repeat 24px 50%;
          &:focus {
            outline: none;
          }
        }
      }
      &__items {
        display: flex;
        flex-wrap: wrap;
      }
      &__tabs {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding: 8px 24px;
        .main-tracks-nav__link {
          color: #999;
          &:hover {
            color: #333;
          }
          &_active {
            color: #333;
          }
        }
      }
      &__content {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding: 8px 24px 24px;
      }

      &__item {
        display: inline-block;
        margin-right: 16px;
        margin-top: 16px;
        white-space: nowrap;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }

      &__link {
        color: #333;
        text-decoration: none;
        transition: color 200ms ease;
        &:hover {
          color: #4c64de;
        }
        &_active {
          color: #4c64de;
        }
      }
      &__sup {
        font-size: 9px;
        color: #999;
        margin-left: 4px;
      }
    }

    &-content {
      position: relative;
      width: 100%;
      min-height: 1px;
    }

    &-list {
      padding: 24px;
      &__title {
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
        text-transform: uppercase;
        color: #333;
        margin-bottom: 24px;
      }
      &__oops {
        text-align: center;
        padding-top: 150px;
        padding-bottom: 80px;
        background: url(/img/oops.svg) no-repeat 50% 70px;
        &-text {
          font-size: 18px;
          line-height: 30px;
          color: #999;
          font-weight: 500;
          margin-bottom: 50px;
        }
        &-link {
          color: #333;
          transition: color 200ms ease;
          &:hover {
            color: #4c64de;
          }
        }
        &-btn {
          display: inline-block;
          vertical-align: middle;
          height: 68px;
          padding: 20px 30px;
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;
          color: #333;
          border: 1px solid rgba(51,51,51,.1);
          background-color: #fff;
          margin-bottom: 20px;
          user-select: none;
          cursor: pointer;
          transition: background-color 200ms ease;
          &:hover {
            background-color: rgba(51,51,51,.1);
          }
        }
      }
      &__items {
        display: flex;
        flex-wrap: wrap;
        margin-right: -24px;
        margin-left: -24px;
      }
      &__item {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 24px;
        padding-left: 24px;
        margin-bottom: 24px;
        &-wrap {
          display: flex;
          flex-wrap: wrap;
        }
        &-cover {
          position: relative;
          width: 100%;
          min-height: 1px;
          flex: 0 0 80px;
          max-width: 80px;
          height: 80px;
          background: #F5F5F5 url(/img/bg-cover.svg) no-repeat 50%;
          margin-bottom: 8px;
          cursor: pointer;
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #1A1C1D;
            opacity: 0;
            transition: opacity 200ms ease;
          }
          &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: url(/img/play-track.svg) no-repeat 50%;
            opacity: 0;
            transition: opacity 200ms ease;
          }
          &:hover {
            &::before {
              opacity: .8;
            }
            &::after {
              opacity: 1;
            }
          }
          &_active {
            &::before {
              opacity: .8;
            }
            &::after {
              opacity: 1;
              background: url(/img/pause-track.svg) no-repeat 50%;
            }
          }
        }
        &-layout {
          position: relative;
          width: 100%;
          min-height: 1px;
          flex: 0 0 calc(100% - 80px);
          max-width: calc(100% - 80px);
          padding-left: 16px;
          padding-right: 40px;
          margin-bottom: 8px;
        }
        &-name {
          height: 20px;
          font-weight: 700;
          line-height: 20px;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          text-transform: uppercase;
          a {
            color: #333;
            text-decoration: none;
            transition: color 200ms ease;
            &:hover {
              color: #4c64de;
            }
          }
        }
        &-author {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          a {
            color: #999;
            text-decoration: none;
            transition: color 200ms ease;
            &:hover {
              color: #4c64de;
            }
          }
        }
        &-download {
          position: absolute;
          top: 0;
          right: 0;
          width: 23px;
          height: 23px;
          background: #F5F5F5 url(/img/arrow-down.svg) no-repeat 50%;
          border: 2px solid #333;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 200ms ease, border-color 200ms ease;
          &:hover {
            background-color: #FFD370;
            border-color: #FFD370;
          }
        }
        &-timeline {
          background: repeating-linear-gradient(90deg, #c4c4c4, #c4c4c4 2px, #fff 2px, #fff 4px);
          height: 32px;
          margin-top: 8px;
        }
        &-time {
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 12px;
          line-height: 12px;
          color: #999;
        }
        &-tags {
          position: relative;
          width: 100%;
          min-height: 1px;
        }
        &-tag {
          display: inline-block;
          padding: 5px 10px;
          margin-right: 6px;
          height: 27px;
          font-size: 12px;
          line-height: 12px;
          color: #999;
          border: 1px solid #ebebeb;
          border-radius: 20px;
          vertical-align: middle;
          cursor: pointer;
          transition: border-color 200ms ease, color 200ms ease;
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            border-color: #c4c4c4;
            color: #333;
          }
          &_special {
            background-color: #FFE5A9;
          }
          &_more {
            position: relative;
            width: 37px;
            &::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: url(/img/tags-more.svg) no-repeat 50%;
              opacity: .4;
              transition: opacity 200ms ease;
            }
            &:hover {
              &::before { opacity: 1; }
            }
          }
        }
      }
      &__skeletons {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin-right: -24px;
        margin-left: -24px;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0) 45%, rgba(255,255,255,.8) 50%, rgba(255,255,255,0) 50%);
          background-size: 400% 400%;
          z-index: 100;
          animation: loading 3s linear infinite;
          @keyframes loading {
            0% {
              background-position: 0% 0%
            }
            100% {
              background-position: -135% 0%
            }
          }
        }
      }
      &__skeleton {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 24px;
        padding-left: 24px;
        margin-bottom: 24px;
        display: none;
        &:nth-child(3n+1){
          display: block;
        }
        &-wrap {
          display: flex;
          flex-wrap: wrap;
        }
        &-cover {
          position: relative;
          width: 100%;
          min-height: 1px;
          flex: 0 0 80px;
          max-width: 80px;
          height: 80px;
          background-color: #f5f5f5;
          border-radius: 8px;
          margin-bottom: 8px;
        }
        &-layout {
          position: relative;
          width: 100%;
          min-height: 1px;
          flex-grow: 1;
          flex-basis: 0px;
          max-width: 100%;
          padding-left: 8px;
        }
        &-name {
          width: 100%;
          height: 32px;
          border-radius: 8px;
          background-color: #f5f5f5;
          margin-bottom: 8px;
        }
        &-timeline {
          width: 100%;
          height: 40px;
          border-radius: 8px;
          background-color: #f5f5f5;
        }
        &-tags {
          position: relative;
          width: 100%;
          min-height: 1px;
        }
        &-tag {
          float: left;
          height: 28px;
          border-radius: 8px;
          background-color: #f5f5f5;
          &:nth-child(1) {
            width: 40%;
          }
          &:nth-child(2) {
            width: calc(35% - 8px);
            margin-left: 8px;
          }
          &:nth-child(3) {
            width: calc(25% - 8px);
            margin-left: 8px;
          }
        }
      }
    }

    &-banner {
      display: flex;
      flex-wrap: wrap;
      background-color: #FFD370;
      align-items: center;
      &__col {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding: 24px;
        color: #333;
        &:last-child {
          padding-top: 0;
          padding-bottom: 0;
          text-align: center;
        }
        h4 {
          margin: 20px 0;
          font-size: 24px;
          line-height: 34px;
        }
        p {
          font-size: 16px;
          line-height: 24px;
          margin: 20px 0;
          color: rgba(51,51,51,.6);
        }
        a {
          color: #333;
        }
        img {
          display: inline-block;
          max-width: 100%;
          min-height: auto;
          margin-bottom: 24px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .main-tracks {
      &-list {
        &__item {
          flex: 0 0 (100% / 2);
          max-width: (100% / 2);
        }
        &__skeleton {
          flex: 0 0 (100% / 2);
          max-width: (100% / 2);
          &:nth-child(3n+2){
            display: block;
          }
        }
      }
      &-banner {
        &__col {
          flex: 0 0 (100% / 2);
          max-width: (100% / 2);
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .main-tracks {
      &-nav {
        flex: 0 0 320px;
        max-width: 320px;

        &__tabs {
          flex: 0 0 120px;
          max-width: 120px;
          // height: calc(100% - 54px);
          padding-top: 24px;
          padding-right: 0;
          padding-bottom: 24px;
        }
        &__content {
          flex: 0 0 200px;
          max-width: 200px;
          // height: calc(100% - 54px);
          padding-top: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }
        &__item {
          display: block;
          margin-right: 0;
        }
      }
      &-content {
        flex-grow: 1;
        flex-basis: 0px;
        max-width: 100%;
      }
      &-list {
        padding: 0 48px;
        margin: 48px 0;
        &__title {
          font-size: 40px;
          line-height: 50px;
          margin-bottom: 32px;
        }
        &__items {
          margin-right: -32px;
          margin-left: -32px;
        }
        &__item {
          padding-right: 32px;
          padding-left: 32px;
          margin-bottom: 32px;
        }
        &__skeletons {
          margin-right: -32px;
          margin-left: -32px;
        }
        &__skeleton {
          padding-right: 32px;
          padding-left: 32px;
          margin-bottom: 32px;
        }
      }

      &-banner {
        &__col {
          padding: 48px;
        }
      }
    }
  }

  @media (min-width: 1346px) {
    .main-tracks {
      &-list {
        &__item {
          flex: 0 0 (100% / 3);
          max-width: (100% / 3);
        }
        &__skeleton {
          flex: 0 0 (100% / 3);
          max-width: (100% / 3);
          &:nth-child(3n+3){
            display: block;
          }
        }
      }
      &-banner {
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
  }
</style>
