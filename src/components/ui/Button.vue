<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style scoped lang="scss">
.btn {
  background: teal;
  color: white;
  border: none;
  font-size: 16px;
  height: 30px;
  cursor: pointer;
}
</style>
