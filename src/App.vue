<template>
  <div id="app">
    <main-header/>
    <router-view/>
    <main-footer/>
    <main-player/>
  </div>
</template>

<script>

import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';
import MainPlayer from '@/components/MainPlayer';

export default {
  components: {
    MainHeader,
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

.container {
  max-width: 1600px;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  margin-right: auto;
  margin-left: auto;
}

input::-ms-clear {
  display: none;
}

</style>