<script setup>
import Question from "../components/question/Question.vue"
import Header from '../components/quiz-header/quizHeader.vue'
import Result from '../components/result/Result.vue'
import {useCurrentQuestionStore} from '../store/currentQuestion'
const store= useCurrentQuestionStore()
</script>
<template>
    <div>
        <Header/>
        <div>
            <Question  v-if="store.currentQuestionIndex<3" />
            <Result v-if="store.currentQuestionIndex===3" />
        </div>
    </div>
</template>
<style scoped></style>