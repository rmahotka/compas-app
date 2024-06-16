<template>
  <div class="plus-block-item">
    <component :is="item.icon" class="item-icon" />
    <div>
      <p class="item-title">{{ item.title }}</p>
      <p class="item-text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
.plus-block-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 24px 20px;
  background: #fbfcfd;
  border: 1px solid #eeeff1;
  border-radius: 10px;
}

.item-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #1253a2;
  margin-bottom: 10px;
}

.item-text {
  font-size: 15px;
  line-height: 18px;
}

.item-icon {
  flex: 1 0 auto;
}
</style>
