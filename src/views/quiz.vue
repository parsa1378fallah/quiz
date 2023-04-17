<script setup>
  import Question from "../components/question/Question.vue"
  import Header from '../components/quiz-header/quizHeader.vue'
  import {useRoute} from 'vue-router'
  import {ref , watch} from "vue"
  import quizes from '../data/quiz.json' 
  import result from '../components/result/Result.vue'
  import {useCurrentQuestionStore} from '../store/currentQuestion'
  

  const route = useRoute()
  const store= useCurrentQuestionStore()

  const quizId = parseInt(route.params.id)

  const numberOfCorrectAnswers = ref(0)

  const quiz = quizes.find(quiz => quiz.id===quizId)

  const onOptionSelected = (isCorrect) =>
  {
    if(isCorrect){numberOfCorrectAnswers.value++;}

    if(store.currentQuestionIndex == 3) return;
    store.increment();
  }
 
</script>

<template>
    <div>
        <Header  @timeOut="onTimeOut"/>
        <div>
            <Question  v-if="store.currentQuestionIndex<3" :question="quiz.questions[store.currentQuestionIndex]" @selectOption="onOptionSelected" />
            <result v-if="store.currentQuestionIndex===3" :questionLength="quiz.questions.length" :correctAnswer="numberOfCorrectAnswers" />
        </div>
    </div>
</template>
<style scoped>


</style>