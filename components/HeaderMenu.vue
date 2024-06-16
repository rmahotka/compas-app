<template>
  <div class="header">
    <div class="container">
      <NuxtLink to="/" class="logo-adaptive">
        <iconsLogo />
      </NuxtLink>
      <div class="head" :style="{ right: burgetActive ? '0' : '' }">
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
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-adaptive {
  display: none;
}

.header {
  position: relative;
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

.burger {
  display: none;
}

@media (max-width: 767px) {
  .burger {
    display: block;
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 15px;
    cursor: pointer;
    transition: 0.2s;
    z-index: 10000;

    span {
      display: block;
      background-color: #fff;
      height: 4px;
      width: 30px;
      border-radius: 8px;

      &::after,
      &::before {
        content: "";
        position: absolute;
        background-color: #fff;
        height: 4px;
        width: 30px;
        border-radius: 8px;
      }

      &::after {
        top: 50%;
        left: 0;
      }

      &::before {
        top: 100%;
        left: 0;
      }
    }
  }

  .burger-active {
    span {
      position: relative;
      transform: rotate(-45deg);
      top: 50%;
      background-color: #000;

      &::after {
        transform: translate(0, -50%) rotate(90deg);
        top: 50%;
        background-color: #000;
      }

      &::before {
        display: none;
      }
    }
  }

  .logo-adaptive {
    display: block;
  }

  .logo-basic {
    display: none;
  }

  .head {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: -100%;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding-top: 20px;
    transition: 0.2s;

    .header__block {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 30px;
      gap: 20px;
    }

    .opacity-menu {
      a:first-child {
        order: 3;
      }
      a:nth-child(2) {
        order: 2;
      }
    }

    .menu__link-block {
      display: flex;
      flex-direction: column;
    }

    a {
      color: #000;
    }
  }
}
</style>
