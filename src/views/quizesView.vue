<script setup>
import {ref,watch} from "vue"
import q from "../data/quiz.json"
import Card from '../components/card/Card.vue'
const quizes = ref(q)

const search = ref("")
watch(search,()=>{quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))})


</script>

<template>
    <div class="header">
      <h1>آزمون</h1>
      <input type="text" v-model="search" />
    </div>
    <div class="options-container">
     <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
</template>

<style scoped>
.header
{
  margin : 10px 0 30px 0;
  display: flex;
  align-items: center;
}
.header h1
{
  font-weight: bold;
  margin-right: 30px;
}
.header input
{
  border: none;
  background: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 10px;
  margin: 0 20px 0 0;
}
.options-container
{
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0 0 0;
}
</style>
