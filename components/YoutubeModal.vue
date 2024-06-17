<template>
  <div class="modal-background" @click="closeModal">
    <div class="modal">
      <div class="close" @click="closeModal">
        <span class="cross"></span>
      </div>
      <div class="modal-content">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9sgZ0n6JOSI?si=jH-GMYSAa4z-nSKr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal');
};
</script>

<style lang="scss" scoped>
.modal-background {
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 11;
}

.cross {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  position: relative;
  display: block;
  width: 21px;
  height: 4px;
  background-color: #fff;

  &::after {
    content: '';
    width: 21px;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(90deg);
  }
}

.close {
  position: absolute;
  top: -27px;
  right: 0;
  cursor: pointer;
  width: 21px;
  height: 21px;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 960px;
  height: 532px;
  z-index: 10;

  &-content {
    width: 100%;
    height: 100%;
    background-color: #5a5a5a;
  }
}

@media (max-width: 767px) {
  .modal {
    width: 320px;
    height: 240px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .modal {
    width: 720px;
    height: 380px;
  }
}
</style>
