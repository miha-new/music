<template lang="pug">
  section.audio-player
    .audio-player__container
      .audio-player__cover
        img(src="/img/cover-1.png" alt="")
      .audio-player__control
        button.audio-player__control-prev
        button.audio-player__control-play
        button.audio-player__control-next
      .audio-player__layout
        a.audio-player__layout-name(href="#" @click.prevent) Indie
        a.audio-player__layout-author(href="#" @click.prevent) Denis Stelmach
        .audio-player__layout-timeline
        .audio-player__layout-time 4:14
      .audio-player__download
        button.audio-player__download-btn Download
    .audio-player__error
      .audio-player__container
        .audio-player__error-text
          | We can’t deliver track to you because the connection issue. Refresh
          button.audio-player__error-refresh
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
