<template>
  <div class="form">
    <TextInput class="input" type="text" v-model="form.title"/>
    <TextInput class="input" type="text" v-model="form.desc"/>
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
</style>
