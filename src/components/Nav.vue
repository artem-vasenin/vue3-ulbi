<template>
<nav class="nav">
  <router-link to="/">Main</router-link>
  <router-link to="/posts">Posts</router-link>
</nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  a {
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    color: teal;
  }
}
</style>
