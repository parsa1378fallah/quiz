<script setup>
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="container mx-auto">
    <router-view v-slot="{ Component }">
      <transition name="fade" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
* {
  direction: rtl;
}
.fade-enter-active {
  transition: all 1s ease-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
