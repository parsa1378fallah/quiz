<script setup>
import {RouterView} from 'vue-router'


</script>

<template >
  <div class="container">
   <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
*
{
  direction: rtl;
}
.container
{
  max-width: 1000px;
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
