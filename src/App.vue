<template>
<div class="app">
  <Nav />
  <router-view></router-view>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: "App",
  components: {Nav},
}
</script>

<style lang="scss">
* { padding: 0; margin: 0; box-sizing: border-box; }
.app {
  padding: 20px;
}
</style>
