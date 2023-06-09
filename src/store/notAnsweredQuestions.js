import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotAnsweredQuestions = defineStore('notAnsweredQuestions', () => {
  const value = ref(0)
  function increment() {
    value.value++
  }
  return { value , increment }
})
