<template>
  <div class="app">
    <div class="form">
      <input class="input" type="text" v-model="form.title">
      <input class="input" type="text" v-model="form.desc">
      <button class="btn" @click="onAdd">Add</button>
    </div>
    <div class="list" v-for="p in list" :key="p.id">
      <div class="post">
        <div class="post__title">Title: <b>{{p.title}}</b></div>
        <div class="post_desc">Desc: <b>{{p.desc}}</b></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      list: [
        {id: 1, title: 'JS', desc: 'Javascript learning'},
        {id: 2, title: 'Go', desc: 'GoLang learning'},
        {id: 3, title: 'Python', desc: 'Python learning'},
        {id: 4, title: 'PHP', desc: 'PHP learning'},
      ],
      form: {
        title: '',
        desc: '',
      }
    }
  },
  methods: {
    onAdd() {
      if (!this.form.title || !this.form.desc) return;
      this.list.push({id: Date.now(), title: this.form.title, desc: this.form.desc});
      this.form = { title: '', desc: '' };
    },
  }
}
</script>

<style lang="scss">
  * { padding: 0; margin: 0; box-sizing: border-box; }
  .app {
    padding: 20px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
  }
  .input {
    width: 100%;
    height: 30px;
    border: 2px solid teal;
  }
  .btn {
    background: teal;
    color: white;
    border: none;
    font-size: 16px;
    height: 30px;
    cursor: pointer;
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
