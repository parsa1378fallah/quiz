<script setup>
import {useCurrentQuestionStore} from '../../store/currentQuestion';
import {useTimeStore} from '../../store/time'
const crrentQuestion= useCurrentQuestionStore()
const time = useTimeStore() ;
const timer = setInterval(()=>{
    time.increment();
    if(time.time === 120) 
    {
        time.reset();
        if(crrentQuestion.currentQuestionIndex<3)
        crrentQuestion.currentQuestionIndex++;
    } 
    if(crrentQuestion.currentQuestionIndex===3){
        clearInterval(timer)
        time.reset()
    }
    
},50)
</script>
<template>
    <header class="header">
        <div class="progress-question-bar">
            <h4>سوال {{crrentQuestion.currentQuestionIndex}}/3</h4>
            <div class="bar">
                <div class="question-completion" :style="{'width' : `${(crrentQuestion.currentQuestionIndex)*100/3}%`}"></div>
            </div>
        </div>
        <div class="progress-timer-bar">
            <h4>زمان باقی مانده</h4>
            <div class="bar">
                <div class="time-completion" :style="{'width' : `${(time.time)*(100)/(120)}%`}"></div>
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
   background-color: aqua;
   transition  : all 0.4s;
}
.time-completion
{
   height : 100%;
   background-color: aqua;
   
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