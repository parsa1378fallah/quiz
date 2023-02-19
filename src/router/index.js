import { createRouter,createWebHistory } from "vue-router";
import Quizes from "../views/quizesView.vue"
import Quiz from '../views/quiz.vue'
const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : "/",
            name : 'quizes',
            component : Quizes
        },
        {
            path : "/quiz/:id",
            name : 'quiz',
            component : Quiz
        }
    ]
})

export default router