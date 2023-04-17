<script setup>
import {useRouter} from 'vue-router'
import {useCurrentQuestionStore} from '../../store/currentQuestion'
import BackButton from '../buttons/BackButton.vue'
const router = useRouter()
const store= useCurrentQuestionStore()
const goToHomePage = () =>{
      router.push(`/`)
      store.currentQuestionIndex = 0;
}
const {questionLength,correctAnswer} = defineProps(['questionLength','correctAnswer'])
</script>
<template>
    <div class="result">
        <p>نتیجه نهایی ...</p>
        <h1>{{parseInt(correctAnswer/questionLength*100)}}%</h1>
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