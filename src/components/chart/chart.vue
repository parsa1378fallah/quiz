<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { useCorrectQuestions } from "../../store/correctAnswers";
import {useNumberOfQuestions} from "../../store/NumberOfQuestionws";
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const correctQuestions = useCorrectQuestions();
const numberOfQuestions = useNumberOfQuestions()
const correctAnswersPercent = Math.floor(correctQuestions.value*100/numberOfQuestions.value)
const wrongAnswersPercent = Math.ceil(100 - (correctQuestions.value*100/numberOfQuestions.value))
const chartData = {
  labels: ["درصد پاسخ های صحیح", "درصد جواب غلط"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#DD1B16"],
      data: [correctAnswersPercent ,wrongAnswersPercent],
    },
  ],
};
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
</script>
