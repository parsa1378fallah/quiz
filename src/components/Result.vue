<script setup>
import {useRouter} from 'vue-router'
import {useCurrentQuestionStore} from '../store/currentQuestion'
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
        <button @click="goToHomePage" class="back-button">بازگشت به صفحه اصلی</button>
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
.back-button
{
    cursor: pointer;
    padding: 8px;
    border: 1px solid red;
    border-radius: 10px;
    outline: none;
    background: gray;
    color : #fff;
}
</style>