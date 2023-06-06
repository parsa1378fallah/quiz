<script setup>
import { useRouter } from "vue-router";
import { useCurrentQuestionStore } from "../../store/currentQuestion";
import { useCorrectQuestions } from "../../store/correctAnswers";
import BackButton from "../buttons/BackButton.vue";
import chart from "../chart/chart.vue";
const router = useRouter();
const currentQuestion = useCurrentQuestionStore();
const correctQuestions = useCorrectQuestions();
const goToHomePage = () => {
  currentQuestion.value = 0;
  correctQuestions.value = 0;
};
</script>
<template>
  <div class="grid  justify-center">
    <div class="text-center py-24 grid-cols-6">
      <p class="text-xl">نتیجه نهایی ...</p>
      <chart class="my-5" />
      <router-link to="/"
        ><back-button @click="goToHomePage()"></back-button
      ></router-link>
    </div>
  </div>
</template>
<style scoped>
p {
  font-size: 25px;
}
</style>
