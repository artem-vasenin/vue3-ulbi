<template>
  <div class="app">
    <Form @add="onAdd" />
    <Posts :list="list" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'App',
  components: { Posts, Form },
  data: function () {
    return {
      list: [],
    }
  },
  methods: {
    onAdd(form) {
      this.list.push({id: Date.now(), title: form.title, desc: form.desc});
    },
  },
}
</script>

<style lang="scss">
  * { padding: 0; margin: 0; box-sizing: border-box; }
  .app {
    padding: 20px;
  }
</style>
