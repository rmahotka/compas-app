<template>
  <YoutubeModal v-if="modal === true" @closeModal="onCloseModal" />
  <section class="hero">
    <div class="container">
      <div class="hero-block">
        <div class="hero-block__info">
          <h1 class="title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
          <form action="" @submit.stop.prevent="submitForm" class="hero-form">
            <Transition>
              <UIAlertItem v-if="successForm" />
            </Transition>
            <div class="hero-form-block">
              <UIInput
                v-model="numberAvtoItem"
                :id="'numberAvto'"
                :title="'Номер автомобиля'"
                :isError="numberAvtoItemError"
              />
              <UIInput
                v-model="regionItem"
                :id="'region'"
                :title="'Регион'"
                :isError="regionItemError"
              />
            </div>
            <UIInput
              v-model="registrationItem"
              :id="'registrationTC'"
              :title="'Свидетельство о регистрации ТС'"
              :isError="registrationItemError"
            />
            <div class="hero-form-btn">
              <UIButton :size="'medium'" :icon="true">
                <span>Проверить штрафы</span>
                <iconsArrow />
              </UIButton>
              <button class="hero-form-btn--inherit" @click.prevent="openModal">
                <iconsYoutube />
                <span>О сервисе</span>
                <span class="hero-form-btn--inherit-time">(1 мин. 20 сек)</span>
              </button>
            </div>
          </form>
          <p class="hero-block__footer-text">
            Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
            персональных данных и принимаете оферту
          </p>
        </div>
        <img src="../assets/hero.png" alt="Компьютер" class="hero-img" />
      </div>
    </div>
  </section>
</template>

<script setup>
const numberAvtoItem = ref("");
const regionItem = ref("");
const registrationItem = ref("");

const numberAvtoItemError = ref(false);
const regionItemError = ref(false);
const registrationItemError = ref(false);

const modal = ref(false);
const successForm = ref(false);

const openModal = () => {
  modal.value = true;
};

const onCloseModal = () => {
  modal.value = false;
};

const submitForm = () => {
  numberAvtoItemError.value = false;
  regionItemError.value = false;
  registrationItemError.value = false;

  let valid = true;

  if (numberAvtoItem.value.length === 0) {
    numberAvtoItemError.value = true;
    valid = false;
  }
  if (regionItem.value.length === 0) {
    regionItemError.value = true;
    valid = false;
  }
  if (registrationItem.value.length === 0) {
    registrationItemError.value = true;
    valid = false;
  }
  if (valid) {
    successForm.value = true;
    setTimeout(() => {
      successForm.value = false;
    }, 2000);
    numberAvtoItem.value = "";
    regionItem.value = "";
    registrationItem.value = "";
  }
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.hero {
  margin-top: 79px;

  &-block {
    display: flex;
    align-items: center;
    gap: 40px;

    &__info {
      max-width: 563px;
    }

    &__footer-text {
      font-size: 13px;
      color: #8f8f8f;
      line-height: 16px;
      margin-top: 16px;
    }
  }

  &-form {
    position: relative;
    &-block {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      margin-bottom: 16px;

      div:first-child {
        width: 100%;
      }
    }

    &-btn {
      margin-top: 15px;
      display: flex;
      align-items: center;
      gap: 21px;

      &--inherit {
        position: relative;
        background-color: inherit;
        display: flex;
        align-items: center;
        border: 1px solid #0584fe;
        border-radius: 7px;
        font-size: 18px;
        color: #000;
        padding: 11px 20px;
        gap: 5px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          border-color: #fd8301;
        }

        &-time {
          color: #1253a2;
          font-size: 15px;
        }
      }
    }
  }
}

.title {
  font-size: 41px;
  line-height: 49px;
  margin-bottom: 24px;
  letter-spacing: 0.1px;
}

@media (max-width: 1439px) {
  .hero-form-block {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .hero-form-btn {
    flex-direction: column;
    gap: 10px;

    button {
      width: 100%;
    }
  }
}

@media (max-width: 1023px) {
  .title {
    text-align: center;
  }

  .hero-block__footer-text {
    text-align: center;
  }

  .hero-img {
    display: none;
  }
  .hero-block {
    display: block;
    width: 100%;
  }

  .hero-block__info {
    margin: 0 auto;
  }
}

@media (max-width: 425px) {
  .title {
    font-size: 35px;
  }
}

@media (max-width: 375px) {
  .title {
    line-height: 1;
  }
}

@media (max-width: 320px) {
  .hero-form-btn--inherit-time {
    display: none;
  }
}
</style>
