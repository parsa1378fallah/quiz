<script setup>
import {useCurrentQuestionStore} from '../../store/currentQuestion';
import {useTimeStore} from '../../store/time'
import {useNumberOfQuestions} from "../../store/NumberOfQuestions";
import {useNotAnsweredQuestions} from "../../store/notAnsweredQuestions";

const notAnsweredQuestions = useNotAnsweredQuestions();
const currentQuestion= useCurrentQuestionStore()
const time = useTimeStore() ;
const numberOfQuestions = useNumberOfQuestions()

const timer = setInterval(()=>{
    time.increment();
    if(time.value === 240) 
    {
        time.reset();
        if(currentQuestion.value<numberOfQuestions.value)
        {
            currentQuestion.value++;
            notAnsweredQuestions.value++;
        }
        
    } 
    if(currentQuestion.value===numberOfQuestions.value){
        clearInterval(timer)
        time.reset()
    }
    
},50)
</script>
<template>
    <header class="header">
        <div class="progress-question-bar ">
            <h4 class="text-red-700">سوال {{currentQuestion.value}}/{{numberOfQuestions.value}}</h4>
            <div class="bar">
                <div class="question-completion" :style="{'width' : `${(currentQuestion.value)*100/numberOfQuestions.value}%`}"></div>
            </div>
        </div>
        <div class="progress-timer-bar">
            <h4>زمان باقی مانده</h4>
            <div class="bar">
                <div class="time-completion" :style="{'width' : `${(time.value)*(100)/(240)}%` , 'backgroundColor' : `hsl( ${120-time.value/2}, 100%, 50%)` }"></div>
            </div>
        </div>
    </header>    
</template>
<style scoped>
.header
{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.header h4{font-size: 20px;}
.bar
{
    width : 300px;
    height : 15px;
    border : 3px solid bisque;
    border-radius: 15px;
}
.question-completion
{
   height : 100%;
   background-color: #2980b9;
   transition  : all 0.4s;
}
.time-completion
{
   height : 100%;
   background-color: #2980b9;
   
}
.progress-timer-bar
{
    align-self: flex-end;
}
@media screen and (max-width: 750px) {
  .header {
    flex-direction: column;
    justify-content: flex-start;
  }
  .progress-timer-bar
  {
    align-self: center;
  }
}
</style>