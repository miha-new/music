<template lang="pug">
  .list-skeletons
    .list-skeletons__title(
      v-if="title"
    ) {{ title }}
    .list-skeletons__items
      .list-skeletons__item(
        v-for="index in quantity"
      )
        .list-skeletons__item-wrap
          .list-skeletons__item-cover
          .list-skeletons__item-layout
            .list-skeletons__item-name
            .list-skeletons__item-timeline
          .list-skeletons__item-tags
            .list-skeletons__item-tag
            .list-skeletons__item-tag
            .list-skeletons__item-tag
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>

