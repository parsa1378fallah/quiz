<script setup>
  import Question from "../components/Question.vue"
  import Header from '../components/quizHeader.vue'
  import {useRoute} from 'vue-router'
  import {ref} from "vue"
  import quizes from '../data/quiz.json' 
  import result from '../components/Result.vue'
  const route = useRoute()

  const quizId = parseInt(route.params.id)
  const currentQuestionIndex = ref(0)
  const numberOfCorrectAnswers = ref(0)

  const quiz = quizes.find(quiz => quiz.id===quizId)

  const nextQuestion = () => {
    if(currentQuestionIndex.value===3) return
    currentQuestionIndex.value++;
    
  }
   const prevQuestion = () => {
   if(currentQuestionIndex.value===0) return
    currentQuestionIndex.value--;
    
  }
  const onOptionSelected = (isCorrect) =>
  {
    if(isCorrect){numberOfCorrectAnswers.value++;}

    if(currentQuestionIndex.value==3) return;
    currentQuestionIndex.value++;
  }
</script>

<template>
    <div>
        <Header  :curentQuestion="currentQuestionIndex"/>
        <div>
            <Question  v-if="currentQuestionIndex<3" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
            <result v-if="currentQuestionIndex===3" :questionLength="quiz.questions.length" :correctAnswer="numberOfCorrectAnswers" />
        </div>
    </div>
</template>
<style scoped>


</style>