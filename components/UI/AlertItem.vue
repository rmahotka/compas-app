<template>
  <div class="alert-block">
    <p>Данные формы успешно отправлены</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.alert-block {
  position: absolute;
  top: -95%;
  left: 0;
  border: 2px solid #8fdb48;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #9aec4d9f;
  font-size: 16px;
  color: #001400;
}

@media (max-width: 1439px) {
  .alert-block {
    text-align: center;
    max-width: 275px;
    width: 100%;
    top: -70%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 1023px) {
  .alert-block {
    text-align: center;
    width: 100%;
    top: -60%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 539px) {
  .alert-block {
    top: -68%;
  }
}

@media (max-width: 375px) {
  .alert-block {
    top: -55%;
    font-size: 14px;
    padding: 8px 10px;
    max-width: 230px;
  }
}

@media (max-width: 360px) {
  .alert-block {
    top: -65%;
  }
}
</style>
