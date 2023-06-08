import { createRouter,createWebHistory } from "vue-router";
import Quizes from "../views/quizesView.vue"
import Quiz from '../views/quiz.vue'
import Costomize from  "../views/Costomize.vue"
const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : "/",
            name : 'quizes',
            component : Quizes,
            meta: { transition: 'fade' },
            
        },
        {
            path : "/quiz/:id",
            name : 'quiz',
            component : Quiz,
            meta: { transition: 'fade' },
        },
        {
            path : "/costomize/:id",
            name : 'costomize',
            component : Costomize,
            meta: { transition: 'fade' },
        }
    ]
})

export default router