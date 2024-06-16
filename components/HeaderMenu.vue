<template>
  <div class="header">
    <div class="container">
      <div class="header__block">
        <NuxtLink to="/">
          <iconsLogo />
        </NuxtLink>
        <nav class="menu__link-block">
          <NuxtLink to="/tariffs" class="menu__link">Тарифы</NuxtLink>
          <NuxtLink to="/contacts" class="menu__link">Контакты</NuxtLink>
        </nav>
      </div>
      <div class="header__block">
        <a class="header-phone" href="tel: +7 495 118-44-22">
          +7 495 118-44-22
        </a>
        <NuxtLink class="menu__link" to="/login">Вход</NuxtLink>
        <NuxtLink to="/register">
          <UIButton :size="'small'"> Регистрация </UIButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  padding: 13px 0;
  background: linear-gradient(90deg, #000 30%, #1c2734 73%);

  &__block {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &-phone {
    font-size: 18px;
    font-weight: 700;
    transition: 0.2s;

    &:hover {
      color: #e58835;
    }
  }
}

.menu__link-block {
  display: flex;
  gap: 30px;
}

.menu__link {
  transition: 0.2s;
  font-size: 18px;

  &:hover {
    color: #e58835;
  }
}
</style>
