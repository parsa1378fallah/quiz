import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentQuestionStore = defineStore('currentQuestion', () => {
  const currentQuestionIndex = ref(0)
  function increment() {
    
    currentQuestionIndex.value++
  }

  return { currentQuestionIndex , increment }
})
