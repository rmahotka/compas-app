<template>
  <div class="header">
    <div class="header__left-block">
      <NuxtLink to="/">
        <iconsLogo />
      </NuxtLink>
      <nav class="menu__link">
        <NuxtLink to="/tariffs">Тарифы</NuxtLink>
        <NuxtLink to="/tariffs">Контакты</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 11px 0;
  background: linear-gradient(90deg, #000 30%, #1c2734 73%);

  &__left-block {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}

.menu__link {
  display: flex;
  gap: 30px;

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.2s;
    font-size: 18px;

    &:hover {
      color: #e58835;
    }
  }
}
</style>
