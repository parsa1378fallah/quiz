<script setup>
import {defineProps} from 'vue'
import {useRouter} from 'vue-router';
import anime from 'animejs/';
const {quiz} = defineProps(['quiz'])

const router = useRouter()

const navigateToQuiz = () =>{
  router.push(`/costomize/${quiz.id}`)
}

</script>
<template>
     <div class="card " @click="navigateToQuiz()"  >
      <div class="image">
        <img :src="quiz.img" alt="123" class="image" />
      </div>
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>تعداد سوالات : {{quiz.questions.length}}</p>
        </div>
      </div>
</template>
<style scoped>
.image
{
  background: #fff;
  
}
.card
{
  width : 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow : 1px 1px 5px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
  transition  : all 0.2s;
 
  display: flex;
  flex-direction: column;
}
.card:hover
{
  box-shadow : 5px 5px 6px rgba(0,0,0,0.1) }
.card img
{
  width: 100%;
  height : 230px;
  margin : 0;
  
}
.card .card-text
{
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top : 1px solid black;
   background: #f2efef;
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
@media screen and (max-width: 500px) {
  .card
  {
    margin-right: 0;
  }
}
@media screen and (max-width: 315px) {
  .card
  {
    width : 250px;
  }
  .card img
  {
    width: 100%;
    height : 200px;
    margin : 0;
  }
}
</style>