<template lang="pug">
  .list-tracks
    .list-tracks__title(
      v-if="title"
    ) {{ title }}
    .list-tracks__items
      .list-tracks__item(
        v-for="item in items"
      )
        .list-tracks__item-wrap
          .list-tracks__item-cover
            img.list-tracks__item-cover-img(:src="item.img" alt="")
          .list-tracks__item-layout
            .list-tracks__item-name
              a.list-tracks__item-name-link(href="#") {{ item.name }}
            .list-tracks__item-author
              a.list-tracks__item-author-link(href="#") {{ item.author }}
            .list-tracks__item-download
            .list-tracks__item-timeline
            .list-tracks__item-time {{ item.time }}
          .list-tracks__item-tags
            .list-tracks__item-tag.list-tracks__item-tag_special Content Id
            .list-tracks__item-tag Atmospheric
            .list-tracks__item-tag.list-tracks__item-tag_more
    router-link.list-tracks__btn-more(
      to="/"
      v-if="items.length > 6"
    ) Show more
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>

