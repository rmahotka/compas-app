<template>
  <button :class="[{ icon: icon }, `size-${size}`]">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  size: {
    type: String,
  },
  icon: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
button {
  color: #fff;
  background: #0584fe;
  border-radius: 7px;
  border: 0;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: #046cce;
  }
}

.size-full {
  padding: 11px 8px;
  font-size: 18px;
  width: 100%;
}

.size-medium {
  padding: 11px 20px;
  font-size: 18px;
}

.size-small {
  padding: 9px 18px;
  font-size: 15px;
}

.icon {
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 1439px) {
  .size-medium {
    width: 100%;
  }
}
</style>
