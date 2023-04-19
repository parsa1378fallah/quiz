import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCorrectQuestions = defineStore('correctQuestions', () => {
  const correctQuestions = ref(0)
  function increment() {
    correctQuestions.value++
  }

  return { correctQuestions , increment }
})
