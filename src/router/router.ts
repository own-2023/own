import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from './../views/HomeView.vue'
import SignInView from './../views/SignInView.vue'
import SignUpView from './../views/SignUpView.vue'

const routes = [
  { path: '/sign-in', name: 'sign-in', component: SignInView },
  {path: '/', name: 'home', component: HomeView},
  {path: '/sign-up', name: 'sign-up', component: SignUpView}
]

 const router = createRouter({
  
  history: createWebHashHistory(),
  routes, 
})

export default router
