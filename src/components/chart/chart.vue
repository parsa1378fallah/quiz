<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import {useCorrectQuestions} from "../../store/correctAnswers";
import {useNumberOfQuestions} from "../../store/NumberOfQuestions";
import {useNotAnsweredQuestions} from "../../store/notAnsweredQuestions";
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const correctQuestions = useCorrectQuestions();
const numberOfQuestions = useNumberOfQuestions();
const notAnsweredQuestions = useNotAnsweredQuestions();
const correctAnswersPercent = Math.floor(correctQuestions.value*100/numberOfQuestions.value)
const notAnsweredQuestionsPercent = Math.floor(notAnsweredQuestions.value*100/numberOfQuestions.value)
const wrongAnswersPercent = Math.ceil(100 - (correctAnswersPercent+notAnsweredQuestionsPercent))

const chartData = {
  labels: ["درصد پاسخ های صحیح", "درصد جواب غلط","درصد سوالات بی پاسخ"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#DD1B16","#eeeeee"],
      data: [correctAnswersPercent ,wrongAnswersPercent,notAnsweredQuestionsPercent],
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
