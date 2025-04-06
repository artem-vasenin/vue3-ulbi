<template>
<div class="post">
  <h1>{{post.title}} #{{post.id}}</h1>
  <p class="desc">
    {{post.body}}
  </p>
</div>
</template>

<script>
export default {
  name: 'PostPage',

}
</script>

<style scoped lang="scss">

</style>
