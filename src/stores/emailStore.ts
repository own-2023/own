import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

export const useAuthenticatedStore = defineStore('email',() => {
    const email = ref('')
    function getEmail(): string{
        return email.value;
    }

    function setEmail(value: string){
        email.value = value;
    }

    return {email: email, getEmail, setEmail}

})