<template>
  <div class="form">
    <h3>Add task</h3>
    <TextInput class="input" type="text" v-model="form.title"/>
    <TextInput class="input" type="text" v-model="form.body"/>
    <Button class="btn" @click="onAdd">Add</Button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      form: {
        title: '',
        body: '',
      },
    };
  },
  watch: {
    // если мы хотим отслеживать глубокое изменение в объектах (аналог useEffect)
    form: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
  methods: {
    onAdd() {
      if (!this.form.title || !this.form.body) return;
      this.$emit('add', this.form);
      this.form = { title: '', body: '' };
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
</style>
