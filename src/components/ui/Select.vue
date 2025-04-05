<template>
  <select :value="modelValue" class="select" @change="onChange">
    <option value="" disabled>Select from list</option>
    <option :value="i.value" v-for="i in options" :key="i.value">{{i.name}}</option>
  </select>
</template>

<script>
  export default {
    name: 'Select',
    props: {
      modelValue: {
        type: String,
      },
      options: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      onChange(e) {
        this.$emit('update:modelValue', e.target.value);
      },
    },
  };
</script>

<style scoped lang="scss">
  .select {
    border: 1px solid #ccc;
    height: 22px;
  }
</style>
