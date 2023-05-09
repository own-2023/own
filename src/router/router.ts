import SignIn from './../components/SignIn.vue'
import {createRouter, createWebHashHistory} from 'vue-router';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/sign-in', name: 'sign-in', component: SignIn },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
 const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router
