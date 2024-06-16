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
        <img src="@/assets/hero.png" alt="Компьютер" class="hero-img" />
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
@import "./index.scss";
</style>
