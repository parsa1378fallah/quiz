<template>
  <div class="flex justify-center items-center  h-screen w-full">
    <div>
      <h1 class="text-2xl font-bold mb-4">مشخصات تست {{subject}}</h1>
      <form class="w-full max-w-lg" @submit.prevent>
        <div class="flex flex-col mb-6">
          <label for="number" class="block text-gray-700 font-bold mb-2"
            >تعداد سوالات</label
          >
          <input
            id="number"
            type="number"
            class="form-input w-full sm:w-60 border-2 border-gray-400 p-2 rounded-md"
            min="1"
            v-model="numberOfQuestions"
          />
        </div>
        <div class="flex flex-row gap-4 mb-6 ">
          <label for="checkbox" class="block text-gray-700 font-bold mb-2"
            >نمره منفی</label
          >
          <input
            id="checkbox"
            type="checkbox"
            class="form-checkbox h-5 w-5 text-blue-600"
            min="1"
          />
        </div>
        <div class="flex justify-center">
          <router-link :to="`/quiz/${id}`">
             <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="startTest()"
          >
            شروع
          </button>
          </router-link>
         
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { useRoute , RouterLink } from "vue-router";
import {useNumberOfQuestions} from "../store/NumberOfQuestionws";
import { ref, watch } from 'vue'
import q from "../data/quiz"
const router = useRoute()
const id = router.params.id;
const subject = q[id-1].name;
const numberOfQuestions = ref(0);
 watch(numberOfQuestions, ( newValue ) => {useNumberOfQuestions().value = newValue;})
</script>
