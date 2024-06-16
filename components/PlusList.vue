<template>
  <section class="plusSection">
    <div class="container">
      <h2 class="subtitle">
        Плюсы использования сервиса «Компас» для анализа штрафов
      </h2>
      <div class="plus-block">
        <PlusItem
          class="plus-item"
          v-for="item in cardItems"
          :key="item.id"
          :item="item"
        >
        </PlusItem>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconsUnlimitedAutopark from "@/components/icons/UnlimitedAutopark.vue";
import iconsCorsReduction from "@/components/icons/CorsReduction.vue";
import iconsSafety from "@/components/icons/Safety.vue";
import iconsRepaymentNotifications from "@/components/icons/RepaymentNotifications.vue";
import iconsPaymentReceipt from "@/components/icons/PaymentReceipt.vue";
import iconsHistorySaveAuto from "@/components/icons/HistorySaveAuto.vue";

const cardItems = [
  {
    id: 1,
    icon: iconsUnlimitedAutopark,
    title: "Неограниченый автопарк",
    text: "Можно добавить неограниченное кол-во машин и водителей",
  },
  {
    id: 2,
    icon: iconsCorsReduction,
    title: "Сокращение затрат до 50%",
    text: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
  },
  {
    id: 3,
    icon: iconsSafety,
    title: "Безопасность",
    text: "Данные передаются в зашифрованном виде, они доступны только получателю",
  },
  {
    id: 4,
    icon: iconsRepaymentNotifications,
    title: "Уведомление о погашении",
    text: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
  },
  {
    id: 5,
    icon: iconsPaymentReceipt,
    title: "Квитанция об оплате",
    text: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
  },
  {
    id: 6,
    icon: iconsHistorySaveAuto,
    title: "Все история сохраняется по каждой машине",
    text: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
  },
];
</script>

<style lang="scss" scoped>
.plusSection {
  margin-top: 104px;
}

.subtitle {
  margin-bottom: 33px;
}

.plus-block {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 35px;
}

.plus-item {
  grid-column: 4 span;
}

@media (min-width: 1024px) and (max-width: 1439px) {
  .plus-block {
    gap: 25px;
  }
}

@media (max-width: 1023px) {
  .plus-item {
    grid-column: 6 span;
  }

  .plus-block {
    gap: 15px;
  }
}

@media (max-width: 767px) {
  .plus-item {
    grid-column: 12 span;
  }

  .plus-block {
    gap: 10px;
  }
}
</style>
