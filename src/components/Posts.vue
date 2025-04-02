<template>
  <div class="list">
    <div class="empty" v-if="!list.length">List is empty...</div>
    <template v-else>
      <div class="post" v-for="p in list" :key="p.id">
        <div class="post__title">Title: <b>{{p.title}}</b></div>
        <div class="post_desc">Desc: <b>{{p.desc}}</b></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    list: Array,
  }
}
</script>

<style scoped lang="scss">
.empty {
  margin-top: 20px;
  text-align: center;
}
.post {
  margin-top: 20px;
  padding: 12px;
  border: 2px solid teal;

  &__title {
    color: teal;
    border-bottom: 1px dotted teal;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }
}
</style>
