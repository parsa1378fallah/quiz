<script setup>
import { RouterView, useRoute } from "vue-router";
import { onMounted } from 'vue'
import anime from "animejs/";
onMounted(() => {
  const container  = document.querySelector('.body');
  for(let i = 0 ; i<100 ;i++)
  {
    const blocks = document.createElement('div')
    blocks.classList.add('block');
    container.appendChild(blocks)
  }
})

const animateBlocks = () => {
  setInterval( anime({
    targets : '.block',
    translateX : function(){
      return anime.random(-700,700)
    },
     translateY : function(){
      return anime.random(-500,500)
    },
     scale : function(){
      return anime.random(1,5)
    },
    easing : 'linear',
    duration : 4000,
    delay : anime.stagger(10)
  }), 4000);
  anime({
    targets : '.block',
    translateX : function(){
      return anime.random(-700,700)
    },
     translateY : function(){
      return anime.random(-500,500)
    },
     scale : function(){
      return anime.random(1,5)
    },
    easing : 'linear',
    duration : 4000,
    delay : anime.stagger(10)
  })
}

const route = useRoute();
</script>

<template>
  <div class="body px-10 mx-auto overflow-hidden min-h-" @mouseenter="animateBlocks">
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
.body{min-height : 100vh}
</style>
