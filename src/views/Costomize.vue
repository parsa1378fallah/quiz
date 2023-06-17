<template>
  <div class="flex justify-center items-center  h-screen w-full">
    <div>
      <h1 class="text-2xl font-bold mb-4">مشخصات تست {{subject}}</h1>
      <form class="w-full max-w-lg" @submit.prevent>
        <div class="flex flex-col relative mb-6">
          <label for="number" class="block text-gray-700 font-bold"
            >تعداد سوالات</label
          >
          <input
            id="number"
            type="number"
            class="form-input w-full sm:w-60 border-2 border-gray-400 p-2 rounded-md"
            min="1"
            :max="maxQuestions"
            v-model="numberOfQuestions"
          />
          <div class="absolute top-full right-0"><span v-show="numberOfQuestions===maxQuestions" class="text-red-700 text-sm">حد اکثر تعداد سوالات</span></div>
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
import {useNumberOfQuestions} from "../store/NumberOfQuestions";
import { ref, watch } from 'vue'
import q from "../data/quiz"
const router = useRoute()
const id = router.params.id;
const subject = q[id-1].name;
const maxQuestions = q[id-1].questions.length
console.log(maxQuestions)
const numberOfQuestions = ref(0);
 watch(numberOfQuestions, ( newValue ) => {useNumberOfQuestions().value = newValue;})
</script>
