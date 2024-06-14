<template>
  <div class="header">
    <div class="header__block">
      <NuxtLink to="/">
        <iconsLogo />
      </NuxtLink>
      <nav class="menu__link">
        <NuxtLink to="/tariffs">Тарифы</NuxtLink>
        <NuxtLink to="/tariffs">Контакты</NuxtLink>
      </nav>
    </div>
    <div class="header__block">
      <a class="header-phone" href="tel: +7 495 118-44-22"> +7 495 118-44-22</a>

      <UIButton> Регистрация </UIButton>
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

  &__block {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &-phone {
    transition: 0.2s;

    &:hover {
      color: #e58835;
    }
  }
}

.menu__link {
  display: flex;
  gap: 30px;

  a {
    transition: 0.2s;
    font-size: 18px;

    &:hover {
      color: #e58835;
    }
  }
}
</style>
