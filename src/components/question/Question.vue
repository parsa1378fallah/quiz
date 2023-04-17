<script setup>
import {useTimeStore} from '../../store/time'
const time = useTimeStore() ;
const {question} = defineProps(['question'])
const emit = defineEmits(['selectOption'])


const selectedOption = (isCorrect) => {
 emit("selectOption",isCorrect)
 time.reset()
}


</script>

<template>
    <div>
        <div class="question-container">
            <h1 class="question">{{question.text}}</h1>
        </div>
        <div class="option-container" >
            <div class="option" v-for="option in question.options" :key="option.id" @click="selectedOption(option.isCorrect)">
                <p class="option-label">{{option.label}}</p>
                <div class="option-value">
                    <p>{{option.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.question-container
{
    margin: 20px 0 0 0;
    padding: 20px;
    
}
.question
{
    font-size: 25px;
    margin: 0 0 20px 0;
    padding: 10px 25px;
    border-radius: 5px;
    background: #fff;

}
.option-container
{
    position: relative;
    padding: 20px;
    width : 100%;

}
.option
{
    display: flex;
    gap : 15px;
    margin: 0 0 20px 0;
    cursor: pointer;
    
}
.option-label
{
    background: bisque;
    display: flex;
    align-items: center;
    justify-content: center;
    width : 60px;
    height: 60px;
    font-size: 24px;
    border-radius: 50%;
}
.option-value
{
    background: rgb(244,239,239);
    width : 85%;
    font-size : 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    
}
@media screen and (max-width: 500px) {
.question-container
{
    align-self: center;
}
 .question
 {
    font-size : 18px;
    margin: 0 auto;
 }
 .option-label
 {
    font-size: 15px;
 }
 .option-value
 {
    font-size: 13px;
 }
}
</style>