<script setup>
import {RouterView , useRoute} from 'vue-router'

const route = useRoute()
</script>

<template >
  <div class="container">
    <router-view></router-view>
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
