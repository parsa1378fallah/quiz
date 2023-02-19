<script setup>
import {useRouter} from 'vue-router'
import {defineProps} from 'vue';
const router = useRouter()
const goToHomePage = () =>{
      router.push(`/`)
}
const {questionLength,correctAnswer} = defineProps(['questionLength','correctAnswer'])
</script>
<template>
    <div class="result">
        <p>نتیجه نهایی ...</p>
        <h1>{{parseInt(correctAnswer/questionLength*100)}}%</h1>
        <button @click="goToHomePage">بازگشت به صفحه اصلی</button>
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