<template>
  <div class="form">
    <input class="input" type="text" v-model="form.title">
    <input class="input" type="text" v-model="form.desc">
    <button class="btn" @click="onAdd">Add</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      form: {
        title: '',
        desc: '',
      },
    };
  },
  methods: {
    onAdd() {
      if (!this.form.title || !this.form.desc) return;
      this.$emit('add', this.form);
      this.form = { title: '', desc: '' };
    },
  }
};
</script>

<style scoped lang="scss">
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
</style>
