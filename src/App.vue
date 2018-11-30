<template>
  <div id="app">
    <main-header/>
    <router-view/>
    <main-tracks/>
    <main-footer/>
    <main-player/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainTracks from '@/components/MainTracks';
import MainFooter from '@/components/MainFooter';
import MainPlayer from '@/components/MainPlayer';

export default {
  components: {
    MainHeader,
    MainTracks,
    MainFooter,
    MainPlayer,
  },
}
</script>

<style lang="scss">
*, ::after, ::before {
    box-sizing: border-box;
}

*:focus {
  outline: none;
}

html {
  min-width: 320px;
  overflow-y: visible;
  overflow-x: hidden;
  @media (min-width: 768px){
    margin-right: calc(-1 * (100vw - 100%));
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Segoe UI, Fira Sans, Roboto, Oxygen, Ubuntu, Droid Sans, Arial, sans-serif;
  font-size: 16px;
}

body, h1, h2, h3, p {
    margin: 0;
    color: #000;
}

main {
  display: block;
}

a {
  text-decoration: none;
}

img {
  border: none;
}

#app {
  position: relative;
  padding-bottom: 80px;
}

.test {
  position: relative;
  z-index: 999;
}

</style>