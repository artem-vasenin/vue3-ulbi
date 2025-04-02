<template>
  <div class="app">
    <h1 class="title">Posts list <span class="add" @click="dialog=true">Add new</span></h1>
    <Dialog v-model:show="dialog" @click="hideModal">
      <Form @add="onAdd" />
    </Dialog>
    <Posts :list="list" @del="onDel" />
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
      dialog: false,
    }
  },
  methods: {
    onAdd(form) {
      this.list.push({id: Date.now(), title: form.title, desc: form.desc});
      this.dialog = false;
    },
    onDel(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    hideModal() {
      this.dialog = false;
    },
  },
}
</script>

<style lang="scss">
  * { padding: 0; margin: 0; box-sizing: border-box; }
  .app {
    padding: 20px;
  }
  .title {
    text-align: center;
    position: relative;
  }
  .add {
    display: inline-flex;
    position: absolute;
    font-size: 12px;
    padding: 4px 10px;
    background: teal;
    color: white;
    right: 0;
    cursor: pointer;
  }
</style>
