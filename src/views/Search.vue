<template lang="pug">
  section.search-content
    track-lists
</template>

<script>
  import TrackLists from '@/components/TrackLists';

  export default {
    name: 'search',
    components: {
      TrackLists,
    },
  }
</script>

<style scoped lang="scss">

</style>