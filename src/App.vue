<template>
  <div class="app">
    <div class="title">
      <div class="search">
        <TextInput v-model="search" class="search-input" placeholder="Search..." />
      </div>
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
<!--    <div class="pagination">-->
<!--      <div-->
<!--          class="page"-->
<!--          v-for="p in pages"-->
<!--          :class="{active: p === page}"-->
<!--          @click="getPage(p)"-->
<!--      >{{p}}</div>-->
<!--    </div>-->
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import axios from 'axios';

import Posts from '@/components/Posts.vue';
import Form from '@/components/Form.vue';
import TextInput from '@/components/ui/TextInput.vue';
import Select from '@/components/ui/Select.vue';

export default {
  name: 'App',
  components: {TextInput, Select, Posts, Form },
  data: function () {
    return {
      list: [],
      dialog: false,
      loading: false,
      selected: '',
      search: '',
      page: 1,
      limit: 10,
      pages: 0,
      isFirstRender: true,
    }
  },
  computed: {
    // вариант с вычисляемым свойством (аналог useMemo)
    sortedPosts() {
      const list = this.search.trim()
        ? this.list.filter(i => i.title.toLowerCase().includes(this.search.trim().toLowerCase())
              || i.body.toLowerCase().includes(this.search.trim().toLowerCase()))
        : this.list;

      if (this.selected) {
        return list.sort((a, b) => a[this.selected].localeCompare(b[this.selected]));
      }
      return list;
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
    // page() {
    //   this.setList();
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
    async fetchPosts() {
      this.loading = true;
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: { _page: this.page, _limit: this.limit },
        });
        this.pages = Math.ceil(res.headers['x-total-count'] / this.limit);
        return res.data;
      } catch (e) {
        console.error(e);
        return [];
      } finally {
        this.loading = false;
      }
    },
    async setList() {
      this.list = await this.fetchPosts();
      this.isFirstRender = false;
    },
    async addToList() {
      this.page += 1;
      this.list = [...this.list, ...await this.fetchPosts()];
    },
    onScroll() {
      const observer = new IntersectionObserver((entries) => {
        if (entries.length > 0 && entries[0].isIntersecting && !this.isFirstRender && this.page < this.pages) {
          this.addToList();
        }
      }, { rootMargin: '0px', threshold: 1.0 });
      observer.observe(this.$refs.observer);
    },
    // getPage(page) {
    //   this.page = page;
    // },
  },
  mounted() {
    this.setList();
    this.onScroll();
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
  .search {
    position: absolute;
    left: 0;
    width: 200px;
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
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    padding-top: 12px;
  }
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #cccccc;
    cursor: pointer;

    &.active {
      background-color: teal;
      color: white;
      cursor: default;
    }
  }
</style>
