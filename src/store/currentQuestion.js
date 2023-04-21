import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentQuestionStore = defineStore('currentQuestion', () => {
  const value = ref(0)
  function increment() {
    
    value.value++
  }

  return { value , increment }
})
