<script setup>
import {defineProps} from 'vue'
import {useRouter} from 'vue-router'
const {quiz} = defineProps(['quiz'])

const router = useRouter()

const navigateToQuiz = () =>{
  router.push(`/quiz/${quiz.id}`)
}
</script>
<template>
     <div class="card" @click="navigateToQuiz()">
        <img :src="quiz.img" alt="" />
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>تعداد سوالات : {{quiz.questions.length}}</p>
        </div>
      </div>
</template>
<style scoped>
.card
{
  width : 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow : 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}
.card img
{
  width: 100%;
  height : 220px;
  margin : 0;
}
.card .card-text
{
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card .card-text h2
{
  font-weight: bold;
  margin: 0;
}
.card .card-text p
{
  margin: 0 ;
}
</style>