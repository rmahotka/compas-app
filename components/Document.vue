<template>
  <section class="document">
    <div class="container">
      <h2 class="subtitle">Документы</h2>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in sliders" :key="slide">
          <SlideItem :slide="slide" />
        </Slide>

        <template #addons>
          <Navigation>
            <template #prev>
              <iconsArrowCarousel style="transform: rotate(180deg)" />
            </template>
            <template #next>
              <iconsArrowCarousel />
            </template>
          </Navigation>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
const sliders = [
  {
    title: "Лицензионный договор",
    text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
    pages: "/document/License_agreement",
  },
  {
    title: "Политика обработки персональных данных",
    text: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
    pages: "/document/Processing_policy",
  },
  {
    title: "Информация об оплате",
    text: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
    pages: "/document/Payment_Information",
  },
  {
    title: "Согласие",
    text: "Текст для теста Текст для теста Текст для теста Текст для теста Текст для теста Текст для теста Текст для теста Текст для теста Текст для теста Текст для теста.",
    pages: "/document/Approval",
  },
];

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  769: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1440: {
    itemsToShow: 3,
    snapAlign: "center",
  },
});
</script>

<style lang="scss" scoped>
.next-arrow path,
.prev-arrow path {
  transition: 0.2s;
}

.next-arrow:hover path,
.prev-arrow:hover path {
  fill: #0584fe;
}

.document {
  margin-top: 82px;
  margin-bottom: 473px;
}

.subtitle {
  margin-bottom: 27px;
}

@media (max-width: 500px) {
  .next-arrow,
  .prev-arrow {
    display: none;
  }
}
</style>
