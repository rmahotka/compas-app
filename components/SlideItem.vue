<template>
  <div class="slider-block">
    <div class="slider-block--position">
      <h3 class="slider-title">{{ slide.title }}</h3>
      <div class="slider-text">{{ slide.text }}</div>
    </div>
    <NuxtLink :to="slide.pages">
      <UIButton :size="'full'"> Перейти </UIButton>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  slide: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.slider {
  &-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    border: 1px solid #eeeff1;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
    text-align: left;
    width: 340px;
    height: 450px;
  }

  &-title {
    font-size: 31px;
    line-height: 37px;
    color: #1253a2;
    margin-bottom: 15px;
  }

  &-text {
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
