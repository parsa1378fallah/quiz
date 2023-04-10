<script setup>
import {useTimeStore} from '../store/time'
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
}
.question
{
    font-size: 25px;
    margin: 0 0 20px 0;
}
.option
{
    display: flex;
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
    min-height: 60px;
    font-size: 24px;
}
.option-value
{
    background: rgb(244,239,239);
    width : 100%;
    font-size : 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}
</style>