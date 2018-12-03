<template lang="pug">
  .list-undefined
    .list-undefined__title Search
    .list-undefined__wrap
      .list-undefined__text
        | Oops... Seems that we don't have Action category yet.
        br
        | If you think that category is important, 
        router-link.list-undefined__link(to="/") please let us know
      router-link.list-undefined__btn(to="/") Back to all categories
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>

