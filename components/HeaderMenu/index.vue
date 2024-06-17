<template>
  <div class="header">
    <div class="container">
      <NuxtLink to="/" class="logo-adaptive">
        <iconsLogo />
      </NuxtLink>
      <div class="head" :class="{ 'head-active': burgetActive }">
        <div class="header__block">
          <NuxtLink to="/" class="logo-basic">
            <iconsLogo />
          </NuxtLink>
          <nav class="menu__link-block">
            <NuxtLink to="/tariffs" class="menu__link">Тарифы</NuxtLink>
            <NuxtLink to="/contacts" class="menu__link">Контакты</NuxtLink>
          </nav>
        </div>
        <div class="header__block opacity-menu">
          <a class="header-phone" href="tel: +7 495 118-44-22">
            +7 495 118-44-22
          </a>
          <NuxtLink class="menu__link" to="/login">Вход</NuxtLink>
          <NuxtLink to="/register">
            <UIButton :size="'small'"> Регистрация </UIButton>
          </NuxtLink>
        </div>
      </div>
      <div
        class="burger"
        :class="{ 'burger-active': burgetActive }"
        @click="openBurger"
      >
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const burgetActive = ref(false);

const openBurger = () => {
  burgetActive.value = !burgetActive.value;
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
