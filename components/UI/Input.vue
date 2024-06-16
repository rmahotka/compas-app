<template>
  <div class="block-input">
    <label :for="id">{{ title }}</label>
    <input
      type="text"
      :id="id"
      v-model="model"
      :style="{ borderColor: isError ? 'red' : '#bcbcbc' }"
    />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    require: true,
  },
  isError: {
    type: Boolean,
    default: false,
  },
});

const model = defineModel();
</script>

<style lang="scss" scoped>
.block-input {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 12px;
  line-height: 1.2;
  margin-bottom: 3px;
}

input {
  border-radius: 5px;
  border: 1px solid #bcbcbc;
  height: 40px;
  padding: 0 8px;
  outline: none;

  &:focus {
    border-color: #0584fe;
  }
}
</style>
