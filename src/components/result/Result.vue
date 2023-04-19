<script setup>
import {useRouter} from 'vue-router';
import {useCurrentQuestionStore} from '../../store/currentQuestion';
import {useCorrectQuestions} from '../../store/correctAnswers';
import BackButton from '../buttons/BackButton.vue'
const router = useRouter()
const currentQuestion= useCurrentQuestionStore();
const correctQuestions = useCorrectQuestions() ; 
const goToHomePage = () =>{
      router.push(`/`)
      currentQuestion.currentQuestionIndex = 0;
      correctQuestions.correctQuestions = 0;
}
console.log(correctQuestions.correctQuestions)
</script>
<template>
    <div class="result">
        <p>نتیجه نهایی ...</p>
        <h1>{{parseInt(correctQuestions.correctQuestions/3*100)}}%</h1>
        <back-button @click="goToHomePage()"></back-button>
    </div>
</template>
<style scoped>
.result
{
    text-align: center;
    padding:0 100px;
}
p
{
    font-size: 25px;
}
</style>