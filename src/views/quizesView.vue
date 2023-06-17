<script setup>
import { ref, watch } from "vue";
import q from "../data/quiz.json";
import Card from "../components/card/Card.vue";
import anime from "animejs/";
const quizes = ref(q);

const search = ref("");
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
const animateBoxIn = (item) => {
  anime({
    targets: item,
    scale: 1.05,
    duration: 500,
  });
};
const animateBoxOut = (item) => {
  anime({
    targets: item,
    scale: 1,
    duration: 500,
  });
};
</script>

<template>
  <div class="header">
    <h1>آزمون</h1>
    <input type="text" v-model="search" />
  </div>
  <div class="options-container">
    <Card
      v-for="(quiz, index) in quizes"
      :key="quiz.id"
      :quiz="quiz"
      @mouseenter="animateBoxIn(`.card-${index}`)"
      @mouseleave="animateBoxOut(`.card-${index}`)"
      :class="`card-${index}`"
    />
  </div>
</template>

<style scoped>
.header {
  margin: 10px 0 30px 0;
  display: flex;
  align-items: center;
}
.header h1 {
  font-weight: bold;
  margin-right: 30px;
}
.header input {
  border: none;
  background: rgba(128, 128, 128, 0.5);
  padding: 10px;
  border-radius: 10px;
  margin: 0 20px 0 0;
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0 0 0;
}
</style>
