import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNumberOfQuestions = defineStore('numberOfQuestions', () => {
  const value = ref(1)
  return { value  }
})
