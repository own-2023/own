import 'bootstrap/dist/css/bootstrap.css'



import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {createPinia} from 'pinia'



let auth_base_url: string = '';
let blockchain_base_url: string = '';
const node_env: string = import.meta.env.VITE_NODE_ENV || 'development';

if (node_env === 'development') {
    auth_base_url = import.meta.env.VITE_AUTH_BASE_URL_DEV;
    blockchain_base_url = import.meta.env.VITE_BLOCKCHAIN_BASE_URL_DEV;
    console.log('DEVELOPMENT ');

} 
else if (node_env === 'production') {
    auth_base_url = import.meta.env.VITE_AUTH_BASE_URL_PROD;
    blockchain_base_url = import.meta.env.VITE_BLOCKCHAIN_BASE_URL_PROD;
    console.log('PRODUCTION ');

}

//console.log('auth_base_url: ', auth_base_url);
//console.log('blockchain_base_url: ', blockchain_base_url);


const pinia = createPinia()
const app = createApp(App)
app.provide('auth_base_url', auth_base_url);
app.provide('blockchain_base_url', blockchain_base_url);


app.config.globalProperties.auth_base_url = auth_base_url;
app.config.globalProperties.blockchain_base_url = blockchain_base_url;

app.use(pinia);
app.use(router);
app.mount('#app')


import 'bootstrap/dist/js/bootstrap.js'