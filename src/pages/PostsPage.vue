<template>
  <div class="posts">
    <div class="title">
      <div class="search">
        <TextInput :model-value="search" @update:model-value="setSearch" class="search-input" placeholder="Search..." />
      </div>
      Posts list
      <div class="actions">
        <Select
            :model-value="selected"
            @update:model-value="setSelected"
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
    <div v-intersection="addToList" class="observer"></div>
  </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex';

import Posts from '@/components/Posts.vue';
import Form from '@/components/Form.vue';
import TextInput from '@/components/ui/TextInput.vue';
import Select from '@/components/ui/Select.vue';

export default {
  name: 'PostsPage',
  components: {TextInput, Select, Posts, Form },
  data: function () {
    return {
      dialog: false,
    }
  },
  methods: {
    ...mapActions({
      setSearch: 'postStore/setSearch',
      setSelected: 'postStore/setSelected',
      onAdd: 'postStore/onAdd',
      onDel: 'postStore/onDel',
      addToList: 'postStore/addToList',
    }),
    hideModal() {
      this.dialog = false;
    },
  },
  computed: {
    ...mapState({
      loading: 'postStore/loading',
      search: 'postStore/search',
      selected: 'postStore/selected',
    }),
    ...mapGetters({
      sortedPosts: 'postStore/sortedPosts',
    })
  },
  mounted() {
    this.$store.dispatch("postStore/setList");
  },
  unmounted() {
    this.$store.dispatch("postStore/clearPage");
  },
}
</script>

<style scoped lang="scss">
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
