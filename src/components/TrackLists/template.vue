<template lang="pug">
  section.track-lists
    aside.track-lists__sidebar
      .track-lists__sidebar-search
        input.track-lists__sidebar-search-input(
          type="text"
          v-model="search"
          @keydown.enter.prevent="handlerSearch"
        )
        button.track-lists__sidebar-search-remove(
          v-if="search"
          @click="search = ''"
        )
      .track-lists__sidebar-nav
        .track-lists__sidebar-tabs
          .track-lists__sidebar-tab(
            v-for="item in tabs.options"
          )
            a.track-lists__sidebar-tab-link(
              href="#"
              :class="{ 'track-lists__sidebar-tab-link_active' : item.name === tabs.current }"
              @click.prevent="tabs.current = item.name"
            ) {{ item.name }}
            sup.track-lists__sidebar-qty {{ item.qty }}
        .track-lists__sidebar-items
          .track-lists__sidebar-item(
            v-for="item in items.options"
          )
            a.track-lists__sidebar-item-link(
              href="#"
              @click.prevent="handlerCategory"
            ) {{ item.name }}
            sup.track-lists__sidebar-qty {{ item.qty }}
          
    .track-lists__content
      template(v-if="$route.name !== 'search' && $route.name !== 'category'")
        template(v-if="!tracksReady")
          list-skeletons(:title="'Action'")
          list-skeletons(:title="'Indie'")
          list-skeletons(:title="'Classical'")
        template(v-else)
          list-tracks(:title="'Action'" :items="tracks.slice(0, 6)")
          list-tracks(:title="'Indie'" :items="tracks.slice(0, 6)")
          list-tracks(:title="'Classical'" :items="tracks.slice(0, 6)")

      template(v-else-if="$route.name === 'category'")
        template(v-if="!tracksReady")
          list-skeletons(:title="category ? category : items.current" :quantity="9")
        template(v-else)
          list-tracks(:title="category" :items="tracks")

      template(v-else-if="$route.name === 'search'")
        template(v-if="!searchResults")
          list-undefined(:title="'Search'")
        template(v-else-if="!tracksReady")
          list-skeletons(:title="'Search'" :quantity="9")
        template(v-else)
          list-tracks(:title="'Search'" :items="tracks")

      slot

</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>

