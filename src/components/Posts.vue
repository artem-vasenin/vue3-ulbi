<template>
  <div class="list">
    <div class="empty" v-if="!list.length">List is empty...</div>
    <template v-else>
      <div class="post" v-for="p in list" :key="p.id">
        <div class="post__title">Title: <b>{{p.title}}</b></div>
        <div class="post_desc">Desc: <b>{{p.body}}</b></div>
        <button class="post__del" @click="del(p.id)">del</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    list: Array,
  },
  methods: {
    del(id) {
      this.$emit('del', id);
    }
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
  position: relative;

  &__title {
    color: teal;
    border-bottom: 1px dotted teal;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }
  &__del {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #80007a;
    color: white;
    position: absolute;
    right: -10px;
    top: -10px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0 0 4px rgba(0, 0, 0, .4);

    &:hover {
      opacity: 1;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
    }
  }
}
</style>
