import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimeStore = defineStore('time', () => {
  const time = ref(0)
  function increment() {
    time.value++
  }
  function reset()
  {
    time.value = 0;
  }

  return { time , increment , reset }
})
