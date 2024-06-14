<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  font-size: 15px;
  color: #fff;
  padding: 9px 18px;
  background: #0584fe;
  border-radius: 7px;
  border: 0;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: #046cce;
  }
}
</style>
