import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCorrectQuestions = defineStore('correctQuestions', () => {
  const value = ref(0)
  function increment() {
    value.value++
  }
  return { value , increment }
})
