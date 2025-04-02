<template>
  <div class="dialog" v-if="show" @click="onHide">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    onHide() {
      this.$emit('update:show', false);
    },
  },
};
</script>

<style scoped lang="scss">
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &__content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    min-width: 320px;
    max-width: 600px;
    width: 100%;
    min-height: 180px;
  }
}
</style>
