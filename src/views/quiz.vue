<script setup>
import Question from "../components/question/Question.vue"
import Header from '../components/quiz-header/quizHeader.vue'
import Result from '../components/result/Result.vue'
import {useCurrentQuestionStore} from '../store/currentQuestion'
const store= useCurrentQuestionStore()
</script>
<template>
    <div>
        <Header/>
        <div>
            <transition name="switch" mode="in-out">
                <Question  v-if="store.currentQuestionIndex<3" />
                <Result v-else />
            </transition>
            
        </div>
    </div>
</template>
<style scoped>
.switch-enter-from,
.switch-leave-to
{
    opacity : 0;
}
.switch-enter-to,
.switch-leave-from
{
    opacity: 1;
}

.switch-enter-active
{
    transition: all 1s ease;
}
.switch-leave-active
{
    transition: all 1s ease;
}
</style>