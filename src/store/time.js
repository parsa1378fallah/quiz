import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimeStore = defineStore('time', () => {
  const value = ref(0)
  function increment() {
    value.value++
  }
  function reset()
  {
    value.value = 0;
  }

  return { value , increment , reset }
})
