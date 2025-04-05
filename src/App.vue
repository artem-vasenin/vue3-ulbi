<template>
  <div class="app">
    <div class="title">
      Posts list
      <div class="actions">
        <Select
            v-model="selected"
            :options="[{name: 'title', value: 'title'}, {name: 'body', value: 'body'}]"
        />
        <span class="add" @click="dialog=true">Add new</span>
      </div>
    </div>
    <Dialog v-model:show="dialog" @click="hideModal">
      <Form @add="onAdd" />
    </Dialog>
    <div v-if="loading">Loading...</div>
    <Posts v-else :list="sortedPosts" @del="onDel" />
  </div>
</template>

<script>
import axios from 'axios';

import Posts from '@/components/Posts.vue';
import Form from '@/components/Form.vue';
import Select from '@/components/ui/Select.vue';

export default {
  name: 'App',
  components: {Select, Posts, Form },
  data: function () {
    return {
      list: [],
      dialog: false,
      loading: false,
      selected: '',
    }
  },
  computed: {
    // вариант с вычисляемым свойством (аналог useMemo)
    sortedPosts() {
      if (this.selected) {
        return [...this.list].sort((a, b) => a[this.selected].localeCompare(b[this.selected]));
      }
      return this.list;
    },
  },
  watch: {
    // вариант с вотчером
    // selected(value) {
    //   if (value) {
    //     this.list.sort((a, b) => {
    //       return a[value]?.localeCompare(b[value]);
    //     });
    //   }
    // },
  },
  methods: {
    onAdd(form) {
      this.list.push({id: Date.now(), title: form.title, body: form.body});
      this.dialog = false;
    },
    onDel(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    hideModal() {
      this.dialog = false;
    },
    async getList() {
      this.loading = true;
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.list = res.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getList();
  },
}
</script>

<style lang="scss">
  * { padding: 0; margin: 0; box-sizing: border-box; }
  .app {
    padding: 20px;
  }
  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .actions {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
  .add {
    display: inline-flex;
    font-size: 12px;
    padding: 4px 10px;
    background: teal;
    color: white;
    right: 0;
    cursor: pointer;
  }
</style>
