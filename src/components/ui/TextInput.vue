<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  height: 30px;
  border: 2px solid teal;
}
</style>
